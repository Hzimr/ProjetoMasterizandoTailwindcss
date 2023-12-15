import { Logo } from './Logo'
import { MainNavigation } from './MainNavigation'
import { FooterNavigation } from './FooterNavigation'
import { UsedSpaceWidget } from './UsedSpaceWidget'
import { Profile } from './Profile'
import { InputControl, InputPrefix, InputRoot } from './Input'
import { Search } from 'lucide-react'

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
      <MainNavigation />
      <div className="mt-auto flex flex-col gap-6">
        <FooterNavigation />
      </div>
      <UsedSpaceWidget />
      <div className="h-px bg-zinc-200" />

      <Profile />
    </aside>
  )
}
