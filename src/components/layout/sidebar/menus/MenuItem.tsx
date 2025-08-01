import cn from 'clsx'
import Link from 'next/link'

import type { ISidebarItem } from '../sidebar.types'

interface Props {
  item: ISidebarItem
  isActive: boolean
}
export function MenuItem({ item, isActive }: Props) {
  return (
    <li>
      <Link href={item.link} className='group flex items-center gap-5 py-3'>
        <item.icon className='group-hover:text-primary transition-colors group-hover:rotate-6 min-w-6' />
        <span
          className={cn({
            'border-b': isActive,
            'border-white': isActive,
            'border-transparent': !isActive
          })}
        >
          {item.label}
        </span>
      </Link>
      {item.isBottomBorder && <div className='h-[1px] border-b border-b-border w-full my-5' />}
    </li>
  )
}
