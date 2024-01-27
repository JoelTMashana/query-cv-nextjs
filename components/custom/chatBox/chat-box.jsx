"use client"
import "./custom.css"
import { useState } from "react";
import MessageItem from "./message-item";


const initialMessages = [
  { id: 1, text: "Hello, how can I help you?", sender: "support" },
  { id: 2, text: "I'm having an issue with my account.", sender: "user" },
  { id: 3, text: "I'm having an issue with my account.", sender: "support" },
  { id: 4, text: "I'm having an issue with my account.", sender: "user" },
  { id: 5, text: "Hello, how can I help you?", sender: "support" },
  { id: 6, text: "I'm having an issue with my account.", sender: "user" },
  { id: 7, text: "I'm having an issue with my account.", sender: "support" },
  { id: 8, text: "I'm having an issue with my account.", sender: "user" },
  { id: 9, text: "Hello, how can I help you?", sender: "support" },
  { id: 10, text: "I'm having an issue with my account.", sender: "user" },
  { id: 11, text: "I'm having an issue with my account.", sender: "support" },
  { id: 12, text: "I'm having an issue with my account.", sender: "user" },
  { id: 13, text: "Hello, how can I help you?", sender: "support" },
  { id: 14, text: "I'm having an issue with my account.", sender: "user" },
  { id: 15, text: "I'm having an issue with my account.", sender: "support" },
  { id: 16, text: "I'm having an issue with my account.", sender: "user" },

]


const ChatArea = () => {
  const [messages, setMessages] = useState(initialMessages);

  return (
    <div className="chat-area w-11/12 md:w-5/6  lg:w-5/12 custom-scroll-height">
      {messages.map((message) => (
        <MessageItem key={message.id} message={message} />
      ))}
    </div>
  );
}

export default ChatArea


