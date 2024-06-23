import { DeviceSettings, VideoPreview, useCall } from '@stream-io/video-react-sdk'
import React, { useEffect, useState } from 'react'
import { Button } from '../ui/button'

const MeetingSetup = ({ setIsSetupComplete }: { setIsSetupComplete: (value: boolean) => void }) => {
    const [isMicCamActive, setIsMicCamActive] = useState(false)

    const call = useCall()

    if (!call) throw new Error("useCall must be used within stream call component")

    useEffect(() => {
        if (isMicCamActive) {
            call?.camera.disable();
            call?.microphone.disable()
        }
        else {
            call?.camera.enable();
            call?.microphone.enable()
        }
    }, [isMicCamActive, call?.camera, call?.microphone])


    return (
        <div className='flex h-screen w-full flex-col items-center justify-center gap-3 text-white'>
            <h1 className='text-2xl font-bold'>Pre-Meeting Setup</h1>
            <VideoPreview />
            <div className='flex h-16 items-center justify-center gap-3'>
                <label className='flex items-center justify-center gap-2 font-medium'>
                    <input id='toggleMicCam' type="checkbox" checked={isMicCamActive} onChange={e => setIsMicCamActive(e.target.checked)} />
                    Join with Mic and camera turned off
                </label>
                <DeviceSettings />

            </div>
            <Button className='rounded-md bg-sky-500 px-4 py-2.5 shadow-inner font-semibold text-black hover:bg-sky-600 transition' onClick={() => {
                call.join();
                setIsSetupComplete(true)
            }}>
                Join Meeting
            </Button>
        </div>
    )
}

export default MeetingSetup