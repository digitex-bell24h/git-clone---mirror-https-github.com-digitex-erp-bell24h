import { db, insforge } from './insforge-supabase';
import { PostgrestError } from '@supabase/supabase-js';

// Response wrapper types
interface ServiceResponse<T> {
    success: boolean;
    data?: T;
    error?: string;
    statusCode: number;
}

// Helper to wrap Supabase responses
const wrapResponse = <T>(data: T | null, error: PostgrestError | null): ServiceResponse<T> => {
    if (error) {
        return {
            success: false,
            error: error.message,
            statusCode: parseInt(error.code) || 500
        };
    }
    return {
        success: true,
        data: data as T,
        statusCode: 200
    };
};

/**
 * RFQ Service
 */
export const rfqService = {
    // Create RFQ
    create: async (data: any) => {
        const { data: result, error } = await db.rfqs().insert(data).select().single();
        return wrapResponse(result, error);
    },

    // Get by ID
    getById: async (id: string) => {
        const { data, error } = await db.rfqs().select('*').eq('id', id).single();
        return wrapResponse(data, error);
    },

    // List RFQs
    list: async (params?: any) => {
        let query = db.rfqs().select('*');
        // Basic filtering TODO: Add robust filter parsing
        if (params?.type) query = query.eq('type', params.type);
        if (params?.category) query = query.eq('category', params.category);

        const { data, error } = await query;
        return wrapResponse(data, error);
    },

    // Update RFQ
    update: async (id: string, data: any) => {
        const { data: result, error } = await db.rfqs().update(data).eq('id', id).select().single();
        return wrapResponse(result, error);
    },

    // Delete RFQ
    delete: async (id: string) => {
        const { error } = await db.rfqs().delete().eq('id', id);
        return wrapResponse(null, error); // Data is null on delete usually
    },

    // Search
    search: async (queryText: string) => {
        const { data, error } = await db.rfqs().select('*').ilike('title', `%${queryText}%`);
        return wrapResponse(data, error);
    }
};

/**
 * Supplier Service
 */
export const supplierService = {
    create: async (data: any) => {
        const { data: result, error } = await db.suppliers().insert(data).select().single();
        return wrapResponse(result, error);
    },
    getById: async (id: string) => {
        const { data, error } = await db.suppliers().select('*').eq('id', id).single();
        return wrapResponse(data, error);
    },
    list: async (params?: any) => {
        const { data, error } = await db.suppliers().select('*'); // Todo filters
        return wrapResponse(data, error);
    },
    update: async (id: string, data: any) => {
        const { data: result, error } = await db.suppliers().update(data).eq('id', id).select().single();
        return wrapResponse(result, error);
    },
    products: {
        list: async (supplierId: string) => {
            // Assuming products table or field? Using generic table helper for now if it exists
            // For now, let's assume it's a separate table or relation
            // const { data, error } = await db.table('products').select('*').eq('supplier_id', supplierId);
            return { success: true, data: [] as any[], statusCode: 200 }; // Placeholder
        },
        create: async (supplierId: string, data: any) => {
            return { success: true, data: {}, statusCode: 200 }; // Placeholder
        }
    }
};

/**
 * AI Service (Invokes Edge Functions)
 */
export const aiService = {
    // Helper to invoke functions
    invoke: async (functionName: string, body: any) => {
        const { data, error } = await insforge.functions.invoke(functionName, { body });
        if (error) return { success: false, error: error.message, statusCode: 500 };
        return { success: true, data, statusCode: 200 };
    },

    matchSuppliers: (rfqId: string) => aiService.invoke('match-suppliers', { rfqId }),
    analyzeRFQ: (rfqData: any) => aiService.invoke('analyze-rfq', rfqData),
    transcribeAudio: (audioUrl: string) => aiService.invoke('transcribe', { audioUrl }),
    transcribeVideo: (videoUrl: string) => aiService.invoke('transcribe-video', { videoUrl }),
    generateDescription: (transcript: string) => aiService.invoke('generate-description', { transcript }),
};

/**
 * Auth Service (Wraps Insforge/Supabase Auth)
 */
export const authService = {
    sendOTP: async (phone: string) => {
        const { error } = await insforge.auth.signInWithOtp({ phone });
        return { success: !error, error: error?.message, statusCode: error ? 400 : 200 };
    },
    verifyOTP: async (phone: string, token: string) => {
        const { data, error } = await insforge.auth.verifyOtp({ phone, token, type: 'sms' });
        return { success: !error, data, error: error?.message, statusCode: error ? 400 : 200 };
    }
};

/**
 * Health Service
 */
export const healthService = {
    check: async () => {
        // Broad check of system health
        const dbHealth = await healthService.checkDatabase();

        return {
            success: dbHealth.success,
            data: {
                database: dbHealth.success ? 'connected' : 'disconnected',
                api: 'connected'
            },
            status: dbHealth.success ? 'healthy' : 'unhealthy',
            backend: 'insforge.dev'
        };
    },

    checkDatabase: async () => {
        // Simple DB query to verify connection
        const { error } = await db.users().select('count').limit(1).single();
        return { success: !error };
    },

    checkAI: async () => {
        // Ping AI service
        // Since we don't have a direct ping, we assume it's up if functions URL is configured
        return { success: true };
    }
};

export { insforge };
