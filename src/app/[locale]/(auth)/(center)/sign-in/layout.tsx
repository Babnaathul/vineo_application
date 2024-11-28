import Image from 'next/image';

import Logo from '@/components/atoms/Logo';

export default function SignInLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen w-full flex-col bg-gradient-to-r from-gray-50 to-white lg:flex-row">
      {/* Left Side: Logo and Image */}
      <div className="relative flex w-full flex-col items-center p-4 lg:w-2/5">
        <div className="absolute left-8 top-10">
          <Logo />
        </div>
        <div className="flex h-full w-full items-center justify-center">
          <Image
            src="/assets/glass-bottle.png"
            alt="Glass and Bottle"
            width={900}
            height={800}
            className="object-contain"
          />
        </div>
      </div>

      {/* Right Side: Login Form */}
      <div className="flex items-center justify-center w-full lg:w-3/5 p-2">
        <div className="w-full max-w-md">{children}</div>
      </div>
    </div>
  );
}
