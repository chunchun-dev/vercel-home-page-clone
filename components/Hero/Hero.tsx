import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import DesktopHero from './DesktopHero'
import MobileHero from './MobileHero'
import TabletHero from './TabletHero'

const isWhatNav = (isMobile: boolean, isTablet: boolean, isDesktop: boolean) => {
    if (isDesktop) return 'isDesktop'
    else if (isTablet && !isMobile) return 'isTablet'
    else if (isMobile) return 'isMobile'
    return null
}

function Hero() {

    const isMobile = useMediaQuery({ query: '(max-width: 720px)' })
    const isDesktop = useMediaQuery({ query: '(min-width: 1224px)' })
    const isTablet = useMediaQuery({ query: '(max-width: 1000px)' })
    const [navType, setNavType] = useState<string | null>('isDesktop')

    useEffect(() => {
        const typeOfNav = isWhatNav(isMobile, isTablet, isDesktop)
        setNavType(typeOfNav)
        return
    }, [])

    return (
        <div suppressHydrationWarning>
            {navType === 'isMobile' ? <MobileHero/> : navType === 'isDesktop' ? <DesktopHero/> : <TabletHero/>}
        </div>
    )
}

export default Hero