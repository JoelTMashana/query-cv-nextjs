import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Link from "next/link";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"

const SingleSignOnLoginModal = () => {
  return (
     <Dialog>
      <DialogTrigger asChild>
        <Button>
            Send
        </Button>
      </DialogTrigger>
      <DialogContent className="lg:w-[700px] bg-transparent border-0 text-transparent "> 
    <Card className="w-[350px] mx-auto">
      <CardHeader className="text-center">
        <CardTitle>Login</CardTitle>
        <CardDescription className="text-center">Your Description Here</CardDescription>
      </CardHeader>
      <CardContent className="text-center">
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5 "> 
              <Button asChild>
                <Link href="/chat" className="text-center">Sign in with Google</Link>
              </Button>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-center items-center"> 
        <Link href="/login/manual-login" className="text-center">Login Manually</Link>
      </CardFooter>
    </Card>
    </DialogContent>
    </Dialog>

  )
}
export default SingleSignOnLoginModal;
