import { Button } from "@/components/ui/button"
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import WorkExperienceForm from "@/components/custom/work-experience/work-experience-form";

export default function Page() {
  return (
      <div className="w-full flex justify-center items-center flex-col min-h-screen">
        <Card className="w-11/12 md:w-1/2 lg:w-2/5">
          <CardHeader>
            <CardTitle>Form</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <WorkExperienceForm/>
          </CardContent>
        </Card>
        <Button asChild>
          <Link href="/chat" className="m-2">Chat</Link>
        </Button>
      </div>
  );
}
