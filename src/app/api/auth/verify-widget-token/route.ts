import { NextRequest, NextResponse } from 'next/server';

const MSG91_TOKEN = process.env.MSG91_AUTH_KEY || '468517TtdprXApdr36935092aP1';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { accessToken, otp, phone } = body;

    // Method 1: Verify access token from widget
    if (accessToken) {
      const response = await fetch('https://control.msg91.com/api/v5/widget/verifyAccessToken', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          authkey: MSG91_TOKEN,
          'access-token': accessToken
        })
      });

      const data = await response.json();
      console.log('MSG91 verification response:', data);

      if (data.type === 'success') {
        return createSuccessResponse(data.mobile || phone);
      }
    }

    // Method 2: Direct OTP verification
    if (otp && phone) {
      // Accept test OTP
      if (otp === '123456') {
        return createSuccessResponse(phone);
      }

      const response = await fetch('https://control.msg91.com/api/v5/otp/verify', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'authkey': MSG91_TOKEN
        },
        body: JSON.stringify({
          otp: otp,
          mobile: phone.startsWith('91') ? phone : '91' + phone
        })
      });

      const data = await response.json();
      if (data.type === 'success') {
        return createSuccessResponse(phone);
      }
    }

    return NextResponse.json({ success: false, error: 'Verification failed' }, { status: 400 });

  } catch (error) {
    console.error('Verification error:', error);
    return NextResponse.json({ success: false, error: 'Server error' }, { status: 500 });
  }
}

function createSuccessResponse(phone: string) {
  const user = {
    id: 'user-' + Date.now(),
    phone: phone,
    name: 'Bell24h User',
    email: phone + '@bell24h.com',
    role: 'buyer',
    verified: true,
    provider: 'msg91'
  };

  return NextResponse.json({
    success: true,
    message: 'OTP verified successfully',
    user: user,
    token: 'session-' + Date.now()
  });
}

export async function GET() {
  return NextResponse.json({ 
    status: 'active', 
    provider: 'MSG91',
    testOtp: '123456'
  });
}
