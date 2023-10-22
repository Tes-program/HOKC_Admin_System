'use client'

import logo from "@assets/index"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image"

export default function NavBar() {
    
    return (
        <main>
            <div className="flex  px-30 py-4 flex-col items-start gap-2">
                <div className="flex justify-between items-stretch">
                    <div className="flex items-center gap-16">
                    <Image className="" src={logo} alt="HOKC logo" />
                    
                    </div>

                </div>
            </div>
        </main>
    )
}