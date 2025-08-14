import axios from 'axios'

import type { IVideoResponse } from '@/types/video.types'

class VideoService {
  getExploreVideos() {
    return axios.get<IVideoResponse>('http://localhost:4200/api/videos/explore')
  }
}

export const videoService = new VideoService()
