import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {

  const token = request.cookies.get("token")?.value;

  const path = request.nextUrl.pathname;

  const authPages = ["/login", "/register"];

  // Allow auth pages when there is no valid token
  if (!token) {
    if (authPages.includes(path)) {
      return NextResponse.next();
    }

    return NextResponse.redirect(new URL("/login", request.url));
  }

  // Logged-in users shouldn't revisit login/register
  if (authPages.includes(path)) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/forge/:path*",
    "/login",
    "/register",
  ],
};