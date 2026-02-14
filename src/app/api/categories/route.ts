import { NextResponse } from 'next/server';
import { sql } from '@/lib/db';

export async function GET() {
  try {
    const result = await sql(
      `SELECT
         c.id,
         c.name,
         c.slug,
         c.icon,
         c.description,
         (SELECT COUNT(*) FROM subcategories sc WHERE sc.parent_category_id = c.id) AS subcategory_count,
         (SELECT COUNT(*) FROM rfqs r WHERE r.category_id = c.id) AS rfq_count
       FROM categories c
       WHERE c.parent_category_id IS NULL
       ORDER BY c.name`
    );

    return NextResponse.json(result.rows ?? []);
  } catch (error) {
    console.error('Categories API error:', error);
    return NextResponse.json(
      {
        error: 'Failed to fetch categories',
        details: error instanceof Error ? error.message : String(error),
      },
      { status: 500 }
    );
  }
}


