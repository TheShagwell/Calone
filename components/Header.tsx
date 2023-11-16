import Navbar from "./Navbar"
import Hero from "./Hero"
import Image from "next/image"
import _bgMovementMotion1 from '../public/_bgMovementMotion1.jpg';

const Header = () => {
  return (
    <div className='h-screen relative w-full'>
      <Navbar/>
      <Image
        src={_bgMovementMotion1}
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