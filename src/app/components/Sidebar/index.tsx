import { Logo } from './Logo'
import { Navigation } from './Navigation'
import { UsedSpaceWidget } from './UsedSpaceWidget'
import { Profile } from './Profile'
import { InputControl, InputPrefix, InputRoot } from '../Input'
import { Search } from 'lucide-react'
import { NavItemFooterList, NavItemList } from '../constants/data'

export function Sidebar() {
  return (
    <aside className="fixed bottom-0 left-0 right-0 top-0 z-20 flex flex-col gap-6 border-b border-zinc-200 bg-white p-4 lg:relative lg:right-auto lg:w-80 lg:border-r lg:px-5 lg:py-8">
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

        <UsedSpaceWidget />
        <div className="h-px bg-zinc-200" />

        <Profile />
      </div>
    </aside>
  )
}
