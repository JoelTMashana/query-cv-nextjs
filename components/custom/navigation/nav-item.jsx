'use client'
import Link from "next/link";
import { logoutUser } from '@/services/authenticationService';
import { usePathname } from 'next/navigation'
import LogoutIcon from "../icons/logout-icon";


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
            <Link href={href} passHref>
                <div className={`
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
                    flex items-center // Make the container a flexbox to align items horizontally
                `} onClick={handleClick}>
                    <span className="mr-2">
                    <LogoutIcon className="w-6 h-6 mr-2" />

                    </span> 
                    {children}
                </div>
            </Link>
        </li>
    );

};
export default NavItem;
