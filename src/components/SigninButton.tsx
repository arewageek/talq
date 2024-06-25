"use client"

import { ReactNode } from 'react'
import { Button } from './ui/button'
import { SignIn, SignInButton } from '@clerk/nextjs'
import { cn } from '@/lib/utils'

const SigninButton = ({ button, children }: { button?: boolean, children: ReactNode }) => {
    const handleSignin = () => {
        SignInButton
    }

    return <Button className={cn('', { 'bg-blue-1 rounded font-bold text-white': button })} onClick={handleSignin}>
        {children}
    </Button>

}

export default SigninButton