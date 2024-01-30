import { Button } from "@/components/ui/button"
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
  const { isLoggedIn, user } = useChatStore(); // Destructto get isLoggedIn and user

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          {/* Conditionally render the title based on user's name or fallback to a default title */}
          <SheetTitle>{isLoggedIn && user ? `${user.firstname} ${user.lastname}` : "Manage Profile"}</SheetTitle>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            { isLoggedIn ?
              <>
                <Button asChild>
                  <Link href="/upload-workexperience/manual-entry">Add</Link>
                </Button>
                <LogoutButton/>
              </>
              :
              <Button asChild>
                  <Link href="/register">Register</Link>
              </Button>
            }
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
