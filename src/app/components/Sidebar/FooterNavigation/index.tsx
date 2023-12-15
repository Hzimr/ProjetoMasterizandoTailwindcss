import { NavItem } from '../NavItem'
import { NavItemFooterList } from '../../constants/data'

const handleRenderizeNavFooterItemList = () => {
  return NavItemFooterList.map((item) => {
    return (
      <NavItem key={item.id} id={item.id} title={item.title} icon={item.icon} />
    )
  })
}

export function FooterNavigation() {
  return <nav className="space-y-0.5">{handleRenderizeNavFooterItemList()}</nav>
}
