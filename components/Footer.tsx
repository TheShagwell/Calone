import { FooterLinks, SocialIcons } from '@/constants/constant.index'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='max-container padding-container py-8 px-[96px] border-2 border-cyan-300 border-solid'>
        <div className="flexBetween w-full">
          <span className='text-offWhite-30'>2023 &copy; Calone</span>
          <div className="flex gap-4">
            {FooterLinks.map((links) => (
              <Link 
                href={links.href} 
                key={links.key} 
                className={`regular-16 gap-4 flexCenter cursor-pointer text-fadeCyan-30 transition-all hover:font-medium`}
              >
              {links.span}
            </Link>
            ))}
          </div>
            <Link href="" className='text-offWhite-30'>Privacy policy</Link>
            <div className="flex gap-4">
            {SocialIcons.links.map((links) => (
              <Link href='/' key={links} className='hover:fill-teal-600'>
                <Image src={links} alt="social links" width={24} height={24}/>
              </Link>            
            ))}
          </div>
        </div>
    </div>
  )
}

export default Footer