import Header from '@/components/Header'
import Podcast from '@/components/Podcast'
import Podcasts from '@/components/Podcasts'
import Story from '@/components/Story'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Header/>
      <Podcast/>
      <Story/>
      <Podcasts/>
    </>
  )
}
