import { Logo } from './Logo'
import { Search } from 'lucide-react'
import { MainNavigation } from './MainNavigation'
import { FooterNavigation } from './FooterNavigation'
import { UsedSpaceWidget } from './UsedSpaceWidget'

export function Sidebar() {
  return (
    <aside className="flex flex-col gap-6 border-r border-zinc-200 px-5 py-8">
      <Logo />
      <div className="mx-1 flex w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm">
        <Search className="h-5 w-5 text-zinc-500" />
        <input
          className="flex-1 border-0 bg-transparent p-0 text-zinc-900 placeholder-zinc-600"
          placeholder="Search"
        />
      </div>
      <MainNavigation />
      <div className="mt-auto flex flex-col gap-6">
        <FooterNavigation />
      </div>
      <UsedSpaceWidget />
    </aside>
  )
}
