"use client"

import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { sidebarLinks } from "@/constants"
import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"


const MobileNav = () => {
    const pathname = usePathname()

    return (
        <section className='w-full max-w-[264px]'>
            <Sheet>
                <SheetTrigger asChild>
                    <Image width={30} height={30} alt="menu" src="/icons/Hamburger.svg" className="curor-pointer sm:hidden" />
                </SheetTrigger>
                <SheetContent className="border-none bg-dark-1">
                    <SheetTitle>
                        <Link href="/" className='flex items-center gap-1'>
                            <Image src="/icons/logo.png" width={32} height={32} alt="Logo" className='max-sm:size-10' />
                            <p className='text-[26px] font-extrabold text-white'>TALQ</p>
                        </Link>

                    </SheetTitle>
                    <div className="flex h-[cal(100vh-72px)] flex-col justify-between overflow-y-auto">
                        <SheetClose asChild>
                            <section className="flex h-full flex-col gap-6 pt-16 text-white">
                                <div className='flex flex-1 flex-col gap-6'>
                                    {sidebarLinks.map(link => {
                                        const isActive = pathname === link.route

                                        return <SheetClose asChild key={link.label} >
                                            <Link href={link.route} className={cn("flex gap-4 items-center p-4 rounded-lg w-full max-w-60", { 'bg-blue-1': isActive })}>
                                                <Image src={link.imgUrl} alt={link.label} width={20} height={20} />
                                                <p className='font-semibold'>
                                                    {link.label}
                                                </p>
                                            </Link>
                                        </SheetClose>
                                    })}
                                </div>
                            </section>
                        </SheetClose>
                    </div>
                </SheetContent>
            </Sheet>

        </section>
    )
}

export default MobileNav