import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {

    const token = request.cookies.get("token")?.value;

    const pathname = request.nextUrl.pathname;

    if (!token) {

        if (
            pathname === "/" ||
            pathname === "/auth"
        ) {
            return NextResponse.next();
        }

        return NextResponse.redirect(
            new URL("/auth", request.url)
        );
    }

    if (
        token &&
        (
            pathname === "/auth"
        )
    ) {

        return NextResponse.redirect(
            new URL("/dashboard", request.url)
        );

    }

    return NextResponse.next();

}

export const config = {
    matcher: [
        "/dashboard/:path*",
        "/forge/:path*",
        "/history/:path*",
        "/settings/:path*",
        "/profile/:path*",
        "/auth",
        "/comparison/:path*",
        "/analytics/:path*",
    ],
};