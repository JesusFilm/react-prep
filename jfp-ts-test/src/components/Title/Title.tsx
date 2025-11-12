import Typography from "@mui/material/Typography"
import type { ReactElement } from "react"
interface TitleProps {
  label?: string
}

export function Title({ label }: TitleProps): ReactElement {
  return (
    <div>
      <Typography variant="h2">{label}</Typography>
    </div>
  )
}
