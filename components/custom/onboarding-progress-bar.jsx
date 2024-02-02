"use client"
import { useState } from "react"
import { Progress } from "@/components/ui/progress"
import useChatStore from "@/store/chatStore"
import { usePathname } from 'next/navigation'


const OnboardingProgressBar = () => {
    const [isOnBoarding, setIsOnBoarding] = useState(false);
    const pathname = usePathname();
    const isLoggedIn = useChatStore((state) => state.isLoggedIn);

    const visiblePaths = [
        '/',
        '/upload-workexperience',
        '/upload-workexperience/manual-entry/pre-registration',
        '/chat',
        '/register'
    ];


    let progressValue = 0;
    if (pathname === '/') {
        progressValue = 0;
    } else if (pathname === '/upload-workexperience' || pathname === '/upload-workexperience/manual-entry/pre-registration') {
        progressValue = 33;
    } else if (pathname === '/chat') {
        progressValue = 66;
    } else if (pathname === '/register') {
        progressValue = 100;
    }

    return (
    <>
        { visiblePaths.includes(pathname) && !isLoggedIn ? 
            <div className="relative w-full">
                <div className="absolute w-full flex justify-center items-center mt-4">
                    <div className="w-8/12 md:w-3/6 lg:w-3/12">
                    <Progress value={progressValue} />
                    </div>
                </div>
            </div>
            :
            null
        }  
    </>
        
    );
}

export default OnboardingProgressBar;