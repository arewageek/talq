import StreamVideoProvider from '@/providers/StreamClientProvider'
import React, { ReactNode } from 'react'

const RootLayout = ({ children }: { children: ReactNode }) => {
    return (
        <StreamVideoProvider>
            <main>
                {children}
            </main>
        </StreamVideoProvider>
    )
}

export default RootLayout