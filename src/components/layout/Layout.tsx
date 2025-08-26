'use client'

import cn from 'clsx'
import type { PropsWithChildren } from 'react'
import { useState } from 'react'

import { Content } from './content/Content'
import { Sidebar } from './sidebar/Sidebar'

import styles from './Layout.module.scss'

export function Layout({ children }: PropsWithChildren<unknown>) {
  const [isShowedSidebar, setIsShowedSidebar] = useState(true)

  const handleToggleSidebar = () => {
    setIsShowedSidebar(prev => !prev)
  }

  return (
    <main
      className={cn(
        'flex min-h-screen',
        styles.initialSidebar,
        isShowedSidebar ? styles.showedSidebar : styles.hidedSidebar
      )}
    >
      <Sidebar onToggleSidebar={handleToggleSidebar} />
      <Content>{children}</Content>
    </main>
  )
}
