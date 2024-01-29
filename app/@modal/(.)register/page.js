import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
  import SingleSignOn from '@/components/custom/registration/sso';
  import { useRouter } from "next/navigation";



const PromptRegister = () => {
  
  const router = useRouter();

  return (
    <Dialog open={true} onOpenChange={() => router.back()}>
      <DialogContent className="lg:w-[700px] bg-transparent border-0 text-transparent ">
      <SingleSignOn/>
      </DialogContent>
    </Dialog>
  );
}

export default PromptRegister;