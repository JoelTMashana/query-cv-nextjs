import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full flex justify-center items-center flex-col min-h-screen">
      <h1>Demo Page</h1>
      <Button asChild>
        <Link href="/upload-workexperience">Demo</Link>
      </Button>
      <p className="mt-4">Already have an account? </p><Link href="/login">Log in</Link>
    </div>
  );
}
