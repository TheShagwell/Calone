import { NavItems } from '@/constants/constant.index'
import Link from 'next/link'
import Button from './Button'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='flexBetween max-container padding-container relative z-50 py-8'>
      <Link href="">
        <h4 className='font-ZenDots bold-24 text-offWhite-10'>Calone</h4>
      </Link>
      <ul className="hidden h-full gap-12 lg:flex">
        {NavItems.map((link, index) => (
          <Link href={link.href} key={link.key} className={`regular-16 flexCenter ${index %2 == 0 ? 'text-red-300' : ''} cursor-pointer text-fadeCyan-30 transition-all hover:font-medium`}>
            {link.span}
          </Link>
        ))}
      </ul>
      <div className="lg:flexCenter gap-3 hidden">
        <Button 
          type="button"
          title="Log in" 
          variant="btn_white_outline"
        />
        <Button 
          type="button"
          title="Sign up"
          variant="btn_white"
        />
      </div>
    </nav>
  )
}

export default Navbar