'use client'

import { useQuery } from '@tanstack/react-query'
import { Compass, Flame } from 'lucide-react'

import { Heading } from '@/ui/Heading'
import { SkeletonLoader } from '@/ui/SkeletonLoader'
import { VideoItem } from '@/ui/video-item/VideoItem'

import { videoService } from '@/services/video.service'

export function Explore() {
  const { data, isLoading } = useQuery({
    queryKey: ['explore'],
    queryFn: () => videoService.getExploreVideos()
  })

  return (
    <>
      <Heading Icon={Compass}>Explore</Heading>

      <div className='grid-6-cols'>
        {isLoading ? (
          <SkeletonLoader count={6} className='h-48 rounded-md' />
        ) : data?.data.videos.length ? (
          data?.data.videos.map(video => <VideoItem key={video.id} video={video} />)
        ) : (
          <div>Explore are temporarily unavailable</div>
        )}
      </div>
    </>
  )
}
