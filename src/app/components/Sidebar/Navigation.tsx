import { NavItem, NavItemProps } from './NavItem'

export interface NavigationProps {
  itemList: NavItemProps[]
}

export function Navigation({ itemList }: NavigationProps) {
  const handleRenderizeNavItemList = () => {
    return itemList.map((item) => {
      return (
        <NavItem
          key={item.id}
          id={item.id}
          title={item.title}
          icon={item.icon}
        />
      )
    })
  }
  return <nav className="space-y-0.5">{handleRenderizeNavItemList()}</nav>
}
