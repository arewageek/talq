import CallList from '@/components/meeting/CallList'
import React from 'react'

const Previous = () => {
    return (
        <section className='flex flex-col size-full gap-10'>
            <h1 className='text-3xl font-bold'>Previous</h1>

            <CallList type='ended' />
        </section>
    )
}

export default Previous