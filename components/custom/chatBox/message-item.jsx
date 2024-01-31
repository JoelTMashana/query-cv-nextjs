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
  // Split the message text into paragraphs using 'PARAGRAPH:' as the delimiter
  const paragraphs = message.text.split('PARAGRAPH:').filter(p => p.trim() !== '');

  return (
    <Card className="mb-2">
      <CardHeader>
        <CardTitle>{message.senderName}</CardTitle>
      </CardHeader>
      <CardContent>
        {paragraphs.map((paragraph, index) => (
          // Render each paragraph in a separate p tag
          <p key={index} className="mt-4">{paragraph.trim()}</p>
        ))}
      </CardContent>
      <CardFooter>
        <p className="text-sm">{message.timestamp}</p>
      </CardFooter>
    </Card>
  );
};

export default MessageItem;
