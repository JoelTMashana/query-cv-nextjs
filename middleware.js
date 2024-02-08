import { NextResponse } from 'next/server';

const checkToken = (token) => !!token;  

export async function middleware(request) {
    const token = request.cookies.get('access_token');

    if (token) {
        console.log('Token Found: ', token);
    } else {
        console.log('Issue getting token from cookies');
    }

    const tokenExists = checkToken(token);

    if (!tokenExists && (request.nextUrl.pathname.startsWith('/chat') ||
         request.nextUrl.pathname === '/upload-workexperience/manual-entry')) {
            return NextResponse.redirect(new URL('/login', request.url));
            console.log('User should not be allowed to enter');
    }



    return NextResponse.next();
}
