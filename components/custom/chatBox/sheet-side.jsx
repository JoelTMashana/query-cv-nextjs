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
import useChatStore from "@/store/chatStore";
import NavItem from "../navigation/nav-item";

export function SheetSide() {
  const { isLoggedIn, user } = useChatStore();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>{isLoggedIn && user ? `${user.firstname} ${user.lastname}` : "Manage Profile"}</SheetTitle>
        </SheetHeader>
        <div className="flex-1"> 
        <ul className="flex flex-col gap-4 py-4">
          {isLoggedIn ? (
            <>
              <NavItem href="/upload-workexperience/manual-entry">Add Work Experience</NavItem>
              <NavItem href="/chat">Chat</NavItem>
              <NavItem href="/login">Logout</NavItem>
            </>
          ) : (
            <NavItem href="/register">Register</NavItem>
          )}         
        </ul>
        </div>
      </SheetContent>
    
    </Sheet>
  )
}
