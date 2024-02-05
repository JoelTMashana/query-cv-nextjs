"use client"
import MessageInput from "@/components/custom/chatBox/message-input";
import ChatArea from "@/components/custom/chatBox/chat-box";

const Page = () => {
  return (
    <div className="flex flex-col justify-between w-full">
      {/* Other content goes here */}

      <div className="fixed inset-x-0 bottom-7 px-4 w-full flex justify-center">
        <div className="w-full max-w-md"> 
          <ChatArea/>
          <MessageInput/>
        </div>
      </div>
    </div>
  );
}

export default Page;

