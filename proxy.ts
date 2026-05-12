import { NextRequest, NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  const { nextUrl } = request;

  if (nextUrl.pathname === "/blog") {
    const category = nextUrl.searchParams.get("category");
    const tag = nextUrl.searchParams.get("tag");
    const page = nextUrl.searchParams.get("page");

    if (category) {
      const url = nextUrl.clone();
      url.pathname = page && page !== "1" ? `/blog/category/${category}/page/${page}` : `/blog/category/${category}`;
      url.search = "";
      return NextResponse.redirect(url, 301);
    }

    if (tag) {
      const url = nextUrl.clone();
      url.pathname = page && page !== "1" ? `/blog/tag/${tag}/page/${page}` : `/blog/tag/${tag}`;
      url.search = "";
      return NextResponse.redirect(url, 301);
    }

    if (page && page !== "1") {
      const url = nextUrl.clone();
      url.pathname = `/blog/page/${page}`;
      url.search = "";
      return NextResponse.redirect(url, 301);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/blog",
};
