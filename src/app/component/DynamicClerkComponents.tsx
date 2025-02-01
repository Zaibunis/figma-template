// DynamicClerkComponents.tsx
'use client';

import dynamic from 'next/dynamic';

// Dynamically import SignInButton with SSR disabled
export const DynamicSignInButton = dynamic(
  () => import('@clerk/nextjs').then((mod) => mod.SignInButton),
  { ssr: false }
);

// Dynamically import UserButton with SSR disabled
export const DynamicUserButton = dynamic(
  () => import('@clerk/nextjs').then((mod) => mod.UserButton),
  { ssr: false }
);

// The SignedIn and SignedOut wrappers can typically remain as-is,
// but if needed, they can also be dynamically imported.
export { SignedIn, SignedOut } from '@clerk/nextjs';
