import Image from 'next/image'
import React from 'react'
import podcastImage from '../public/_menDiscussingSM.png'
import { Peoples } from '@/constants/constant.index'


const Podcast = () => {
  return (
    <div className='text-offWhite-30 max-container padding-container'>
      <div className="flex gap-24 justify-between">
        <Image 
          src={podcastImage}
          alt='men talking'
          width={450}
          height={370}
          className='mt-[87px] rounded-2xl'
        />
        <div className="flex-col w-[706px] mt-[62px]">
          <div className="flexBetween w-full">
            <p className='font-clashDisplay bold-40 font-medium w-[315px]'>Active creators and listeners</p>
            <h1 className='font-clashDisplay bold-96'>568K</h1>
          </div>
          <hr className='w-full border-white mt-6' />
          <div className="flexBetween mt-4">
            <div className="flexBetween gap-6">
              <span className='flex -space-x-4 overflow-hidden'>
                {Peoples.map((persons) => (
                  <Image 
                    src={persons}
                    key={persons}
                    alt='persons'
                    width={20}
                    height={20}
                    className='inline-block h-10 w-10 rounded-full'
                  />
                ))}
              </span>
              <a href="" className='text-offWhite-30 hover:underline'>Join for free</a>
            </div>
            <p className='w-[244px]'>The number of active podcasts and their quality is constantly growing.</p>
          </div>
        </div>  
      </div>
    </div>
  )
}

export default Podcast