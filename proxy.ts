import { NextRequest, NextResponse } from "next/server";

const CANONICAL_HOST = "springbankmardan.com";

export function proxy(request: NextRequest) {
  const { nextUrl } = request;
  const host = request.headers.get("host") ?? "";
  const forwardedProto = request.headers.get("x-forwarded-proto");
  const isLocalHost =
    host.startsWith("localhost") ||
    host.startsWith("127.0.0.1") ||
    host.startsWith("[::1]");

  if (!isLocalHost && (host !== CANONICAL_HOST || forwardedProto === "http")) {
    const url = nextUrl.clone();
    url.protocol = "https:";
    url.host = CANONICAL_HOST;
    return NextResponse.redirect(url, 301);
  }

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
  matcher: "/:path*",
};
