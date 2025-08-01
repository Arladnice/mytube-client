import type { ISidebarItem } from '../sidebar.types'

import { MenuItem } from './MenuItem'

interface Props {
  menu: ISidebarItem[]
  title?: string
}

export function SidebarMenu({ menu, title }: Props) {
  return (
    <nav>
      {title && <div className='opacity-45 uppercase text-xs mb-3 font-medium'>{title}</div>}
      <ul>
        {menu.map(item => (
          <MenuItem key={item.label} item={item} isActive={item.label === 'Explore'} />
        ))}
      </ul>
    </nav>
  )
}
