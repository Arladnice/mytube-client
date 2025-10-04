'use client'

import { useQuery } from '@tanstack/react-query'
import { Flame, Search } from 'lucide-react'
import { useSearchParams } from 'next/navigation'

import { Heading } from '@/ui/Heading'
import { SkeletonLoader } from '@/ui/SkeletonLoader'
import { VideoItem } from '@/ui/video-item/VideoItem'

import { videoService } from '@/services/video.service'

export function SearchPage() {
  const searchParams = useSearchParams()

  const { data, isLoading } = useQuery({
    queryKey: ['search', searchParams.get('term')],
    queryFn: () => videoService.getAll(searchParams.get('term'))
  })

  return (
    <>
      <Heading isH1 Icon={Search}>
        Search &quot;{searchParams.get('term')}&quot;
      </Heading>
      <div className='grid-6-cols'>
        {isLoading ? (
          <SkeletonLoader count={6} className='h-48 rounded-md' />
        ) : (
          data?.data?.videos?.map(video => <VideoItem key={video.id} video={video} Icon={Flame} />)
        )}
      </div>
    </>
  )
}
