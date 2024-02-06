"use client"
import MessageInput from "@/components/custom/chatBox/message-input";
import dynamic from 'next/dynamic';


const ChatAreaNoSSR = dynamic(() => import('@/components/custom/chatBox/chat-box'), {
  ssr: false, 
});


const Page = () => {
  return (
    <div className="flex flex-col justify-between w-full">

      <div className="fixed inset-x-0 bottom-7 w-full flex justify-center">
        <div className=" w-11/12 md:w-5/6 lg:w-5/12 custom-width"> 
          <ChatAreaNoSSR />
          <MessageInput/>
        </div>
      </div>
    </div>
  );
}

export default Page;

