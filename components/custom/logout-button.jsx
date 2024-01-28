"use client"
import { Button } from "../ui/button"; 
import { logoutUser } from '@/services/authenticationService';


const LogoutButton = () => {
    const handleLogout = async () => {
        await logoutUser();     
    };

    return (
        <Button onClick={handleLogout}>Logout</Button>
    );
};

export default LogoutButton;

