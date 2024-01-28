import { NextResponse } from 'next/server';

const checkToken = (token) => !!token;  

export async function middleware(request) {
    const token = request.cookies.get('access_token');

    const tokenExists = checkToken(token);

    if (!tokenExists && request.nextUrl.pathname.startsWith('/chat')) {
        return NextResponse.redirect(new URL('/login', request.url));
    }

    return NextResponse.next();
}