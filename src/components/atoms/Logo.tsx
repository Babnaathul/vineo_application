import Image from 'next/image';

const Logo = () => {
  return (
    <Image
      src="/assets/vineo.png" // Ensure the logo file exists in public/assets
      alt="Vineo Logo"
      width={120}
      height={50}
      className="object-contain"
    />
  );
};

export default Logo;
