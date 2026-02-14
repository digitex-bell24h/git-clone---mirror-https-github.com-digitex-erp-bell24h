import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    // Create simple demo session without database
    const demoUser = {
      id: 'demo-user-001',
      name: 'Demo User',
      email: 'demo@bell24h.com',
      phone: '9876543210',
      role: 'buyer',
      company: 'Demo Company Pvt Ltd',
    };

    // Create response with redirect
    const dashboardUrl = new URL('/dashboard', request.url);
    const response = NextResponse.redirect(dashboardUrl);

    // Set demo session cookie (simple, no database needed)
    response.cookies.set('bell24h-demo', 'active', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 7, // 7 days
    });

    response.cookies.set('demo-user', JSON.stringify(demoUser), {
      httpOnly: false, // Allow client-side access
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 7,
    });

    return response;
  } catch (error) {
    console.error('Demo login error:', error);
    return NextResponse.json(
      { success: false, message: 'Demo login failed', error: String(error) },
      { status: 500 }
    );
  }
}

// Also handle GET requests
export async function GET(request: NextRequest) {
  return POST(request);
}
