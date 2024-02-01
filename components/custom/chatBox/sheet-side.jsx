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
import LoginIcon from "../icons/login-icon";

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
        { isLoggedIn &&
          <SheetHeader>
          <div className="sidebar-top-content">
            <SidebarAvatar src="/female_user.ico" fallbackText="User Image" />
          </div>
          </SheetHeader>
        }
        <div className="flex-1"> 
        <ul className="flex flex-col gap-4 py-4">
          {isLoggedIn ? (
            <>
              <NavItem href="/upload-workexperience/manual-entry">
              <PenicilSquareIcon className="w-5 h-5 mr-2" />
                Add Work Experience
              </NavItem>
              <NavItem href="/chat">
              <ChatBubbleIcon className="w-5 h-5 mr-2" />
                Chat
              </NavItem>
              <NavItem href="/login">
                <LogoutIcon className="w-5 h-5 mr-2" />
                Logout
              </NavItem>
            </>
          ) : (
            <>
            <NavItem href="/register">
              <PersonIcon className="w-5 h-5 mr-2" />
              Register
            </NavItem>
            <NavItem href="/login">
              <LoginIcon className="w-5 h-5 mr-2" />
              Login
            </NavItem>
            </>
          )}         
        </ul>
        </div>
      </SheetContent>
    
    </Sheet>
  )
}
