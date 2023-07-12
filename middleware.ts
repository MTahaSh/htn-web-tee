import { authMiddleware } from "@clerk/nextjs";
import { redirectToSignIn } from '@clerk/nextjs';
// import createMiddleware from "next-intl/middleware";

// const intlMiddleware = createMiddleware({
//   locales: ["en", "el"],

//   defaultLocale: "en",
// });

export default authMiddleware({

  // beforeAuth: (req) => {
  //   return intlMiddleware(req);
  // },

  publicRoutes: ["/", "/Products", "/PlayStation", "/Xbox"],


  afterAuth(auth, req, evt) {
    // handle users who aren't authenticated
    if (!auth.userId && !auth.isPublicRoute) {
      return redirectToSignIn({ returnBackUrl: req.url });
    }
    // redirect them to organization selection page
    // if(auth.userId && !auth.orgId && req.nextUrl.pathname !== "/org-selection"){
    //   const orgSelection = new URL('/org-selection', req.url)
    //   return NextResponse.redirect(orgSelection)
    // }
  }
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};