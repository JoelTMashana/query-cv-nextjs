"use client"
import { Button } from "@/components/ui/button"
import Link from "next/link";
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import {
  Form, 
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import  SelectScrollable  from "../select-scrollable";
import { DatePickerWithRange } from "../data-range-picker";
import { Textarea } from "../../ui/textarea";
import dynamic from 'next/dynamic';
import { handleWorkExperienceSubmission } from "@/services/workExperienceService";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"
import PenicilSquareIcon from "../icons/pencil-square";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const MultiSelectNoSSR = dynamic(() => import('../multi-select'), {
  ssr: false, // Disable SSR
});


const formSchema = z.object({
  position: z.string()
    .min(2, "Position must be at least 2 characters."),
  company: z.string()
    .min(2, "Company must be at least 2 characters."),
  industry: z.string()
    .min(1, "Industry required."),
  duration: z.string(),
  description: z.string()
    .min(20, "Description must be at least 20 characters."),
  outcomes: z.string()
    .min(20, "Outcomes must be at least 20 characters."),
  skills: z.array(z.string()), 
  tools: z.array(z.string())
});


const WorkExperienceFormModal = ({text}) => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      position: "",
      company: "",
      industry: "",
      duration: "",
      description: "",
      outcomes: "",
      skills: [],
      tools: []
    },
  })

  const { reset } = form;

  function onSubmit(values) {
    console.log(values);
    handleWorkExperienceSubmission(values).then(() => {
      reset({
        position: values.position,
        company: values.company,
        industry: values.industry, 
        duration: values.duration, 
        outcomes: "",
      });
    }).catch((error) => {
      console.error('Submission or reset failed:', error);
    });
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
          <Button variant="solid" className="bg-[#678fe6] p-2" size="md">
                <PenicilSquareIcon className="w-5 h-5 text-white" />
          </Button>
      </DialogTrigger>
      <DialogContent className="lg:w-[700px] bg-transparent border-0 text-transparent "> 
      <Card className="w-[350px] mx-auto">
      <CardHeader className="text-center">
        <CardTitle>Register</CardTitle>
        <CardDescription className="text-center">
          Please register for the full experience.
        </CardDescription>
      </CardHeader>
      <CardContent className="">
        <Form {...form} >
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="position"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Position</FormLabel>
                  <FormControl>
                    <Input placeholder="Software Developer" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="company"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Company</FormLabel>
                  <FormControl>
                    <Input placeholder="TechCorp" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="industry"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Industry</FormLabel>
                  <FormControl>
                    <Input placeholder="TechCorp" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* <FormField
              control={form.control}
              name="industry"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Industry</FormLabel>
                  <FormControl>
                    <SelectScrollable {...field}/>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            /> */}
            <FormField
              control={form.control}
              name="duration"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Duration</FormLabel>
                  <FormControl>
                    <DatePickerWithRange  {...field}/>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea  
                      placeholder="Write about your workexperience"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="outcomes"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Outcomes</FormLabel>
                  <FormControl>
                    <Textarea  
                      placeholder="Write about the outcomes"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="skills"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Skills</FormLabel>
                  <FormControl>
                    <MultiSelectNoSSR {...field} items="skills"/>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="tools"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tools</FormLabel>
                  <FormControl>
                    <MultiSelectNoSSR {...field} items="tools"/>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </CardContent>
    </Card>
      </DialogContent>
    </Dialog>
  );
}

export default WorkExperienceFormModal;