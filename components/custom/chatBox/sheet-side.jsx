import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import LogoutButton from "@/components/custom/logout-button";
import Link from "next/link";
import useChatStore from "@/store/chatStore";


export function SheetSide() {
  const isLoggedIn = useChatStore((state) => state.isLoggedIn);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you're done.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
          { isLoggedIn ?
            <LogoutButton/>
            :
            <Button>
                <Link href="/register">Register</Link>
            </Button>
          }
          </div>
        </div>
        <SheetFooter>

        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
