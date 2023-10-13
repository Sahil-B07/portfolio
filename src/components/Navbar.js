import Link from 'next/link'
import React from 'react'

const Navbar = ({myFont}) => {

  return (
    <header>
        <nav className='w-full bg-black p-3 flex fixed z-30 justify-end mb-20'>
            <ul className={`${myFont.sora.className} text-base text-white flex gap-10 w-fit pr-[4rem]`}>
                <Link data-scroll-to href={'#hero'} >Home</Link>
                <Link data-scroll-to href={'#about-me'}>AboutMe</Link>
                <Link data-scroll-to href={'#contact'}>Contact</Link>
            </ul>
        </nav>
    </header>
  )
}

export default Navbar