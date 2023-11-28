import { Podcast } from '@/constants/constant.index';
import Image from 'next/image'
import React from 'react'

type PodcastDetailCard = {
    title: string;
    content: string;
    podcastImage: string;
}

const Podcasting = ({title, content,  podcastImage} : PodcastDetailCard) => {
    return (
        <div className="flex justify-between relative">
            <div className="max-w-[700px] !max-h-[420px]">
                <Image src={podcastImage} alt={title} width={705} height={420} className='bg-cover bg-center rounded-2xl'/>
            </div>
            <div className="w-full absolute -right-[90px] top-0">
                <h4 className='bold-72 font-clashDisplay text-offWhite-10'>{title}</h4>
                <p className='max-w-[460px] regular-16 text-offWhite-10'>{content}</p>
            </div>
        </div>
    )
}
const PodcastDetails = () => {
  return (
    <div className='max-container mt-24 padding-container'>
        <div className="flex flex-col gap-3 mt-6">
            {Podcast.map((pod) => (
                <Podcasting
                    key={pod.id}
                    content={pod.content}
                    podcastImage={pod.podcastImage}
                    title={pod.title}
                />
            ))}
        </div>
    </div>
  )
}

export default PodcastDetails