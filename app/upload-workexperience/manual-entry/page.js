"use client"
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
      <div className="w-full flex justify-center items-center flex-col min-h-screen mt-3 mb-16 md:mt-6 lg:mt-0 lg:mb-0">
        <Card className="w-11/12 md:w-1/2 lg:w-2/5">
          <CardHeader>
            <CardTitle>Add Work Experience Form</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <WorkExperienceForm/>
          </CardContent>
        </Card>
      </div>
  );
}
