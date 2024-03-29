import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import PreRegistrationWorkExperienceForm from "@/components/custom/work-experience/pre-registration-work-experience-form";

export default function Page() {
  return (
    <>
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
