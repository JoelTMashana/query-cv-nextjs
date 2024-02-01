import Image from 'next/image'; 
import useChatStore from '@/store/chatStore';

const SidebarAvatar = ({ src, fallbackText }) => {
  const { isLoggedIn, user } = useChatStore();
  return (
    <div className="flex flex-col items-center">
      <div className="flex justify-center items-center overflow-hidden rounded-full mb-4">
        {src ? (
          <Image src={src} alt={fallbackText} width={150} height={150} className="rounded-full" />
        ) : (
          <span className="text-xl font-semibold">{fallbackText}</span>
        )}
      </div>
      {isLoggedIn && user ? (
        <div className="text-center">
          <div className="font-semibold">
            {user.firstname} {user.lastname}
          </div>
          <div className="text-sm text-gray-600">{user.email}</div>
        </div>
      ) : null}
    </div>
  );
};

export default SidebarAvatar;
