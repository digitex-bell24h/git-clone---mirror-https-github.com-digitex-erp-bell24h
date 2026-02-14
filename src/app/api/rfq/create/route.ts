import { NextRequest } from 'next/server';
import {
  withErrorHandling,
  parseBody,
  validateRequiredFields,
  validationError,
  successResponse,
  errorResponse
} from '@/lib/api-helpers';
import { rfqService, aiService } from '@/lib/insforge-client';
import { config } from '@/config/app';

/**
 * RFQ Creation Endpoint
 * 
 * Supports three modes:
 * 1. Text RFQ - Direct text input
 * 2. Voice RFQ - Audio file with transcription
 * 3. Video RFQ - Video file with transcription
 * 
 * Flow:
 * 1. Validate input
 * 2. Create RFQ in Insforge backend
 * 3. Trigger AI matching (async)
 * 4. Return RFQ ID
 */

interface CreateRFQBody {
  title: string;
  description: string;
  quantity: string | number;
  deadline: string;
  category?: string;
  budget?: string | number;
  type?: 'text' | 'voice' | 'video';
  location?: string;
  audioUrl?: string;
  videoUrl?: string;
  userId?: string;
  userEmail?: string;
}

export const POST = withErrorHandling(async (request: NextRequest) => {
  // Parse request body
  const body = await parseBody<CreateRFQBody>(request);

  if (!body) {
    return validationError('Invalid request body');
  }

  // Validate required fields
  const validation = validateRequiredFields(body, ['title', 'description', 'quantity', 'deadline']);

  if (!validation.valid) {
    return validationError(
      `Missing required fields: ${validation.missing?.join(', ')}`,
      { missing: validation.missing }
    );
  }

  // Sanitize and prepare data
  const rfqData = {
    title: body.title.trim(),
    description: body.description.trim(),
    quantity: typeof body.quantity === 'string' ? parseInt(body.quantity, 10) : body.quantity,
    deadline: new Date(body.deadline).toISOString(),
    category: body.category?.trim() || 'General',
    budget: body.budget ? parseFloat(String(body.budget).replace(/[^0-9.]/g, '')) : undefined,
    type: body.type || 'text',
    location: body.location?.trim(),
    audioUrl: body.audioUrl,
    videoUrl: body.videoUrl,
    userId: body.userId,
    userEmail: body.userEmail || 'demo-buyer@bell24h.com',
    currency: 'INR',
  };

  // Additional validation
  if (isNaN(rfqData.quantity) || rfqData.quantity <= 0) {
    return validationError('Quantity must be a positive number');
  }

  if (new Date(rfqData.deadline) < new Date()) {
    return validationError('Deadline must be in the future');
  }

  try {
    // Create RFQ via Insforge backend
    const response = await rfqService.create(rfqData);

    if (!response.success) {
      return errorResponse(
        response.error || 'Failed to create RFQ',
        response.statusCode
      );
    }

    const createdRFQ = response.data;

    // Trigger AI matching asynchronously (don't wait for it)
    if (config.features.aiMatching && createdRFQ.id) {
      aiService.matchSuppliers(createdRFQ.id).catch((error) => {
        console.error('AI matching failed:', error);
        // Don't fail the request if AI matching fails
      });
    }

    // Process audio/video if provided (async)
    if (rfqData.type === 'voice' && rfqData.audioUrl) {
      processAudioRFQ(createdRFQ.id, rfqData.audioUrl).catch(console.error);
    } else if (rfqData.type === 'video' && rfqData.videoUrl) {
      processVideoRFQ(createdRFQ.id, rfqData.videoUrl).catch(console.error);
    }

    return successResponse(
      {
        rfqId: createdRFQ.id,
        rfq: createdRFQ,
      },
      'RFQ created successfully',
      201
    );
  } catch (error) {
    console.error('RFQ creation error:', error);
    return errorResponse(
      error instanceof Error ? error.message : 'Failed to create RFQ',
      500
    );
  }
});

// ============================================
// HELPER FUNCTIONS
// ============================================

/**
 * Process audio RFQ - transcribe and enhance
 */
async function processAudioRFQ(rfqId: string, audioUrl: string) {
  try {
    console.log(`Processing audio for RFQ ${rfqId}...`);

    // Transcribe audio using AI service
    const transcription = await aiService.transcribeAudio(audioUrl);

    if (transcription.success && transcription.data?.text) {
      // Generate enhanced description from transcript
      const enhanced = await aiService.generateDescription(transcription.data.text);

      if (enhanced.success) {
        // Update RFQ with transcript and enhanced description
        await rfqService.update(rfqId, {
          transcript: transcription.data.text,
          enhancedDescription: enhanced.data?.description,
        });
      }
    }

    console.log(`Audio processing completed for RFQ ${rfqId}`);
  } catch (error) {
    console.error(`Audio processing failed for RFQ ${rfqId}:`, error);
  }
}

/**
 * Process video RFQ - transcribe and analyze
 */
async function processVideoRFQ(rfqId: string, videoUrl: string) {
  try {
    console.log(`Processing video for RFQ ${rfqId}...`);

    // Transcribe video using AI service
    const transcription = await aiService.transcribeVideo(videoUrl);

    if (transcription.success && transcription.data?.text) {
      // Analyze video content and generate description
      const analysis = await aiService.analyzeRFQ({
        transcript: transcription.data.text,
        videoUrl,
      });

      if (analysis.success) {
        // Update RFQ with analysis results
        await rfqService.update(rfqId, {
          transcript: transcription.data.text,
          enhancedDescription: analysis.data?.description,
          extractedRequirements: analysis.data?.requirements,
          suggestedCategory: analysis.data?.category,
        });
      }
    }

    console.log(`Video processing completed for RFQ ${rfqId}`);
  } catch (error) {
    console.error(`Video processing failed for RFQ ${rfqId}:`, error);
  }
}

