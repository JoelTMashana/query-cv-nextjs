"use client"
import { Button } from "@/components/ui/button"
import Link from "next/link";
import RegistrationForm from "@/components/custom/registration/registration-form";


export default function Page() {

  return (
      <div className="w-full flex justify-center items-center flex-col min-h-screen">
        <RegistrationForm/>
        <Button asChild>
          <Link href="/chat">Next</Link>
        </Button>
      </div>
  );
}
