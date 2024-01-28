import Image from 'next/image'
import React from 'react'
import logo from "@/public/logo.png"
import Link from 'next/link'
export default function Navbar() {
  return (
    <div className='shadow-md p-2 px-7 bg-white'>
      <Link href={"/"} className='flex items-center gap-2 cursor-pointer'>
        <Image src={logo} priority alt='Genius' height={40} width={40}/>
        <span className='font-bold'>Genius</span>
      </Link>
    </div>
  )
}
