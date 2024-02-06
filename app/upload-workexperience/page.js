"use client"
import { useDropzone } from 'react-dropzone';
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import Link from "next/link";
import { useState } from 'react';

export default function Page() {
  const [showComingSoon, setShowComingSoon] = useState(false);
  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles) => {
      console.log(acceptedFiles);
    },
    noClick: true, 
    noKeyboard: true, 
  });

  const handleDropzoneClick = () => setShowComingSoon(true);

  return (
    <div className="w-full flex justify-center items-center flex-col min-h-screen">
      <div className="flex justify-center items-center flex-col">
      <Card className="w-60 h-60 flex justify-center items-center flex-col cursor-pointer  outline-dashed mt-4" onClick={handleDropzoneClick}>
        <CardContent>
          <div {...getRootProps()} className="dropzone">
              <input {...getInputProps()} />
              {showComingSoon ? <p>Coming Soon!</p> : <p>Drag 'n' drop your Resume here, or click to select files.</p>}
          </div>
        </CardContent>
      </Card>

      <Button asChild className="w-60 mt-4">
        <Link href="/upload-workexperience/manual-entry/pre-registration">Manual Entry</Link>
      </Button>
      <p className=" mt-4">Or enter manually instead</p>
      </div>
    </div>
  );
}
