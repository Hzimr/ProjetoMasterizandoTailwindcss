import { LogOut } from 'lucide-react'

export function Profile() {
  return (
    <div className="grid-cols-profile grid items-center gap-3">
      <img
        src="https://github.com/hzimr.png"
        className="h-10 w-10 rounded-full"
        alt=""
      />
      <div className="flex flex-col truncate">
        <span className="text-sm font-semibold text-zinc-700">
          Hítalo Rodrigues
        </span>
        <span className="truncate text-sm text-zinc-500">
          hitalodev@gmail.com
        </span>
      </div>
      <button type="button" className="hover:bg-zing-50 ml-auto rounded-md p-2">
        <LogOut className="h-5 w-5 text-zinc-500" />
      </button>
    </div>
  )
}
