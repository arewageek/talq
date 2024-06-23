"use client"

import { useCall, useCallStateHooks } from '@stream-io/video-react-sdk'
import React from 'react'
import { Button } from '../ui/button'
import { useRouter } from 'next/navigation'
import { useToast } from '../ui/use-toast'

const EndCallButton = () => {
    const call = useCall()

    const { toast } = useToast()
    const { useLocalParticipant } = useCallStateHooks()
    const localParticipant = useLocalParticipant();

    const isMeetingOwner = localParticipant && call?.state.createdBy && localParticipant.userId === call.state.createdBy.id;

    if (!isMeetingOwner) return null

    const router = useRouter()


    return (
        <Button className='bg-red-500 text-xs hover:bg-red-600 transition font-bold' onClick={async () => {
            await call.endCall();
            toast({ title: "Call Ended For All Participants" })
            router.push("/")
        }}>
            End Call For Everyone
        </Button>
    )
}

export default EndCallButton