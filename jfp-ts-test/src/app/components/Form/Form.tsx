import { Button, Stack, TextField } from '@mui/material'
import { ReactElement } from 'react'

export function Form(): ReactElement {
  return (
    <Stack direction="row" gap={2} sx={{ pb: 2 }}>
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <Button variant="contained" size="large">
        Button
      </Button>
    </Stack>
  )
}
