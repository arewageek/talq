"use client"

import Image from 'next/image'
import { useState } from 'react'
import { Button } from '../ui/button'
import { SignInButton } from '@clerk/nextjs'
import DemoModal from './DemoModal'

interface Props {
    color: string
    label: string
    imageUrl: string
    desc: string
}

const DemoHomeCard = ({ color, imageUrl, label, desc }: Props) => {
    const [isModalOpen, setisModalOpen] = useState<boolean>(false)

    const showModal = () => {
        setisModalOpen(true)
    }

    return (
        <div onClick={showModal} key={label} className={`${color} px-4 py-6 flex flex-col justify-between w-full :max-w-[270px] min-h-[260px] rounded-[14px] cursor-pointer`}>
            <div className='flex flex-center glassmorphism size-12 rounded-[10px]'>
                <Image src={imageUrl} alt={label} width={27} height={27} />
            </div>
            <div className='flex flex-col gap-2'>
                <h1 className='text-2xl font-bold'>
                    {label}
                </h1>
                <p className='text-lg font-normal'>
                    {desc}
                </p>
            </div>
            <DemoModal isOpen={isModalOpen!} onClose={() => setisModalOpen(false)} title="Please Sign In first" />
        </div>
    )
}

export default DemoHomeCard