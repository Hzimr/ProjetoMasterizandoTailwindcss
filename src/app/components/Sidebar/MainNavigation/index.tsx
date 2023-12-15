import { NavItem } from '../NavItem'
import { NavItemList } from '../../constants/data'

const handleRenderizeNavItemList = () => {
  return NavItemList.map((item) => {
    return (
      <NavItem key={item.id} id={item.id} title={item.title} icon={item.icon} />
    )
  })
}

export function MainNavigation() {
  return <nav className="space-y-0.5">{handleRenderizeNavItemList()}</nav>
}
