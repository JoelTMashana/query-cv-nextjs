"use client"
import { Button } from "@/components/ui/button"
import Link from "next/link";
import MessageInput from "@/components/custom/chatBox/message-input";
import ChatArea from "@/components/custom/chatBox/chat-box";

const Page = () => {
  return (
    <div className="w-full flex flex-col justify-between min-h-screen ">
      <div className="flex flex-col items-center">
        <h1>Chat Page</h1>
        
        <Button asChild>
          <Link href="/register">Next</Link>
        </Button>
        <Button asChild>
          <Link href="/">Logout</Link>
        </Button>
      </div>

      <div className="w-full flex flex-col items-center mb-5"> 
        <ChatArea/>
        <MessageInput/>
      </div>
    </div>
  );
}

export default Page;

