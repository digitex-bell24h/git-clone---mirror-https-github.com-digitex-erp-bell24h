/**
 * Application Configuration
 * 
 * Centralized configuration for all environment variables and app settings
 */

// Validate required environment variables
const requiredEnvVars = [
    'NEXT_PUBLIC_INSFORGE_API_URL',
    'DATABASE_URL',
] as const;

// Warn about missing environment variables in development
if (process.env.NODE_ENV === 'development') {
    requiredEnvVars.forEach((envVar) => {
        if (!process.env[envVar]) {
            console.warn(`⚠️  Missing environment variable: ${envVar}`);
        }
    });
}

export const config = {
    // ============================================
    // APP SETTINGS
    // ============================================
    app: {
        name: 'Bell24H',
        url: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
        env: process.env.NODE_ENV || 'development',
        isDevelopment: process.env.NODE_ENV === 'development',
        isProduction: process.env.NODE_ENV === 'production',
    },

    // ============================================
    // INSFORGE BACKEND (PRIMARY)
    // ============================================
    insforge: {
        apiUrl: process.env.NEXT_PUBLIC_INSFORGE_API_URL || '',
        apiKey: process.env.INSFORGE_API_KEY || '',
        anonKey: process.env.INSFORGE_ANON_KEY || '',
        apiSecret: process.env.INSFORGE_API_SECRET || '',
        timeout: 30000,
        isPrimary: true,
    },

    // ============================================
    // NEON DATABASE (BACKUP/LEGACY)
    // ============================================
    neon: {
        url: process.env.DATABASE_URL || '',
        enabled: false, // Legacy only
    },

    // ============================================
    // DATABASE
    // ============================================
    database: {
        url: process.env.DATABASE_URL || '',
        directUrl: process.env.DIRECT_URL || process.env.DATABASE_URL || '',
    },

    // ============================================
    // AUTHENTICATION
    // ============================================
    auth: {
        nextAuthUrl: process.env.NEXTAUTH_URL || 'http://localhost:3000',
        nextAuthSecret: process.env.NEXTAUTH_SECRET || '',
        sessionMaxAge: 30 * 24 * 60 * 60, // 30 days
    },

    // ============================================
    // CLOUDINARY
    // ============================================
    cloudinary: {
        cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || process.env.CLOUDINARY_CLOUD_NAME || '',
        apiKey: process.env.CLOUDINARY_API_KEY || '',
        apiSecret: process.env.CLOUDINARY_API_SECRET || '',
    },

    // ============================================
    // AI SERVICES
    // ============================================
    ai: {
        openaiApiKey: process.env.OPENAI_API_KEY || '',
        model: 'gpt-4-turbo-preview',
        maxTokens: 4000,
    },

    // ============================================
    // SMS/OTP
    // ============================================
    sms: {
        provider: 'msg91',
        msg91: {
            authKey: process.env.MSG91_AUTH_KEY || '',
            senderId: process.env.MSG91_SENDER_ID || 'BELL24H',
            templateId: process.env.MSG91_TEMPLATE_ID || '',
        },
    },

    // ============================================
    // REDIS CACHE
    // ============================================
    redis: {
        url: process.env.REDIS_URL || '',
        enabled: !!process.env.REDIS_URL,
    },

    // ============================================
    // FEATURE FLAGS
    // ============================================
    features: {
        voiceRFQ: true,
        videoRFQ: true,
        aiMatching: true,
        escrow: true,
        blockchain: true,
        analytics: true,
        adminDashboard: true,
    },

    // ============================================
    // API RATE LIMITS
    // ============================================
    rateLimit: {
        windowMs: 15 * 60 * 1000, // 15 minutes
        maxRequests: 100, // per window
    },

    // ============================================
    // FILE UPLOAD LIMITS
    // ============================================
    upload: {
        maxFileSize: 50 * 1024 * 1024, // 50MB
        allowedImageTypes: ['image/jpeg', 'image/png', 'image/webp', 'image/gif'],
        allowedVideoTypes: ['video/mp4', 'video/webm', 'video/quicktime'],
        allowedAudioTypes: ['audio/mpeg', 'audio/wav', 'audio/webm', 'audio/ogg'],
    },

    // ============================================
    // PAGINATION
    // ============================================
    pagination: {
        defaultPageSize: 20,
        maxPageSize: 100,
    },
} as const;

// Export individual configs for convenience
export const {
    app,
    insforge,
    database,
    auth,
    cloudinary,
    ai,
    sms,
    redis,
    features,
    rateLimit,
    upload,
    pagination,
} = config;

// Type exports
export type Config = typeof config;
export type AppConfig = typeof app;
export type InsforgeConfig = typeof insforge;
