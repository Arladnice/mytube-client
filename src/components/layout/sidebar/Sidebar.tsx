import { SidebarHeader } from './header/SidebarHeader'
import { SidebarMenu } from './menus/SidebarMenu'
import { SidebarSubscriptions } from './menus/subscriptions/SidebarSubscriptions'
import { moreSidebarData, sidebarData } from './sidebar.data'

export function Sidebar() {
  return (
    <aside>
      <SidebarHeader />
      <SidebarMenu menu={sidebarData} />
      <SidebarSubscriptions />
      <SidebarMenu menu={moreSidebarData} />
    </aside>
  )
}
