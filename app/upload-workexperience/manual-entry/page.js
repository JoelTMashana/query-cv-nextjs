"use client"
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
import { SheetSide } from "@/components/custom/chatBox/sheet-side";

export default function Page() {
  return (
      <div className="w-full flex justify-center items-center flex-col min-h-screen">
        <div className="absolute flex flex-col  top-4 right-4">
          <SheetSide/>
        </div>
        <Card className="w-11/12 md:w-1/2 lg:w-2/5">
          <CardHeader>
            <CardTitle>Form</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <WorkExperienceForm/>
          </CardContent>
        </Card>
      </div>
  );
}
