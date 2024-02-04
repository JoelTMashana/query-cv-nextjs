import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import EditWorkExperienceForm from "@/components/custom/work-experience/edit-work-experience-form";


  export default function Page({ params }) {


    return (
      <>
        <div className="w-full flex justify-center items-center flex-col min-h-screen">
          <div>Form ID: {params.id}</div>
          <Card className="w-11/12 md:w-1/2 lg:w-2/5">
            <CardHeader>
              <CardTitle>Form</CardTitle>
              <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>
                <EditWorkExperienceForm/>
            </CardContent>
          </Card>
        </div>
        </>
    );
  }
  