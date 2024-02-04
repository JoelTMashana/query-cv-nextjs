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
import { handleEditWorkExperience } from "@/services/workExperienceService";
import { useEffect } from 'react';
import { getExperience } from "@/services/workExperienceService"
import useSelectionStore from "@/store/useSelectionStore"
const MultiSelectNoSSR = dynamic(() => import('../multi-select-edit'), {
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
  // skills: z.array(z.string()), 
  // tools: z.array(z.string())
});


export default  function EditWorkExperienceForm({formId}) {

  console.log('Experience ID: ', getExperience(formId))

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      position: "test",
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
    async function fetchExperience() {
      const experienceData = await getExperience(formId);
      console.log('Experience Data: ', experienceData);
      if (experienceData) {
        const transformedSkills = experienceData.skills.map(skill => ({
          value: skill.skill_id, 
          label: skill.skill_name
        }));
        
        const transformedTools = experienceData.tools.map(tool => ({
          value: tool.tool_id, 
          label: tool.tool_name
        }));
        console.log('Skills before transformation: ', experienceData.skills)
        console.log('Transformed skills', transformedSkills);
        const { setInitialSkills, setInitialTools } = useSelectionStore.getState();
        setInitialSkills(transformedSkills);
        setInitialTools(transformedTools);
        reset({
          ...experienceData,
          skills: transformedSkills,
          tools: transformedTools,
        });
      }
    }

    fetchExperience();
  }, [formId, reset]);



  function onSubmit(values) {
    console.log(values);
    const { selectedSkills, selectedTools } = useSelectionStore.getState();
    const formData = {
      ...values,
      skills: selectedSkills.map(id => ({ skill_id: id })),
      tools: selectedTools.map(id => ({ tool_id: id }))
    };
    handleEditWorkExperience(formData).then(() => {
      console.log('Work experience submitted');
    }).catch((error) => {
      console.error('Submission or reset failed:', error);
    });
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
          <FormField
            control={form.control}
            name="skills"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Skills</FormLabel>
                <FormControl>
                <MultiSelectNoSSR items="skills"/>
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
                <MultiSelectNoSSR items="tools"/>
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