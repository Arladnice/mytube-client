import { Flame } from 'lucide-react'
import type { Metadata } from 'next'

import { Heading } from '@/ui/Heading'
import { VideoItem } from '@/ui/video-item/VideoItem'

import { Explore } from './(public)/explore/Explore'
import { videoService } from '@/services/video.service'

export const revalidate = 100
export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'MyTube',
  description: 'MyTube is a video sharing platform',
  alternates: {
    canonical: '/'
  },
  openGraph: {
    type: 'website',
    url: '/',
    title: 'MyTube'
  }
}

export default async function Home() {
  const data = await videoService.getTrendingVideos()
  const trendingVideos = data.data.slice(0, 6)

  return (
    <section>
      <section className='mb-4'>
        <Heading Icon={Flame}>Trending</Heading>
        <div className='grid-6-cols'>
          {trendingVideos.map(video => (
            <VideoItem key={video.id} video={video} Icon={Flame} />
          ))}
        </div>
      </section>
      <Explore />
    </section>
  )
}
