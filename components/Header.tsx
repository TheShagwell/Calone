import Navbar from "./Navbar"
import Hero from "./Hero"
import Image from "next/image"
import _manOnHeadphone_I from '../public/_manOnHeadphone_I.jpg';

const Header = () => {
  return (
    <div className='h-screen relative w-full'>
      <Navbar/>
      <Image
        src={_manOnHeadphone_I}
        alt="hello"
        fill
        className="object-cover"
        sizes="100vw"
        priority
      />
      <Hero/>

    </div>
  )
}

export default Header