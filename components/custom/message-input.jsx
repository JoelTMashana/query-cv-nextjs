"use client"
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import TextareaAutosize from 'react-textarea-autosize';


const MessageInput = () => {
  const [message, setMessage] = useState('');

  const handleSendMessage = () => {
    if (message.trim()) {
      console.log(message);
      setMessage(''); 
    }
  };

  return (
    <div className="message-input relative w-11/12 md:w-5/6  lg:w-5/12 first-line:gap-2">
      <TextareaAutosize
        placeholder="Type your message here."
        minRows={3}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="flex-1 w-full pr-20"
      />
      <Button onClick={handleSendMessage} className="absolute bottom-4 right-0 mb-1 mr-5"></Button>
    </div>
  );
};

export default MessageInput;
