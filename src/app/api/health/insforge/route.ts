import { NextRequest } from 'next/server';
import { withErrorHandling, successResponse, errorResponse } from '@/lib/api-helpers';
import { healthService } from '@/lib/insforge-client';
import { config } from '@/config/app';

/**
 * Insforge Backend Health Check
 * 
 * Tests connectivity to the Insforge backend
 * Returns backend status and configuration info
 */

export const GET = withErrorHandling(async (request: NextRequest) => {
    try {
        // Check if Insforge is configured
        if (!config.insforge.apiUrl) {
            return errorResponse(
                'Insforge backend is not configured. Please set NEXT_PUBLIC_INSFORGE_API_URL environment variable.',
                503
            );
        }

        // Try to ping Insforge backend
        const healthCheck = await healthService.check();

        if (!healthCheck.success) {
            return errorResponse(
                `Insforge backend is unreachable: ${healthCheck.error}`,
                503,
                {
                    insforgeUrl: config.insforge.apiUrl,
                    error: healthCheck.error,
                }
            );
        }

        return successResponse({
            status: 'healthy',
            backend: 'insforge.dev',
            insforgeUrl: config.insforge.apiUrl,
            insforgeStatus: healthCheck.data,
            features: config.features,
            timestamp: new Date().toISOString(),
        });
    } catch (error) {
        return errorResponse(
            error instanceof Error ? error.message : 'Health check failed',
            500
        );
    }
});
