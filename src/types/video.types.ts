import type { IChannel } from './channel.types'

export interface IVideo {
  id: string
  title: string
  slug: string
  description: string
  thumbnailUrl: string
  videoFileName: string
  viewsCount: number
  isPublic: boolean
  createdAt: string
  channel: IChannel
}

export interface IVideoResponse {
  limit: number
  page: number
  totalCount: number
  totalPages: number
  videos: IVideo[]
}
