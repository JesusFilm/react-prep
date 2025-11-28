import { Typography } from '@mui/material'

export function Title(label?: string) {
  return (
    <>
      <Typography variant="h1" component="h2">
        {label ?? 'Default Label'}
      </Typography>
    </>
  )
}
