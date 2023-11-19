import React from 'react'
import Button from './Button'

const Story = () => {
  return (
    <>
        <div className='max-container padding-container my-28'>
            <h2 className='bold-72 font-clashDisplay text-offWhite-30 mb-6'>Connect with Your Audience and Amplify Your Message</h2>
            <p className='w-[646px] text-offWhite-10 mb-6'>We believe everyone's stories can and should be heard, so we're giving creators around the world, from first-time podcasters to pros a powerful platform to share their stories.</p>
            <Button type="button" title="Get started" icon="/_plus.svg" variant="btn_white"/>
        </div>
    </>
  )
}

export default Story