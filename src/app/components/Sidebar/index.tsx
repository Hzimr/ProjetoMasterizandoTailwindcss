import { Logo } from './Logo'
import { Navigation } from './Navigation'
import { UsedSpaceWidget } from './UsedSpaceWidget'
import { Profile } from './Profile'
import { InputControl, InputPrefix, InputRoot } from '../Input'
import { Search } from 'lucide-react'
import { NavItemFooterList, NavItemList } from '../constants/data'

export function Sidebar() {
  return (
    <aside className="flex flex-col gap-6 border-r border-zinc-200 px-5 py-8">
      <Logo />

      <InputRoot>
        <InputPrefix>
          <Search className="h-5 w-5 text-zinc-500" />
        </InputPrefix>
        <InputControl placeholder="Search" />
      </InputRoot>
      <Navigation itemList={NavItemList} />
      <div className="mt-auto flex flex-col gap-6">
        <Navigation itemList={NavItemFooterList} />
      </div>
      <UsedSpaceWidget />
      <div className="h-px bg-zinc-200" />

      <Profile />
    </aside>
  )
}
