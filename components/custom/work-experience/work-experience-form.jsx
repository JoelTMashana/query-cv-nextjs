"use client"
import { Button } from "@/components/ui/button"
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
import dynamic from 'next/dynamic';
import { handleWorkExperienceSubmission, handleEditWorkExperience } from "@/services/workExperienceService";
import { Controller, useFormContext } from "react-hook-form";
import { getExperience } from "@/services/workExperienceService"
import { useEffect } from "react"
import { useRouter } from "next/navigation"
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
    skills: z.array(z.any()), 
    tools: z.array(z.any())  
});


export default  function WorkExperienceForm({formId}) {
  const router = useRouter();
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
  useEffect(() => {
    const fetchData = async () => {
      if (formId) {
        const data = await getExperience(formId);

        const formattedSkills = data.skills.map(skill => skill.skill_id);
        const formattedTools = data.tools.map(tool => tool.tool_id);

        console.log('Formated: ', formattedSkills)

        reset({
          ...data,
          skills: formattedSkills,
          tools: formattedTools
        });
      }
    };

    fetchData();
  }, [formId, reset]);

  
  function onSubmit(values) {
    console.log('Form values on submit: ', values);

    if (formId) {
      handleEditWorkExperience(values).then(() => {
        alert('Edit experience succeess!');
        router.push('/manage-work-experience')
      }).catch((error) => {
        console.error('Edit or reset failed:', error);
      });
    } else {
      handleWorkExperienceSubmission(values).then(() => {
        reset({
          position: values.position,
          company: values.company,
          industry: values.industry, 
          duration: values.duration, 
          outcomes: "",
        });
        alert('Add experience succeess!');
      }).catch((error) => {
        console.error('Submission or reset failed:', error);
      });
    }
    
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
          <Controller
            name="skills"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Skills</FormLabel>
                <FormControl>
                  <MultiSelectNoSSR {...field} items="skills" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />


          <Controller
            name="tools"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tools</FormLabel>
                <FormControl>
                  <MultiSelectNoSSR {...field} items="tools" />
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