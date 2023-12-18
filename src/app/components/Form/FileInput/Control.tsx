import { ComponentProps } from 'react'

export type ControlProps = ComponentProps<'input'>

export function Control(props: ControlProps) {
  return <input className="sr-only" type="file" id="photo" {...props} />
}
