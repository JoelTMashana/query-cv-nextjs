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
import { Textarea } from "../../ui/textarea";
import { useEffect, useState } from "react";
import { getTemporaryAccessTokenForUnregisteredUser } from "@/services/authenticationService";
import { useRouter } from "next/navigation";


const formSchema = z.object({
  position: z.string()
    .min(2, "Position must be at least 2 characters."),
  company: z.string()
    .min(2, "Company must be at least 2 characters."),
  description: z.string()
    .min(20, "Description must be at least 20 characters.")
});


const PreRegistrationWorkExperienceForm = () => {
  const router = useRouter();
  const [experienceCount, setExperienceCount] = useState(0);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      position: "",
      company: "",
      description: ""
    },
  })

  useEffect(() => {
    const currentExperiences = JSON.parse(sessionStorage.getItem('workExperiences')) || [];
    setExperienceCount(currentExperiences.length);
  })

  const onSubmit = (values) => {
    const currentExperiences = JSON.parse(sessionStorage.getItem('workExperiences')) || [];
    
    const newExperiences = [...currentExperiences, values];
    
    sessionStorage.setItem('workExperiences', JSON.stringify(newExperiences));
    setExperienceCount(newExperiences.length);
    
    console.log('New experience added. Updated experiences:', newExperiences);
    form.reset({
        ...values,
        description: ""
    });
  };

  const hadleTokenGenerationClick = async () => {
    console.log("Button clicked!");
    const response = await  getTemporaryAccessTokenForUnregisteredUser();
    if (response) {
      console.log('Response: ', response);
      router.push('/chat/pre-registration');
    }
  };

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
          <Button type="submit"
            disabled={experienceCount > 5}
          >Add Achievement</Button>
          
          <Button 
            type="button" 
            disabled={experienceCount < 3}
            onClick={hadleTokenGenerationClick}
            className="ml-5"
          >
            Chat
          </Button >
          
          {experienceCount < 3 && (
            <p>{`You need to add ${ 3 - experienceCount} more to proceed.`}</p>
          )}
        </form>
      </Form>
  );

}

export default PreRegistrationWorkExperienceForm;