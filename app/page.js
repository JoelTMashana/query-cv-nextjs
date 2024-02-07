import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full flex justify-center items-center flex-col min-h-screen">
      <Button asChild className="w-8/12 md:w-3/12 mt-4">
        <Link href="/upload-workexperience">Demo</Link>
      </Button>
      <Button asChild className="w-8/12 md:w-3/12 mt-4" variant="outline">
        <Link href="/register">Register</Link>
      </Button>
      <p className="mt-4">Already have an account? </p><Link href="/login">Log in</Link>
    </div>
  );
}
