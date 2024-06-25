import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import MobileNav from './MobileNav'
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { Button } from '../ui/button'
// import SigninButton from '../SigninButton'

const Navbar = () => {

    return (
        <nav className='flex justify-between items-center fixed z-50 w-full bg-dark-1 px-6 py-4 lg:px-10'>
            <Link href="/" className='flex items-center gap-1'>
                <Image src="/icons/logo.png" width={32} height={32} alt="Logo" className='max-sm:size-10' />
                <p className='text-[26px] font-extrabold text-white max-sm:hidden'>TALQQ</p>
            </Link>

            <div className='flex justify-between items-center gap-5'>
                <SignedIn>
                    <UserButton />
                </SignedIn>
                <SignedOut>
                    <SignInButton>
                        <Button className='bg-blue-1 rounded font-bold text-white'>
                            Signin
                        </Button>
                    </SignInButton>
                </SignedOut>

                <MobileNav />
            </div>
        </nav>
    )
}

export default Navbar