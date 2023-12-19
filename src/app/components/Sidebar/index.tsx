'use client'

import { Logo } from './Logo'
import { Navigation } from './Navigation'
import { UsedSpaceWidget } from './UsedSpaceWidget'
import { Profile } from './Profile'
import { InputControl, InputPrefix, InputRoot } from '../Input'
import { Menu, Search } from 'lucide-react'
import { NavItemFooterList, NavItemList } from '../constants/data'
import * as Collpasible from '@radix-ui/react-collapsible'
import { Button } from '../Button'

export function Sidebar() {
  return (
    <Collpasible.Root className="fixed left-0 right-0 top-0 z-20 flex flex-col gap-6 border-b border-zinc-200 bg-white p-4 data-[state=open]:bottom-0 lg:right-auto  lg:w-80 lg:border-r lg:px-5 lg:py-8 lg:data-[state=closed]:bottom-0">
      <div className="flex items-center justify-between">
        <Logo />
        <Collpasible.Trigger asChild className="lg:hidden">
          <Button variant="ghost">
            <Menu className="h-6 w-6" />
          </Button>
        </Collpasible.Trigger>
      </div>

      <Collpasible.Content
        forceMount
        className="flex flex-1 flex-col gap-6 data-[state=closed]:hidden lg:data-[state=closed]:flex"
      >
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
      </Collpasible.Content>
    </Collpasible.Root>
  )
}
