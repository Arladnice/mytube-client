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

      <div className='grid grid-cols-6 gap-6'>
        {isLoading ? (
          <SkeletonLoader count={6} className='h-48 rounded-md' />
        ) : (
          data?.data?.videos?.map(video => <VideoItem key={video.id} video={video} Icon={Flame} />)
        )}
      </div>
    </>
  )
}
