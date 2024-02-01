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
import LogoutIcon from "../icons/logout-icon";
import ChatBubbleIcon from "../icons/chat-bubble";
import PenicilSquareIcon from "../icons/pencil-square";

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
              <NavItem href="/upload-workexperience/manual-entry">
              <PenicilSquareIcon className="w-6 h-6 mr-2" />
                Add Work Experience
              </NavItem>
              <NavItem href="/chat">
              <ChatBubbleIcon className="w-6 h-6 mr-2" />
                Chat
              </NavItem>
              <NavItem href="/login">
                <LogoutIcon className="w-6 h-6 mr-2" />
                Logout
              </NavItem>
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
