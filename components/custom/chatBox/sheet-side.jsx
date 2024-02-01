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
import PersonIcon from "../icons/person";
import BarsIcon from "../icons/bars";
import SidebarAvatar from "../avatars/sidebar-avatar";

export function SheetSide() {
  const { isLoggedIn, user } = useChatStore();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">
          <BarsIcon className="w-6 h-6" />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
        <div className="sidebar-top-content">
          <SidebarAvatar src="/female_user.ico" fallbackText="CN" />
        </div>
          {/* <SheetTitle>{isLoggedIn && user ? `${user.firstname} ${user.lastname}` : "Manage Profile"}</SheetTitle> */}
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
            <NavItem href="/register">
              <PersonIcon className="w-6 h-6 mr-2" />
              Register
            </NavItem>
          )}         
        </ul>
        </div>
      </SheetContent>
    
    </Sheet>
  )
}
