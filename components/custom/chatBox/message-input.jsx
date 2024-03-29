"use client"
import { useState  } from 'react';
import { Button } from "@/components/ui/button";
import TextareaAutosize from 'react-textarea-autosize';
import { queryGPTPreRegistration, queryGPTPostRegistration } from '@/services/chatService';
import useChatStore from '@/store/chatStore';
import SingleSignOnLoginModal from '../login/SSO-modal';
import PaperPlaneIcon from '../icons/arrow-up';

const MessageInput = () => {
  const [message, setMessage] = useState('');
  const {
    addMessage,
    promptCount,
    resetPromptCount,
    isLoggedIn,
    startGPTProcessing,
    stopGPTProcessing,
    isGPTProcessing,
  } = useChatStore(state => ({
    addMessage: state.addMessage,
    promptCount: state.promptCount,
    resetPromptCount: state.resetPromptCount,
    isLoggedIn: state.isLoggedIn,
    startGPTProcessing: state.startGPTProcessing,
    stopGPTProcessing: state.stopGPTProcessing,
    isGPTProcessing: state.isGPTProcessing,
  }));

  const handleSendMessage = async () => {
    if (message.trim()) {
      console.log(message);
      addMessage({ id: Date.now(), text: message.trim(), sender: 'user' });
      setMessage('');
      startGPTProcessing();  
  
      try {
        let response;
        console.log('is logged in: ', isLoggedIn);
        if (isLoggedIn) {
          console.log('User is logged in');
          response = await queryGPTPostRegistration(message);
        } else {
          response = await queryGPTPreRegistration(message);
        }
  
        console.log(response);
        if (response && response.gpt_response) {
          addMessage({ id: Date.now() + 1, text: response.gpt_response, sender: 'gpt' });
        }
      } catch (error) {
        console.error('Error sending message:', error);
      } finally {
        stopGPTProcessing();
      }
      if (promptCount === 2) resetPromptCount();
    }
  }
  

  return (
<div className="relative w-full flex items-center">
  <TextareaAutosize
    placeholder="Type your message here."
    minRows={1}
    maxRows={3}
    value={message}
    onChange={(e) => setMessage(e.target.value)}
    onKeyPress={(e) => {
      if (e.key === 'Enter' && !e.shiftKey && !isGPTProcessing) { 
        e.preventDefault();
        handleSendMessage();
      }
    }}
    className="w-full border-2 border-gray-300 rounded-2xl p-2 pr-10" 
  />
  <div className="absolute inset-y-0 right-3 flex items-center"> 
    {promptCount < 2 ? (
      <Button
        onClick={handleSendMessage}
        disabled={!message.trim() || isGPTProcessing} 
        className="p-2 bg-transparent hover:bg-transparent"
      >
        <PaperPlaneIcon className="w-5 h-5 text-black"/>
      </Button>
    ) : (
      <SingleSignOnLoginModal />
    )}
  </div>
</div>
  );
  
};

export default MessageInput;
