
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
  return (
    <Card className="mb-2">
      <CardHeader>
        <CardTitle>{message.senderName}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{message.text}</p>
      </CardContent>
      <CardFooter>
        <p className="text-sm">{message.timestamp}</p>
      </CardFooter>
    </Card>
  );
};

export default MessageItem;
