'use client';
import Image from 'next/image';

const SidebarAvatar = ({ src, fallbackText }) => {
  return (
    <div className="flex justify-center items-center overflow-hidden bg-gray-200 rounded-full">
      {src ? (
        <Image src={src} alt={fallbackText}  width={100} height={100} className="rounded-full" />
      ) : (
        <span className="text-xl font-semibold">{fallbackText}</span>
      )}
    </div>
  );
};

export default SidebarAvatar;
