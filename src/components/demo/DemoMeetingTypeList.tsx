"use client"

import "react-datepicker/dist/react-datepicker.css"
import DemoHomeCard from './DemoHomeCard'


const DemoMeetingTypeList = () => {

    return (
        <section className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4'>
            <DemoHomeCard color={"bg-orange-1"} desc={"Start an instant meeting"} label={"New Meeting"} imageUrl={"/icons/add-meetings.svg"} key={"New Meeting"} />
            <DemoHomeCard color={"bg-blue-1"} desc={"Plan your meeting"} label={"Schedule Meeting"} imageUrl={"/icons/schedule-meeting.svg"} key={"Schedule Meeting"} />
            <DemoHomeCard color={"bg-purple-1"} desc={"Check your recordings"} label={"View Recordings"} imageUrl={"/icons/Recording2.svg"} key={"View Recordings"} />
            <DemoHomeCard color={"bg-yellow-1"} desc={"Via invitation link"} label={"Join Meeting"} imageUrl={"/icons/join-meeting.svg"} key={"Join Meeting"} />
        </section >
    )
}

export default DemoMeetingTypeList