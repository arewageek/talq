import React from 'react'
import { layoutProps } from "@/types/layout"
import Navbar from '@/components/layouts/Navbar'
import Sidebar from '@/components/layouts/Sidebar'

const HomeLayout = ({ children }: layoutProps) => {
    return (
        <main className='relative'>
            <Navbar />
            <div className='flex'>
                <Sidebar />

                <section className='flex h-screen flex-1 flex-col px-6 pb-6 pt-28 max-md:pb-14 sm-px-14 xl:px-24 overflow-y-auto'>
                    <div className='w-full text-white'>
                        {children}
                    </div>
                </section>
            </div>
            {/* Footer */}
        </main>
    )
}

export default HomeLayout