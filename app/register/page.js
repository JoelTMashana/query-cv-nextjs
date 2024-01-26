import { Button } from "@/components/ui/button"
import Link from "next/link";

export default function Page() {
  return (
      <div className="w-full flex justify-center items-center flex-col min-h-screen">
        <Button asChild>
          <Link href="/chat">Register With Google</Link>
        </Button>
        <Button asChild>
          <Link href="/register/manual-register">Register Manually</Link>
        </Button>
      </div>
  );
}
