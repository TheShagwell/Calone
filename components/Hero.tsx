import Image from 'next/image'
import React from 'react'
import _microphone from '../public/_microphone.png' 
import _arrowUpRight from "../assets/_iconArrowNarrowUpRight.svg"
import Button from './Button'

const Hero = () => {
  return (
    <div className='max-container padding-container relative py-8'>
      <div className="relative">
        <h1 className='bold-96 text-offWhite-10 font-clashDisplay'>Create and <br />monetize your podcast</h1>
        <div className="flex items-center absolute top-0 right-[430px] gap-8">
          <div className="microphone">
            <Image
              src={_microphone}
              alt="_microphone"
              width={40}
              height={40}
            />
          <div className="arrow-up">
            <Image
              src={_arrowUpRight}
              alt="_microphone"
              width={16}
              height={16}
            />
          </div>

          </div>
          <a href="" className='text-offWhite-10 hover:underline'>Join for free</a>
        </div>
      </div>
      <p className='text-offWhite-30 mt-10 w-[494px]'>Distribute your podcast to the most popular listening apps, including Spotify with just simple steps.</p>
      <div className="lg:flex gap-4 mt-[48px] hidden">
        <Button type="button" title="Get started now" icon="/_plus.svg" variant="btn_white"/>
        <Button type="button" title="Switch to calone" variant="btn_white_outline"/>
      </div>
    </div>
  )
}

export default Hero