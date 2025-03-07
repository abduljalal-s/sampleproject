import { tokenCache } from '@/cache';
import { ClerkLoaded, ClerkProvider, useAuth } from '@clerk/clerk-expo';
import { ConvexReactClient } from '@convex/react';
import { ConvexProviderWithClerk } from 'convex/react-clerk';
import { Children } from 'react';




const convex = new ConvexReactClient(process.env.EXPO_PUBLIC_CONVEX_URL!, {
    unsavedChangesWarning: false,
});


const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!

if (!publishableKey) {
  throw new Error(
    'Missing Publishable Key. Please set EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY in your .env',
  );
}

export default function ClerkAndConvexProvider(Children: React.ReactNode) {
  return (
   <ClerkProvider tokenCache={tokenCache} publishableKey={publishableKey}>
 <ConvexProviderWithClerk useAuth={useAuth} client={convex} />

<ClerkLoaded >{Children}</ClerkLoaded>
   </ClerkProvider>
  );
};