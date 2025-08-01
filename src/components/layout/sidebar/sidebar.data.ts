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

import { PUBLIC_PAGE } from '@/config/public-page.config'

import type { ISidebarItem } from './sidebar.types'

export const sidebarData: ISidebarItem[] = [
  {
    label: 'Explore',
    icon: Compass,
    link: PUBLIC_PAGE.HOME
  },
  {
    label: 'Trending',
    icon: Flame,
    link: PUBLIC_PAGE.TRENDING
  },
  {
    label: 'Video games',
    icon: Gamepad2,
    link: PUBLIC_PAGE.VIDEO_GAMES,
    isBottomBorder: true
  },
  {
    label: 'My channel',
    icon: TvMinimalPlay,
    link: PUBLIC_PAGE.MY_CHANNEL
  },
  {
    label: 'Subscriptions',
    icon: CirclePlay,
    link: PUBLIC_PAGE.SUBSCRIPTIONS
  },
  {
    label: 'History',
    icon: History,
    link: PUBLIC_PAGE.HISTORY
  },
  {
    label: 'Liked videos',
    icon: FolderHeart,
    link: PUBLIC_PAGE.LIKED_VIDEOS,
    isBottomBorder: true
  }
]

export const moreSidebarData: ISidebarItem[] = [
  {
    label: 'Settings',
    icon: Settings,
    link: PUBLIC_PAGE.SETTINGS
  },
  {
    label: 'Send feedback',
    icon: CircleAlert,
    link: PUBLIC_PAGE.FEEDBACK
  }
]
