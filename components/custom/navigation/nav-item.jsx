import Link from "next/link";
import { logoutUser } from '@/services/authenticationService';

const NavItem = ({ href, children }) => {
    
    const handleClick = (e) => {
        if (href === "/login") {
          logoutUser(); 
        }
    };

    return (
        <li>
        <div onClick={handleClick}>
          <Link href={href}>
            {children} 
          </Link>
        </div>
      </li>
    );

};

export default NavItem;
