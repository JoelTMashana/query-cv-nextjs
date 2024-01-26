import { Button } from "@/components/ui/button"
import Link from "next/link";

export default function Page() {
  return (
      <div className="w-full flex justify-center items-center flex-col min-h-screen">
        <h1>Manual WE Entry Page</h1>
        <Button asChild>
          <Link href="/chat">Submit</Link>
        </Button>
      </div>
  );
}
