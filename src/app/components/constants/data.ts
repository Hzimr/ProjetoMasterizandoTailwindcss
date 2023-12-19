import {
  Home,
  BarChart,
  CheckSquare,
  Flag,
  SquareStack,
  Users,
  LifeBuoy,
  Cog,
} from 'lucide-react'
import { NavItemProps } from '../Sidebar/NavItem'

export const NavItemList: NavItemProps[] = [
  {
    id: 1,
    title: 'Home',
    icon: Home,
  },
  {
    id: 2,
    title: 'Dashboard',
    icon: BarChart,
  },
  {
    id: 3,
    title: 'Projects',
    icon: SquareStack,
  },
  {
    id: 4,
    title: 'Tasks',
    icon: CheckSquare,
  },
  {
    id: 5,
    title: 'Reporting',
    icon: Flag,
  },
  {
    id: 6,
    title: 'Users',
    icon: Users,
  },
]

export const NavItemFooterList: NavItemProps[] = [
  {
    id: 1,
    title: 'Support',
    icon: LifeBuoy,
  },
  {
    id: 2,
    title: 'Settings',
    icon: Cog,
  },
]
