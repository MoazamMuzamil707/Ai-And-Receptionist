import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function middleware(req) {
  const cookieStore = cookies();
  const token = cookieStore.get("token")?.value;
  const { pathname } = req.nextUrl;

  if (pathname === '/') {
    return token
      ? NextResponse.redirect(new URL("/Dashboard", req.url))
      : NextResponse.redirect(new URL("/", req.url));
  }

  // Allow static files to be served
  if (pathname.startsWith('/_next/') || pathname.startsWith('/assets/')) {
    return NextResponse.next();
  }

  // Define public and protected routes
  const publicRoutes = ["/","/login", "/Login","/SignUp", "/ForgotPassword"];
  const protectedRoutes = ["/Dashboard", "/Dashboard/*","/ChangePassword"];

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
      return NextResponse.redirect(new URL("/", req.url));
    }

    if (publicRoutes.includes(pathname)) {
      return NextResponse.next();
    }
  }

  return NextResponse.next();
}
