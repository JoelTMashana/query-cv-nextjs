"use client"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

const MessageItem = ({ message }) => {
  const paragraphs = message.text.split('PARAGRAPH:').filter(p => p.trim() !== '');
  if(message.sender === "user") {
    console.log("User sent this message: ", message);
  } 

  if(message.sender === "gpt") {
    console.log("Gpt sent this message: ", message);
  }
  const avatarClasses = message.sender === "user" 
  ? "bg-gray-200 mr-4 rounded-full w-8 h-8 flex items-center justify-center" 
  : "bg-[#678fe6] text-white mr-4 rounded-full w-8 h-8 flex items-center justify-center";
  const avatar = message.sender === "user" ? "U" : "G";
  const sender = message.sender === "user" ? "You" : "Career Coach";
  return (
    <Card className="mb-2 border-none shadow-none">
      <div className="flex items-center">
        <div className={`${avatarClasses}`}>
          {avatar}
        </div>
          <p>{sender}</p>
      </div>
        <CardTitle>{message.senderName}</CardTitle>
      <CardContent >
        {paragraphs.map((paragraph, index) => (
          <p key={index} className="mt-4">{paragraph.trim()}</p>
        ))}
      </CardContent>
    </Card>
  );
};

export default MessageItem;
