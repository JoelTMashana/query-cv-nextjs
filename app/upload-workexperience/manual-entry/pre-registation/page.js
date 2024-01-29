import { Button } from "@/components/ui/button"
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ArrowRightIcon } from '@heroicons/react';
import PreRegistrationWorkExperienceForm from "@/components/custom/work-experience/pre-registration-work-experience-form";

export default function Page() {
  return (
    <>
        <Button asChild>
          <Link href="/chat" className="m-2">Next</Link>
        </Button>
      <div className="w-full flex justify-center items-center flex-col min-h-screen">
        
        <Card className="w-11/12 md:w-1/2 lg:w-2/5">
          <CardHeader>
            <CardTitle>Form</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <PreRegistrationWorkExperienceForm/>
          </CardContent>
        </Card>
      </div>
      </>
  );
}
