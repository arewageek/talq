

import DemoMeetingTypeList from '@/components/demo/DemoMeetingTypeList'
import MeetingTypeList from '@/components/meeting/MeetingTypeList'
import { SignInButton, SignedIn, SignedOut } from '@clerk/nextjs'
import React from 'react'

const HomePage = () => {
    const now = new Date()
    const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    const date = (new Intl.DateTimeFormat('en-US', {
        dateStyle: 'full'
    })).format(now)

    return (
        <section className='flex flex-col size-full gap-10'>
            <div className='h-[300px] w-full rounded-[20px] bg-hero bg-cover'>
                <div className='flex h-full flex-col justify-between max-md:px-5 max-md:py-8 lg:p-11'>
                    {/* <h2 className='glassmorphism w-fit rounded py-2 px-5 text-center text-3xl font-bold'> */}
                    <h2 className='glassmorphism max-w-[270px] rounded py-2 text-center text-base font-medium'>
                        Upcoming meeting at 12:30 PM

                        {/* Happy Birthday Barak!!! */}
                    </h2>
                    <div className='flex flex-col gap-2'>
                        <h1 className='text-4xl font-extrabold lg:text-7xl'>
                            {time}
                        </h1>
                        <p className='text-lg font-medium text-sky-1 lg:text-2xl'>
                            {date}
                        </p>
                    </div>
                </div>

            </div>

            <SignedIn>
                <MeetingTypeList />
            </SignedIn>

            <SignedOut>
                <SignInButton>
                    <DemoMeetingTypeList />

                </SignInButton>
            </SignedOut>

        </section>
    )
}

export default HomePage