"use client"

import Image from 'next/image'
import React from 'react'

interface Props {
    label: string, color: string, imageUrl: string, desc: string, handleClick: () => void
}

const HomeCard = ({ label, color, imageUrl, desc, handleClick }: Props) => {
    return (
        <div onClick={() => handleClick()} key={label} className={`${color} px-4 py-6 flex flex-col justify-between w-full :max-w-[270px] min-h-[260px] rounded-[14px] cursor-pointer`}>
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
        </div>
    )
}

export default HomeCard