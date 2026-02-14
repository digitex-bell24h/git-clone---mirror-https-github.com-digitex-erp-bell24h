'use client';

export function OTPDisplay({ phone }: { phone: string }) {
  return (
    <div className=\ mt-4 p-6 bg-gradient-to-r from-green-50 to-blue-50 border-2 border-green-300 rounded-xl shadow-lg\>
      <div className=\text-center\>
        <p className=\text-sm font-medium text-gray-600 mb-2\>
          🎯 TEST MODE - Your OTP:
        </p>
        <div className=\text-5xl font-bold text-green-600 tracking-widest mb-3\>
          123456
        </div>
        <p className=\text-xs text-gray-500\>
          Enter this OTP above to login
        </p>
        <p className=\text-xs text-orange-600 mt-2\>
          ⚠️ DLT Registration Pending - Test Mode Active
        </p>
      </div>
    </div>
  );
}
