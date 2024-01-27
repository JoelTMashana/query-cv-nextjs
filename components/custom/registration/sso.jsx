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

const SingleSignOn = () => {
  return (
    <Card className="w-[350px] mx-auto">
      <CardHeader className="text-center">
        <CardTitle>Register</CardTitle>
        <CardDescription className="text-center">Your Description Here</CardDescription>
      </CardHeader>
      <CardContent className="text-center">
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5 "> 
              <Button asChild>
                <Link href="/chat" className="text-center">Register With Google</Link>
              </Button>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-center items-center"> 
        <Link href="/register/manual-register" className="text-center">Register Manually</Link>
      </CardFooter>
    </Card>
  )
}
export default SingleSignOn;
