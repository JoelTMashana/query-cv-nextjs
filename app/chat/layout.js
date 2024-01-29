import Link from "next/link";
import LogoutButton from "@/components/custom/logout-button";

const Layout = ({ children }) => {
  return (
    <div className="chat-container">
      <LogoutButton/>
      {children} 
    </div>
  );
};

export default Layout;