import type { ISidebarItem } from '../sidebar.types'

import { MenuItem } from './MenuItem'

interface Props {
  menu: ISidebarItem[]
  title?: string
}

export function SidebarMenu({ menu, title }: Props) {
  return (
    <nav>
      {title && <span>{title}</span>}
      <ul>
        {menu.map(item => (
          <MenuItem key={item.label} item={item} />
        ))}
      </ul>
    </nav>
  )
}
