import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function middleware(req) {
  const cookieStore = cookies();
  const token = cookieStore.get("token")?.value;
  const { pathname } = req.nextUrl;

  // Allow static files to be served
  if (pathname.startsWith('/_next/') || pathname.startsWith('/assets/')) {
    return NextResponse.next();
  }

  // Define public and protected routes
  const publicRoutes = ["/login", "/Login","/ForgotPassword"]; 
  const protectedRoutes = ["/Dashboard", "/Dashboard/*"];

  // Check if the current route is protected
  const isProtectedRoute = protectedRoutes.some(route => pathname.startsWith(route));
  
  // Redirect logic based on token presence
  if (token) {
    if (publicRoutes.includes(pathname)) {
      return NextResponse.redirect(new URL("/Dashboard", req.url)); 
    }

    if (isProtectedRoute) {
      return NextResponse.next(); 
    }

  } else {
    if (isProtectedRoute) {
      return NextResponse.redirect(new URL("/Login", req.url)); 
    }

    if (publicRoutes.includes(pathname)) {
      return NextResponse.next(); 
    }
  }

  return NextResponse.next();
}
