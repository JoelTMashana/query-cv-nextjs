"use client"
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import TextareaAutosize from 'react-textarea-autosize';
import { queryGPTPreRegistration } from '@/services/chatService';
import useChatStore from '@/store/chatStore';


const MessageInput = () => {
  const [message, setMessage] = useState('');
  const addMessage = useChatStore((state) => state.addMessage);

  const handleSendMessage = async () => {
    if (message.trim()) {
      console.log(message);
      addMessage({ id: Date.now(), text: message.trim(), sender: 'user' });
      setMessage(''); 
      const response = await queryGPTPreRegistration(message);
      console.log(response);
      if (response && response.gpt_response) {
        addMessage({ id: Date.now() + 1, text: response.gpt_response, sender: 'gpt' });
      }
    }
  };

  return (
    <div className="message-input relative w-11/12 md:w-5/6  lg:w-5/12 first-line:gap-2">
      <TextareaAutosize
        placeholder="Type your message here."
        minRows={2}
        maxRows={3}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="flex-1 w-full pr-16 border-2 border-gray-300 rounded-md p-2 chat-area"
      />
      <Button onClick={handleSendMessage} className="absolute bottom-4 right-0 mb-1 mr-5">Send</Button>
    </div>
  );
};

export default MessageInput;
