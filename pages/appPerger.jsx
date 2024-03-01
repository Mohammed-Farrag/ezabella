'use client';
import Footer from "@/components/Footer"
import { usePathname } from "next/navigation"



export default function AppPager({ Component }) {
    const pathname = usePathname();
 


    if (!pathname.startsWith('/admin')) {
        return (

            <>
                {Component}
                <Footer />
            </>
        )
    } else {

        return (
            <>
                {Component}
            </>
        )
    }
}