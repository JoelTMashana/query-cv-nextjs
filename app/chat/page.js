"use client"
import MessageInput from "@/components/custom/chatBox/message-input";
import ChatArea from "@/components/custom/chatBox/chat-box";

const Page = () => {
  return (
    <div className="flex flex-col justify-between w-full">

      <div className="fixed inset-x-0 bottom-7 w-full flex justify-center">
        <div className=" w-11/12 md:w-5/6 lg:w-5/12 custom-width"> 
          <ChatArea/>
          <MessageInput/>
        </div>
      </div>
    </div>
  );
}

export default Page;

