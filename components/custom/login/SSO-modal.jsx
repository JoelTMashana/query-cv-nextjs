import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Link from "next/link";
import {
    Dialog,
    DialogContent,
    DialogTrigger,
  } from "@/components/ui/dialog"
import ArrowUpIcon from "../icons/arrow-up";

const SingleSignOnLoginModal = () => {
  return (
     <Dialog>
      <DialogTrigger asChild>
        <Button>
          <ArrowUpIcon className="w-5 h-5"/>
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
      <CardContent className="text-center">
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5 "> 
              <Button asChild>
                <Link href="/register" className="text-center">Yes</Link>
              </Button>
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
    </DialogContent>
    </Dialog>

  )
}
export default SingleSignOnLoginModal;
