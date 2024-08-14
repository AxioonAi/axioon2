import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { loginVerifyAPI, token as Token } from "./lib/axios";
export const config = {
  matcher: [
    "/",
    "/ads",
    "/ai",
    "/comparator",
    "/legal",
    "/mentions",
    "/parameters",
    "/previous-elections",
  ],
};

export async function middleware(req: NextRequest) {
  if (
    req.nextUrl.pathname.indexOf("icon") > -1 ||
    req.nextUrl.pathname.indexOf("chrome") > -1
  )
    return NextResponse.next();

  const token = cookies().get(Token);
  if (!token) return NextResponse.redirect(new URL("/login", req.url));
  const connect = await loginVerifyAPI({
    token: token.value,
  });

  if (connect.status !== 200)
    return NextResponse.redirect(new URL("/login", req.url));

  return NextResponse.next();
}
