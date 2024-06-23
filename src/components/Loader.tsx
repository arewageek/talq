import Image from 'next/image'
import React from 'react'

const Loader = () => {
    return (
        <div className='flex-center h-screen w-full'>
            <Image src={"/icons/loading.svg"} alt="loading" width={32} height={32} />
        </div>
    )
}

export default Loader