"use client"
import { useDropzone } from 'react-dropzone';
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export default function Page() {
  // Set up the drop zone
  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles) => {
      // Handle file upload here
      console.log(acceptedFiles);
    },
  });

  return (
    <div className="w-full flex justify-center items-center flex-col min-h-screen">
      <div className="flex justify-center items-center flex-col">
      <Card className="w-60 h-60 flex justify-center items-center flex-col cursor-pointer  outline-dashed mt-4">
        <CardContent>
          {/* Dropzone */}
          <div {...getRootProps()} className="dropzone">
            <input {...getInputProps()} />
            <p>Drag 'n' drop some files here, or click to select files</p>
          </div>
        </CardContent>
      </Card>

      <Button asChild className="w-60 mt-4">
        <Link href="/upload-workexperience/manual-entry/pre-registation">Manual Entry</Link>
      </Button>
      <p className=" mt-4">Or enter manually instead</p>
      </div>
    </div>
  );
}
