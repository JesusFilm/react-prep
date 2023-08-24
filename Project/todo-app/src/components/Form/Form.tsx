import { ReactElement } from 'react'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

export function Form(): ReactElement {
  return (
    <Stack direction="row" sx={{ width: '100%', pt: 4 }}>
      <TextField fullWidth />
      <Button sx={{ ml: 2 }}>Add</Button>
    </Stack>
  )
}
