import Image from 'next/image'
import React from 'react'

const Loader = () => {
    return (
        <div className='flex-center h-screen w-full'>
            <Image src={"/icons/Loading.svg"} alt="loading" width={200} height={200} />
        </div>
    )
}

export default Loader