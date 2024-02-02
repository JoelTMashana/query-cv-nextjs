import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogTrigger,
  } from "@/components/ui/dialog"
import ArrowUpIcon from "../icons/arrow-up";
import RegistrationForm from "../registration/registration-form";
const SingleSignOnLoginModal = () => {
  return (
     <Dialog>
      <DialogTrigger asChild>
        <Button>
          <ArrowUpIcon className="w-5 h-5"/>
        </Button>
      </DialogTrigger>
      <DialogContent className="lg:w-[700px] bg-transparent border-0 text-transparent "> 
        <RegistrationForm/>
    </DialogContent>
    </Dialog>

  )
}
export default SingleSignOnLoginModal;
