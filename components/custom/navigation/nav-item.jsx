'use client'
import Link from "next/link";
import { logoutUser } from '@/services/authenticationService';
import { usePathname } from 'next/navigation'

const NavItem = ({ href, children }) => {
    const pathname = usePathname();
    const isActive = pathname === href;
    const handleClick = (e) => {
        if (href === "/login") {
          logoutUser(); 
        }
    };
    return (
        <li>
            <div onClick={handleClick}className={`
                ${isActive ? 
                    'bg-primary text-primary-foreground border-primary' 
                    : 
                    'bg-transparent hover:bg-primary/85 hover:text-primary-foreground border-transparent'}
                py-2 
                px-4 
                border 
                rounded-md 
                cursor-pointer
                whitespace-nowrap
                transition-colors
                font-medium 
            `}>
            <Link href={href}>
                {children} 
            </Link>
            </div>
        </li>
    );

};
export default NavItem;
