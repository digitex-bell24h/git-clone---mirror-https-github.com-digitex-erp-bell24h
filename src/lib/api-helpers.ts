/**
 * API Route Helpers
 * 
 * Utility functions for Next.js API routes that integrate with Insforge backend
 */

import { NextRequest, NextResponse } from 'next/server';
import { insforgeServerClient } from './insforge-client';

// ============================================
// TYPES
// ============================================

export interface ApiError {
    error: string;
    message?: string;
    statusCode: number;
    details?: any;
}

export interface ApiSuccess<T = any> {
    success: true;
    data: T;
    message?: string;
}

export type ApiResponse<T = any> = ApiSuccess<T> | ApiError;

// ============================================
// RESPONSE HELPERS
// ============================================

/**
 * Create a success response
 */
export function successResponse<T>(data: T, message?: string, status = 200): NextResponse<ApiSuccess<T>> {
    return NextResponse.json(
        {
            success: true,
            data,
            message,
        },
        { status }
    );
}

/**
 * Create an error response
 */
export function errorResponse(
    error: string,
    statusCode = 500,
    details?: any
): NextResponse<ApiError> {
    return NextResponse.json(
        {
            error,
            statusCode,
            details,
        },
        { status: statusCode }
    );
}

/**
 * Create a validation error response
 */
export function validationError(message: string, details?: any): NextResponse<ApiError> {
    return errorResponse(message, 400, details);
}

/**
 * Create an unauthorized error response
 */
export function unauthorizedError(message = 'Unauthorized'): NextResponse<ApiError> {
    return errorResponse(message, 401);
}

/**
 * Create a forbidden error response
 */
export function forbiddenError(message = 'Forbidden'): NextResponse<ApiError> {
    return errorResponse(message, 403);
}

/**
 * Create a not found error response
 */
export function notFoundError(message = 'Not found'): NextResponse<ApiError> {
    return errorResponse(message, 404);
}

// ============================================
// REQUEST HELPERS
// ============================================

/**
 * Parse JSON body from request with error handling
 */
export async function parseBody<T = any>(request: NextRequest): Promise<T | null> {
    try {
        return await request.json();
    } catch (error) {
        return null;
    }
}

/**
 * Get query parameters from request
 */
export function getQueryParams(request: NextRequest): Record<string, string> {
    const params: Record<string, string> = {};
    const searchParams = request.nextUrl.searchParams;

    searchParams.forEach((value, key) => {
        params[key] = value;
    });

    return params;
}

/**
 * Get a specific query parameter
 */
export function getQueryParam(request: NextRequest, key: string): string | null {
    return request.nextUrl.searchParams.get(key);
}

// ============================================
// INSFORGE PROXY HELPERS
// ============================================

/**
 * Proxy a request to Insforge backend
 * Useful for simple pass-through routes
 */
export async function proxyToInsforge(
    endpoint: string,
    method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH' = 'GET',
    body?: any
) {
    try {
        let response;

        switch (method) {
            case 'GET':
                response = await insforgeServerClient.get(endpoint);
                break;
            case 'POST':
                response = await insforgeServerClient.post(endpoint, body);
                break;
            case 'PUT':
                response = await insforgeServerClient.put(endpoint, body);
                break;
            case 'DELETE':
                response = await insforgeServerClient.delete(endpoint);
                break;
            case 'PATCH':
                response = await insforgeServerClient.patch(endpoint, body);
                break;
        }

        if (response.success) {
            return successResponse(response.data);
        } else {
            return errorResponse(response.error || 'Request failed', response.statusCode);
        }
    } catch (error) {
        return errorResponse(
            error instanceof Error ? error.message : 'Internal server error',
            500
        );
    }
}

// ============================================
// ERROR HANDLING WRAPPER
// ============================================

/**
 * Wrap an API handler with error handling
 */
export function withErrorHandling(
    handler: (request: NextRequest, context?: any) => Promise<NextResponse>
) {
    return async (request: NextRequest, context?: any): Promise<NextResponse> => {
        try {
            return await handler(request, context);
        } catch (error) {
            console.error('API Error:', error);

            if (error instanceof Error) {
                return errorResponse(error.message, 500);
            }

            return errorResponse('Internal server error', 500);
        }
    };
}

// ============================================
// VALIDATION HELPERS
// ============================================

/**
 * Validate required fields in request body
 */
export function validateRequiredFields<T extends Record<string, any>>(
    body: T,
    requiredFields: (keyof T)[]
): { valid: boolean; missing?: string[] } {
    const missing = requiredFields.filter((field) => {
        const value = body[field];
        return value === undefined || value === null || value === '';
    });

    if (missing.length > 0) {
        return { valid: false, missing: missing as string[] };
    }

    return { valid: true };
}

/**
 * Sanitize string input
 */
export function sanitizeString(input: string): string {
    return input.trim().replace(/[<>]/g, '');
}

/**
 * Validate email format
 */
export function isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

/**
 * Validate phone number (Indian format)
 */
export function isValidPhone(phone: string): boolean {
    const phoneRegex = /^[6-9]\d{9}$/;
    return phoneRegex.test(phone.replace(/\D/g, ''));
}

// ============================================
// AUTHENTICATION HELPERS
// ============================================

/**
 * Get bearer token from request headers
 */
export function getBearerToken(request: NextRequest): string | null {
    const authHeader = request.headers.get('authorization');

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return null;
    }

    return authHeader.substring(7);
}

/**
 * Get API key from request headers
 */
export function getApiKey(request: NextRequest): string | null {
    return request.headers.get('x-api-key');
}

// ============================================
// CORS HELPERS
// ============================================

/**
 * Add CORS headers to response
 */
export function withCORS(response: NextResponse, allowedOrigins: string[] = ['*']): NextResponse {
    const origin = allowedOrigins.includes('*') ? '*' : allowedOrigins[0];

    response.headers.set('Access-Control-Allow-Origin', origin);
    response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-API-Key');
    response.headers.set('Access-Control-Max-Age', '86400');

    return response;
}

/**
 * Handle OPTIONS request for CORS preflight
 */
export function handleCORSPreflight(): NextResponse {
    return new NextResponse(null, {
        status: 204,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-API-Key',
            'Access-Control-Max-Age': '86400',
        },
    });
}
