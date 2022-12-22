import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith("/api")) {
    if (request.nextUrl.searchParams.get("secret") !== process.env.API_SECRET) {
      return NextResponse.redirect(new URL("/403", request.url));
    }
  }
}
