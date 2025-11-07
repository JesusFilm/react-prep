import type { ReactElement } from "react"
interface TitleProps {
  label?: string
}

export function Title({ label }: TitleProps): ReactElement {
  return (
    <div>
      <h1>{label}</h1>
    </div>
  )
}
