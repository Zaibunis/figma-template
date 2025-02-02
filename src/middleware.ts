
import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

// Update the matcher to cover the /comp routes that require authentication
const isProtectedRoute = createRouteMatcher([
  '/comp/mens-clothes(.*)',
  '/comp/casual(.*)',
  '/comp/cart(.*)',
]);

export default clerkMiddleware(async (auth, req) => {
  const { userId, redirectToSignIn } = await auth();

  // If user is not authenticated and is trying to access a protected route, redirect them to sign-in
  if (!userId && isProtectedRoute(req)) {
    return redirectToSignIn({ returnBackUrl: req.url });
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
}