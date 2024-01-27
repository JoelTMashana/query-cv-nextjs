import { Button } from "@/components/ui/button"
import Link from "next/link";
import MessageInput from "@/components/custom/message-input";

export default function Page() {
  return (
      <div className="w-full flex justify-center items-center flex-col min-h-screen">
        <h1>Chat Page</h1>
        
        <Button asChild>
          <Link href="/register">Register With Google</Link>
        </Button>
        <Button asChild>
          <Link href="/">Logout</Link>
        </Button>
        <MessageInput/>
      </div>
  );
}
