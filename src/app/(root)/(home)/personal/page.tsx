'use client'

import { Button } from '@/components/ui/button'
import { useToast } from '@/components/ui/use-toast'
import { useGetCallById } from '@/hooks/useGetCallById'
import { cn } from '@/lib/utils'
import { useUser } from '@clerk/nextjs'
import { useStreamVideoClient } from '@stream-io/video-react-sdk'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

const Table = ({ title, description, capitalize }: { title: string, description: string, capitalize?: boolean }) => {
    return <div className='flex flex-col items-start gap-2 xl:flex-row'>
        <h1 className="text-base font-medium text-sky-1 xl:text-xl xl:min-w-32">{title}:</h1>
        <h2 className={cn("truncate text-sm font-bold max-sm:max-w-[300px] lg:text-xl", { capitalize })}>{description}</h2>
    </div >
}

const Personal = () => {
    const [isLoading, setIsLoading] = useState(false)

    const { user } = useUser()
    const meetingId = user?.id
    const meetingLink = `${process.env.NEXT_PUBLIC_BASE_URL}/meeting/${meetingId}?personal=true`

    const { toast } = useToast()
    const { call } = useGetCallById(meetingId!)
    const client = useStreamVideoClient()
    const router = useRouter()


    const startRoom = async () => {
        setIsLoading(true)
        try {
            if (!client || !user) return;

            if (!call) {
                const newCall = client.call('default', meetingId!)
                await newCall.getOrCreate({ data: { starts_at: new Date().toISOString() } })
            }
            router.push(`/meeting/${meetingId}?personal=true`)

        }
        catch (e) {
            console.log(e)
        }
        finally {
            setIsLoading(false)
        }
    }

    return (
        <section className='flex flex-col size-full gap-10'>
            <h1 className='text-3xl font-bold'>Personal</h1>

            <div className='flex w-full flex-col gap-8 xl:max-w-[900px]'>
                <Table title='Topic' description={`${user?.username}'s meeting room`} capitalize={true} />
                <Table title='Meeting Id' description={meetingId!} />
                <Table title='Meeting Link' description={meetingLink} />
            </div>
            <div className='flex gap-5'>
                <Button onClick={startRoom} className='bg-blue-1 flex gap-3 font-semibold'>
                    {isLoading ?
                        <div className='w-6 h-6 rounded-full border-2 border-white border-l-0 animate-spin'>

                        </div>
                        :
                        <><Image src={"/icons/Rocket.svg"} height={20} width={20} alt='Copy to clipboard' /> Start</>
                    }
                </Button>
                <Button onClick={() => { navigator.clipboard.writeText(meetingLink); toast({ title: "Link Copied" }) }} className='bg-dark-3 flex gap-3 font-semibold'>
                    <Image src={"/icons/copy.svg"} height={20} width={20} alt='Copy to clipboard' /> Copy
                </Button>
            </div>
        </section >
    )
}

export default Personal