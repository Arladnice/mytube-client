import {
  CircleAlert,
  CirclePlay,
  Compass,
  Flame,
  FolderHeart,
  Gamepad2,
  History,
  Settings,
  TvMinimalPlay
} from 'lucide-react'

import { PAGE } from '@/config/public-page.config'
import { STUDIO_PAGE } from '@/config/studio-page.config'

import type { ISidebarItem } from './sidebar.types'

export const sidebarData: ISidebarItem[] = [
  {
    label: 'Explore',
    icon: Compass,
    link: PAGE.HOME
  },
  {
    label: 'Trending',
    icon: Flame,
    link: PAGE.TRENDING
  },
  {
    label: 'Video games',
    icon: Gamepad2,
    link: PAGE.VIDEO_GAMES,
    isBottomBorder: true
  },
  {
    label: 'My channel',
    icon: TvMinimalPlay,
    link: PAGE.MY_CHANNEL
  },
  {
    label: 'Subscriptions',
    icon: CirclePlay,
    link: PAGE.SUBSCRIPTIONS
  },
  {
    label: 'History',
    icon: History,
    link: PAGE.HISTORY
  },
  {
    label: 'Liked videos',
    icon: FolderHeart,
    link: PAGE.LIKED_VIDEOS,
    isBottomBorder: true
  }
]

export const moreSidebarData: ISidebarItem[] = [
  {
    label: 'Settings',
    icon: Settings,
    link: STUDIO_PAGE.SETTINGS
  },
  {
    label: 'Send feedback',
    icon: CircleAlert,
    link: PAGE.FEEDBACK
  }
]
