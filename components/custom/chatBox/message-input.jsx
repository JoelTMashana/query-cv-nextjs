"use client"
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import TextareaAutosize from 'react-textarea-autosize';
import { queryGPTPreRegistration, queryGPTPostRegistration } from '@/services/chatService';
import useChatStore from '@/store/chatStore';
import { useRouter } from 'next/navigation';
import SingleSignOnLoginModal from '../login/SSO-modal';
import ArrowUpIcon from '../icons/arrow-up';

const MessageInput = () => {
  const router = useRouter()
  const [message, setMessage] = useState('');
  const addMessage = useChatStore((state) => state.addMessage);
  const promptCount = useChatStore((state) => state.promptCount);
  const resetPromptCount = useChatStore((state) => state.resetPromptCount);
  const isLoggedIn = useChatStore((state) => state.isLoggedIn);




  const handleSendMessage = async () => {
    if (message.trim()) {
      console.log(message);
      addMessage({ id: Date.now(), text: message.trim(), sender: 'user' });
      setMessage(''); 

      let response;
      console.log('is logged in: ', isLoggedIn);
      if (isLoggedIn) {
        console.log('User is logged');
        response = await queryGPTPostRegistration(message);
      } else {
        response = await queryGPTPreRegistration(message);
      }

      console.log(response);
      if (response && response.gpt_response) addMessage({ id: Date.now() + 1, text: response.gpt_response, sender: 'gpt' });
 
      if (promptCount > 2) resetPromptCount();
    }
  };
  

  return (
    <div className="message-input relative last:first-line:gap-2">
      <TextareaAutosize
        placeholder="Type your message here."
        minRows={2}
        maxRows={3}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === 'Enter') { 
            e.preventDefault();
            handleSendMessage(); 
          }
        }}
        className="flex-1 w-full pr-16 border-2 border-gray-300 rounded-md p-2 chat-area"
      />
      <div className="absolute bottom-4 right-0 mb-1 mr-5">
        {promptCount < 2 ? (
          <Button onClick={handleSendMessage} disabled={!message.trim()}>
            <ArrowUpIcon className="w-5 h-5"/>
          </Button>
        ) : (
          <SingleSignOnLoginModal />
        )}
      </div>
    </div>
  );
  
};

export default MessageInput;
