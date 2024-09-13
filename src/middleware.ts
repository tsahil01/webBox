"use server";

import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export default async function middleware(request: NextRequest) {
    console.log("Middleware")

    const token = await getToken({ // {name: , email: , picture: , sub: , accessToken: , isAdmin: , iat: , exp: , jti: }
        req: request
    })
    // console.log(token) 

    if (request.nextUrl.pathname.startsWith('/api/admin')) {
        if (!token?.isAdmin) {
            return NextResponse.json({
                status: 403,
                message: "You are not authorized to access this route"
            })
        }


    }

    return NextResponse.next();
}