"use client"
import { useState } from 'react';
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import Link from "next/link";
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
import { registerUser } from "@/services/registrationsService";
import { useRouter } from 'next/navigation';



const formSchema = z.object({
    firstname: z.string()
      .min(2, "First name must be at least 2 characters."),
    lastname: z.string()
      .min(2, "Last name must be at least 2 characters."),
    email: z.string()
      .email("Invalid email address format."), 
    password: z.string()
      .min(8, "Password must be at least 8 characters.")
  });
  


const RegistrationForm = () => {
  const router = useRouter();
  const [emailError, setEmailError] = useState(""); 

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            firstname: "",
            lastname: "",
            email: "",
            password: "",
        },
      })
    
  const onSubmit = async (data) => {
    try {
      const response = await registerUser(data);

      if (!response) {
        router.push('/register');
        return null;
      }

      const authToken = response.access_token;
      
      localStorage.setItem('authToken', authToken);
      console.log('Registration successful', response);

      
      router.push('/chat');

    } catch (error) {
      console.error('Registration failed', error);
      if (error.response && error.response.data.detail === "Email already exists.") {
        setEmailError("This email is already registered.");
      } else {
          console.log('Other error occurred');
      }
    }
  };
    

  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Register</CardTitle>
        <CardDescription>Description</CardDescription>
      </CardHeader>
      <CardContent><Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="firstname"
            render={({ field }) => (
              <FormItem>
                <FormLabel>First name</FormLabel>
                <FormControl>
                  <Input placeholder="Your first name" {...field} 
                    {...form.register("firstname")}                  
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastname"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Last name</FormLabel>
                <FormControl>
                  <Input placeholder="Your last name" {...field} 
                   {...form.register("lastname")}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email address</FormLabel>
                <FormControl>
                  <Input placeholder="example@example.com" {...field} 
                    {...form.register("email")}
                  />
                  {/* Display email error if it exists */}
                  
                </FormControl>
                { emailError && 
                      <p>{emailError}</p>
                }
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input placeholder="Enter password" {...field} 
                     {...form.register("password")}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div  className="w-full flex justify-center items-center">
            <Button type="submit" >Submit</Button>
          </div>     
        </form>
      </Form>
      </CardContent>
    </Card>
  )
}

export default RegistrationForm;
