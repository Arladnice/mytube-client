class PublicPage {
  AUTH = '/auth'
  HOME = '/'
  TRENDING = '/trending'
  VIDEO_GAMES = '/video-games'

  MY_CHANNEL = '/my-channel'
  SUBSCRIPTIONS = '/subscriptions'
  HISTORY = '/history'
  LIKED_VIDEOS = '/liked-videos'

  FEEDBACK = '/feedback'

  VIDEO = (path: string) => `/v/${path}`

  CHANNEL = (path: string) => `/c/${path}`

  SEARCH(searchTerm: string) {
    return `/search?term=${searchTerm}`
  }
}

export const PAGE = new PublicPage()
