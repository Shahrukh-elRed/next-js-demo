import { NextResponse } from "next/server"

export const middleware = (request) => {
    // if (request.nextUrl.pathname !== "/about") {
        return NextResponse.redirect(new URL("/login", request.url));
    // }
}

export const config = {
    matcher: ["/about/:path*", "/studentlist/:path*"]
}
