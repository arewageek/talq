import { useGetCalls } from '@/hooks/useGetCalls'
import React from 'react'

const CallList = ({ type }: { type: "upcoming" | "recordng" | "ended" }) => {

    const { endedCalls, upcomingCalls, callRecordings, isLoading } = useGetCalls()

    return (
        <div>CallList</div>
    )
}

export default CallList