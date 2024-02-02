"use client"
import { Progress } from "@/components/ui/progress"
import useChatStore from "@/store/chatStore"
import { usePathname } from 'next/navigation'


const OnboardingProgressBar = () => {
    const pathname = usePathname();
    const isLoggedIn = useChatStore((state) => state.isLoggedIn);

    let progressValue;
    console.log('Pathname: ', pathname);

    if (pathname === '/') {
        progressValue = 0;
    } else if (pathname === '/upload-workexperience') {
        progressValue = 33;
    } else if (pathname === '/upload-workexperience/manual-entry/pre-registration'){
        progressValue = 33;
        console.log('pp', progressValue);
    } else if (pathname === '/chat') {
        progressValue = isLoggedIn ? 100 : 66;
    }

    return (
    <>
        { isLoggedIn === false &&
            <div className="relative w-full">
                <div className="absolute w-full flex justify-center items-center mt-4">
                    <div className="w-11/12 md:w-5/6 lg:w-3/12">
                    <Progress value={progressValue} />
                    </div>
                </div>
            </div>
        }  
    </>
        
    );
}

export default OnboardingProgressBar;