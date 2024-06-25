import React, { ReactNode } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { SignInButton } from '@clerk/nextjs'



interface Props {
    isOpen: boolean,
    onClose: () => void,
    title: string,
}

const DemoModal = ({ isOpen, onClose, title }: Props) => {
    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className='flex w-full max-w-[520px] flex-col gap-6 border-none bg-dark-1 px-6 py-9 text-white'>
                <div className='flex flex-col gap-6 '>

                    <h1 className={cn("text-3xl font-bold leading-[42px] text-center")}>
                        {title}
                    </h1>

                    <SignInButton>
                        <button className='bg-blue-1 focus-visible:ring-0 focus-visible:ring-offset-0 py-3 rounded-sm font-bold'>
                            Signin
                        </button>
                    </SignInButton>
                </div>
            </DialogContent>
        </Dialog>

    )
}

export default DemoModal