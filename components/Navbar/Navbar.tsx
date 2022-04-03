import React, { Suspense, useEffect, useState } from 'react'
import DesktopNavbar from './DesktopNavbar'
import MobileNavbar from './MobileNavbar'
import { useMediaQuery } from 'react-responsive'


function Navbar() {

    // Checks device width to decide which navbar to display
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    const [isMobileNav, setIsMobileNav] = useState<boolean | null>(null)

    useEffect(() => {
        setIsMobileNav(isTabletOrMobile)
        return
    }, [])

    return (
        <div suppressHydrationWarning>
            {isMobileNav ? <MobileNavbar/> : <DesktopNavbar/>}
        </div>
    )
}

export default Navbar