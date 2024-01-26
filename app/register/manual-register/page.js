import { Button } from "@/components/ui/button"
import Link from "next/link";

export default function Page() {
  return (
      <div className="w-full flex justify-center items-center flex-col min-h-screen">
        <h1>Manual Registration Page</h1>
        <Button asChild>
          <Link href="/chat">Register</Link>
        </Button>
      </div>
  );
}
