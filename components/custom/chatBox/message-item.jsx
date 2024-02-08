"use client"
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import React, { useState, useEffect } from 'react';
import useChatStore from "@/store/chatStore";

const MessageItem = ({ message }) => {
  const [typedText, setTypedText] = useState([]);
  const paragraphs = message.text.split('PARAGRAPH:').filter(p => p.trim() !== '');
  const latestGPTMessageId = useChatStore(state => state.latestGPTMessageId);
  const isLatestGPTMessage = message.id === latestGPTMessageId;

  useEffect(() => {

    setTypedText([]);


    if (message.sender === "gpt" && isLatestGPTMessage) {
      let currentParagraphIndex = 0;
      let currentCharIndex = 0;
      const typedTextArray = [];

      const typeChar = () => {
        if (currentParagraphIndex < paragraphs.length) { 
          const paragraph = paragraphs[currentParagraphIndex]; 
          if (currentCharIndex < paragraph.length) { 
          
            if (typedTextArray[currentParagraphIndex] === undefined) 
              typedTextArray[currentParagraphIndex] = '';
            
            let nextCharacter = paragraph[currentCharIndex];

            typedTextArray[currentParagraphIndex] += nextCharacter;

            currentCharIndex++;
            setTypedText([...typedTextArray]);
          } else {
            currentCharIndex = 0;
            currentParagraphIndex++;
          }
        }
      };

      const intervalId = setInterval(typeChar, 2); 

      return () => clearInterval(intervalId);
    } else {
      setTypedText(paragraphs);
    }
  }, [message.text, message.sender, isLatestGPTMessage]); 

  const avatarClasses = message.sender === "user" 
    ? "bg-gray-200 mr-4 rounded-full w-8 h-8 flex items-center justify-center" 
    : "light-blue-gradient text-white mr-4 rounded-full w-8 h-8 flex items-center justify-center";
  const avatar = message.sender === "user" ? "U" : "G";
  const sender = message.sender === "user" ? "You" : "Career Coach";

  return (
    <Card className="mb-2  border-none shadow-none">
      <div className="flex items-center">
        <div className={`${avatarClasses}`}>
          {avatar}
        </div>
        <p className="font-medium">{sender}</p>
      </div>
      <CardContent className="p-0">
        {typedText.map((paragraph, index) => (
          <p key={index} className="mt-4 mb-4">{paragraph}</p>
        ))}
      </CardContent>
    </Card>
  );
};

export default MessageItem;