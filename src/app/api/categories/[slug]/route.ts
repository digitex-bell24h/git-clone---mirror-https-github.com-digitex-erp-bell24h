import { NextResponse } from 'next/server';
import { sql } from '@/lib/db';

interface RouteParams {
  params: { slug: string };
}

export async function GET(_req: Request, { params }: RouteParams) {
  const { slug } = params;

  try {
    const categoryResult = await sql(
      `SELECT id, name, slug, icon, description
       FROM categories
       WHERE slug = $1
       LIMIT 1`,
      [slug]
    );

    if (categoryResult.rowCount === 0) {
      return NextResponse.json({ error: 'Category not found' }, { status: 404 });
    }

    const category = categoryResult.rows[0];

    const subcategoriesResult = await sql(
      `SELECT id, name, slug, description
       FROM subcategories
       WHERE parent_category_id = $1
       ORDER BY name`,
      [category.id]
    );

    const rfqsResult = await sql(
      `SELECT id, title, description, budget, status, created_at
       FROM rfqs
       WHERE category_id = $1
       ORDER BY created_at DESC
       LIMIT 50`,
      [category.id]
    );

    return NextResponse.json({
      category,
      subcategories: subcategoriesResult.rows ?? [],
      rfqs: rfqsResult.rows ?? [],
    });
  } catch (error) {
    console.error('Category detail API error:', error);
    return NextResponse.json(
      {
        error: 'Failed to fetch category details',
        details: error instanceof Error ? error.message : String(error),
      },
      { status: 500 }
    );
  }
}


