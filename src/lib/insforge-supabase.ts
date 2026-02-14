import { createClient } from '@supabase/supabase-js';

const insforgeUrl = process.env.NEXT_PUBLIC_INSFORGE_API_URL!;
// Ideally use ANON_KEY, but fall back to API_KEY if not yet configured (though API_KEY might be full access)
const insforgeKey = process.env.INSFORGE_ANON_KEY || process.env.INSFORGE_API_KEY!;

if (!insforgeUrl) {
    console.warn('⚠️ NEXT_PUBLIC_INSFORGE_API_URL is missing. Database connections will fail.');
}

if (!insforgeKey) {
    console.warn('⚠️ INSFORGE_API_KEY/ANON_KEY is missing. Database connections will fail.');
}

// Insforge provides Supabase-compatible APIs
export const insforge = createClient(insforgeUrl, insforgeKey, {
    auth: {
        persistSession: true,
        autoRefreshToken: true,
    },
});

// Typed database client helpers
export const db = {
    users: () => insforge.from('users'),
    rfqs: () => insforge.from('rfqs'),
    suppliers: () => insforge.from('suppliers'),
    quotes: () => insforge.from('quotes'),
    categories: () => insforge.from('categories'),
    reviews: () => insforge.from('reviews'),
    messages: () => insforge.from('messages'),
    subscriptions: () => insforge.from('subscriptions'),
    transactions: () => insforge.from('transactions'),
    rfqMatches: () => insforge.from('rfq_matches'),
    notifications: () => insforge.from('notifications'),

    // Generic helper
    table: (tableName: string) => insforge.from(tableName),
};
