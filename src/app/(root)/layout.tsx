import StreamVideoProvider from '@/providers/StreamClientProvider'
import { SignedIn, SignedOut } from '@clerk/nextjs'
import { ReactNode } from 'react'

const RootLayout = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <SignedIn>
                <StreamVideoProvider>
                    <main>
                        {children}
                    </main>
                </StreamVideoProvider>
            </SignedIn>
            <SignedOut>
                <main>
                    {children}
                </main>
            </SignedOut>
        </>
    )
}

export default RootLayout