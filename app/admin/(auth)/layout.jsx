'use client'
import { usePathname } from 'next/navigation'
import React from 'react'
import Dashboard from './Dashboard';

function layout({ children }) {
    const pathname = usePathname().split("/");

    if (pathname.at(2)) return  (<Dashboard children={children} />)
    return <> {children} </>
}

export default layout