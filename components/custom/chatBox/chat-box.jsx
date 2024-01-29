"use client"
import "./custom.css"
import { useState } from "react";
import MessageItem from "./message-item";
import useChatStore from "@/store/chatStore";

const ChatArea = () => {
  const messages = useChatStore((state) => state.messages);

  return (
    <div className="chat-area w-11/12 md:w-5/6  lg:w-5/12 custom-scroll-height">
      {messages.map((message) => (
        <MessageItem key={message.id} message={message} />
      ))}
    </div>
  );
}

export default ChatArea


