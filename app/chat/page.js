"use client"
import MessageInput from "@/components/custom/chatBox/message-input";
import ChatArea from "@/components/custom/chatBox/chat-box";
import { SheetSide } from "@/components/custom/chatBox/sheet-side";

const Page = () => {
  return (
    <div className="w-full flex flex-col justify-between min-h-screen ">
      <div className="flex flex-col items-center">
        <h1>Chat Page</h1>
      </div>
      <div className="absolute flex flex-col  top-4 right-4">
        <SheetSide/>
      </div>
    
      <div className="w-full flex flex-col items-center mb-5"> 
       
        <ChatArea/>
        <MessageInput/>
      </div>
    </div>
  );
}

export default Page;

