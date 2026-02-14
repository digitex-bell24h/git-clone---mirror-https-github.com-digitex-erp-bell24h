import { Pool, QueryResult, QueryResultRow } from 'pg';

// Simple pooled Postgres client, using DATABASE_URL (Neon) in production
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : undefined,
});

export async function sql<T extends QueryResultRow = any>(
  text: string,
  params?: any[]
): Promise<QueryResult<T>> {
  if (process.env.NODE_ENV === 'development') {
    console.warn('⚠️ [DEPRECATED] Direct SQL queries via src/lib/db.ts are deprecated. Please use src/lib/insforge-supabase.ts');
  }

  const client = await pool.connect();
  try {
    return await client.query<T>(text, params);
  } finally {
    client.release();
  }
}


