import { Button } from '@geist-ui/core'
import Image from 'next/image'
import React, { useState } from 'react'
import NavbarDefaults from '../../shared/constants/NavbarDefaults'
import OpenIcon from '../../public/Icons/OpenIcon.svg'
import CloseIcon from '../../public/Icons/CloseIcon.svg'
import Link from 'next/link'

function MobileNavbar() {

  const [navIsOpen, setNavIsOpen] = useState(false)

  const toggleOpen = () => {
    setNavIsOpen(!navIsOpen)
  }

  return (
    <>
      <div
        style={{
          position: 'sticky',
          zIndex: 101,
          width: '100%',
          display: 'flex',
          minHeight: '64px',
          maxHeight: '64px',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: 25,
        }}
      >
        <svg height="24" viewBox="0 0 284 65" fill="var(--geist-foreground)" style={{maxWidth: '100%'}} aria-label="Vercel Logotype"><path d="M141.68 16.25c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.46 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zm117.14-14.5c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.45 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zm-39.03 3.5c0 6 3.92 10 10 10 4.12 0 7.21-1.87 8.8-4.92l7.68 4.43c-3.18 5.3-9.14 8.49-16.48 8.49-11.05 0-19-7.2-19-18s7.96-18 19-18c7.34 0 13.29 3.19 16.48 8.49l-7.68 4.43c-1.59-3.05-4.68-4.92-8.8-4.92-6.07 0-10 4-10 10zm82.48-29v46h-9v-46h9zM37.59.25l36.95 64H.64l36.95-64zm92.38 5l-27.71 48-27.71-48h10.39l17.32 30 17.32-30h10.39zm58.91 12v9.69c-1-.29-2.06-.49-3.2-.49-5.81 0-10 4-10 10v14.8h-9v-34h9v9.2c0-5.08 5.91-9.2 13.2-9.2z"></path></svg>
        <p onClick={toggleOpen}>{!navIsOpen ? 
        <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" shapeRendering="geometricPrecision" style={{color:'var(--geist-foreground'}}><path d="M3 12h18"/><path d="M3 6h18"/><path d="M3 18h18"/></svg>
        : 
          <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" shapeRendering="geometricPrecision" style={{color:'var(--geist-foreground)'}}><path d="M18 6L6 18"/><path d="M6 6l12 12"/></svg>
        }</p>
      </div>
      {navIsOpen && <> 
      <section id='nav-submenu' style={{ padding: '20px' }}>
        {NavbarDefaults.navActions.map((navAction, idx) => (
          <Button key={idx} w={'100%'} mb='1' type={navAction.primaryButton ? 'success' : 'default'}>{navAction.text}</Button>
        ))}
      </section>
      <section style={{ padding: '20px', marginTop: '-20px' }}>
        {NavbarDefaults.navItems.map((navItem, idx) => (
          <a style={{
            display: 'flex',
            alignItems: 'center',
            width: '100%',
            paddingTop: '15px',
            paddingBottom: '15px',
            borderBottom: '#ececec 1px solid'
          }}
          href={navItem.link as string}
          key={idx}>
            {navItem.text}
          </a>
        ))}
      </section>
      </>}
    </>
  )
}

export default MobileNavbar