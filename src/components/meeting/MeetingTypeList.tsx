"use client"
import { useState } from 'react'
import HomeCard from './HomeCard'
import { useRouter } from 'next/navigation'
import MeetingModal from './MeetingModal'
import { useUser } from '@clerk/nextjs'
import { Call, useStreamVideoClient } from '@stream-io/video-react-sdk'
import { useToast } from '../ui/use-toast'
import { Textarea } from '../ui/textarea'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"
import { Input } from '../ui/input'


const MeetingTypeList = () => {

    const [meetingState, setMeetingState] = useState<"isInstantMeeting" | "isJoiningMeeting" | "isSchedulingMeeting" | "isJoiningMeeting" | undefined>()

    const meetingList = [
        { imageUrl: "/icons/add-meetings.svg", label: "New Meeting", desc: "Start an instant meeting", color: "bg-orange-1" },
        { imageUrl: "/icons/schedule-meeting.svg", label: "Schedule Meeting", desc: "Plan your meeting", color: "bg-blue-1" },
        { imageUrl: "/icons/Recording2.svg", label: "View Recordings", desc: "Check your recordings", color: "bg-purple-1" },
        { imageUrl: "/icons/join-meeting.svg", label: "Join Meeting", desc: "Via invitation link", color: "bg-yellow-1" },
    ]

    const router = useRouter()
    const { user } = useUser()
    const client = useStreamVideoClient()

    const { toast } = useToast()

    const [values, setValues] = useState({
        datetime: new Date(),
        description: '',
        link: ''
    })
    const [callDetails, setCallDetails] = useState<Call>()

    const createMeeting = async () => {
        if (!client || !user) return;
        try {
            if (!values.datetime) { toast({ title: "Please select a date and time" }); return }
            const callId = crypto.randomUUID()

            const call = client.call('default', callId);
            if (!call) throw new Error("Failed to create call")

            const startsAt = values.datetime.toISOString() || new Date(Date.now()).toISOString();
            const description = values.description || "Instant meeting"

            await call.getOrCreate({ data: { starts_at: startsAt, custom: { description } } })
            setCallDetails(call)

            if (!values.description) { router.push(`/meeting/${call.id}`); toast({ title: " Meeting created!" }) }

        } catch (e) {
            console.log(e)
            toast({ title: "Failed to create meeting" })
        }
    }

    const meetingLink = `${process.env.NEXT_PUBLIC_BASE_URL}/meeting/${callDetails?.id}`

    return (
        <section className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4'>
            <HomeCard color={"bg-orange-1"} desc={"Start an instant meeting"} label={"New Meeting"} imageUrl={"/icons/add-meetings.svg"} key={"New Meeting"} handleClick={() => setMeetingState("isInstantMeeting")} />
            <HomeCard color={"bg-blue-1"} desc={"Plan your meeting"} label={"Schedule Meeting"} imageUrl={"/icons/schedule-meeting.svg"} key={"Schedule Meeting"} handleClick={() => setMeetingState("isSchedulingMeeting")} />
            <HomeCard color={"bg-purple-1"} desc={"Check your recordings"} label={"View Recordings"} imageUrl={"/icons/Recording2.svg"} key={"View Recordings"} handleClick={() => router.push("/recordings")} />
            <HomeCard color={"bg-yellow-1"} desc={"Via invitation link"} label={"Join Meeting"} imageUrl={"/icons/join-meeting.svg"} key={"Join Meeting"} handleClick={() => setMeetingState("isJoiningMeeting")} />

            {!callDetails ?
                <MeetingModal isOpen={meetingState === "isSchedulingMeeting"} onClose={() => setMeetingState(undefined)} title="Create New Meeting" handleClick={createMeeting}>
                    <div className='flex flex-col gap-2.5'>
                        <form>
                            <label htmlFor="text-base text-normal leading-[22px] text-sky-2">
                                Add a description
                            </label>
                            <Textarea required className='border-none bg-dark-3 focus-visible:ring-0 focus-visible:ring-offset-0' onChange={(e) => setValues({ ...values, description: e.target.value })} />
                        </form>
                    </div>
                    <div className='flex w-full flex-col gap-2.5'>
                        <label htmlFor="text-base text-normal leading-[22px] text-sky-2">Select Date and Time</label>
                        <DatePicker selected={values.datetime} onChange={date => setValues({ ...values, datetime: date! })} showTimeSelect timeFormat='HH:mm' timeIntervals={15} timeCaption='time' dateFormat="MMMM d, yyyy h:mm aa" className='w-full rounded bg-dark-3 p-2 focus:outline-none' />
                    </div>
                </MeetingModal> :
                <MeetingModal isOpen={meetingState === "isSchedulingMeeting"} onClose={() => { setMeetingState(undefined) }} title="Meeting Created" className="text-center" buttonText="Copy Meeting Link" handleClick={() => { navigator.clipboard.writeText(meetingLink); toast({ title: "Meeting link copied" }) }} image='/icons/Check.svg' />
            }

            <MeetingModal isOpen={meetingState === "isInstantMeeting"} onClose={() => setMeetingState(undefined)} title="Start an Instant Meeting" className="text-center" buttonText="Start Meeting" handleClick={createMeeting} />

            <MeetingModal isOpen={meetingState === "isJoiningMeeting"} onClose={() => setMeetingState(undefined)} title="Type the link here" className="text-center" buttonText="Join Meeting" handleClick={() => router.push(values.link)}>
                <Input placeholder='Meeting link' className='border-none bg-dark-3 focus-visible:ring-0 focus-visible:ring-offset-0' onChange={e => setValues({ ...values, link: e.target.value })} />
            </MeetingModal>
        </section>
    )
}

export default MeetingTypeList