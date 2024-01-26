import { Button } from "@/components/ui/button"
import Link from "next/link";

export default function Home() {
  return (
      <div className="w-full flex justify-center items-center flex-col min-h-screen">
        <Button asChild>
          <Link href="/uploadCV">Demo</Link>
        </Button>
      </div>
  );
}
