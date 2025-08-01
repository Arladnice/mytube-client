import { SidebarHeader } from './header/SidebarHeader'
import { SidebarMenu } from './menus/SidebarMenu'
import { SidebarSubscriptions } from './menus/subscriptions/SidebarSubscriptions'
import { moreSidebarData, sidebarData } from './sidebar.data'

export function Sidebar({ onToggleSidebar }: { onToggleSidebar: () => void }) {
  return (
    <aside className='p-layout border-r border-r-border whitespace-nowrap overflow-hidden'>
      <SidebarHeader onToggleSidebar={onToggleSidebar} />
      <SidebarMenu menu={sidebarData} />
      <SidebarSubscriptions />
      <SidebarMenu menu={moreSidebarData} title='More from MyTube' />
    </aside>
  )
}
