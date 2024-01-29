"use client"
import "./custom.css"
import React, { useEffect, useRef } from 'react';
import MessageItem from "./message-item";
import useChatStore from "@/store/chatStore";



const ChatArea = () => {
  const messages = useChatStore((state) => state.messages);
  const chatAreaRef = useRef(null);

  useEffect(() => {
    if (chatAreaRef.current) {
      const { current: chatDiv } = chatAreaRef;
      chatDiv.scrollTop = chatDiv.scrollHeight; // Scroll to the bottom
    }
  }, [messages]);

  return (
    <div ref={chatAreaRef} className="chat-area w-11/12 md:w-5/6  lg:w-5/12 custom-scroll-height">
      {messages.map((message) => (
        <MessageItem key={message.id} message={message} />
      ))}
    </div>
  );
}

export default ChatArea


