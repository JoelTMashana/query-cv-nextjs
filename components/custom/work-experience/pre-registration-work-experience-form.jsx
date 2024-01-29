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
import { DatePickerWithRange } from "../data-range-picker";
import { Textarea } from "../../ui/textarea";


const formSchema = z.object({
  position: z.string()
    .min(2, "Position must be at least 2 characters."),
  company: z.string()
    .min(2, "Company must be at least 2 characters."),
  duration: z.string()
    .min(1, "Duration required."),
  description: z.string()
    .min(20, "Description must be at least 20 characters.")
});


export default  function PreRegistrationWorkExperienceForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      position: "",
      company: "",
      duration: ""
    },
  })

  function onSubmit(values) {
    console.log(values)
  }

  return (
      <Form {...form}>
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
            name="duration"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Duration</FormLabel>
                <FormControl>
                  <DatePickerWithRange/>
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
                    placeholder="Write about an achievement your proud of in this role."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
  );

}