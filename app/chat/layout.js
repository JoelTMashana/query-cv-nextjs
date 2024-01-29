import Link from "next/link";
import LogoutButton from "@/components/custom/logout-button";
import { Button } from "@/components/ui/button";

const Layout = ({ children }) => {
  return (
    <div className="chat-container">
        <Button asChild>
          <Link href="/register">Register</Link>
        </Button>
      <LogoutButton/>
      {children} 
    </div>
  );
};

export default Layout;