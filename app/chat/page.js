"use client"
import MessageInput from "@/components/custom/chatBox/message-input";
import ChatArea from "@/components/custom/chatBox/chat-box";

const Page = () => {
  return (
    <div className="w-full flex flex-col items-center justify-between min-h-screen overflow-hidden">
        <ChatArea/>
        <MessageInput/>
    </div>
  );
}

export default Page;

