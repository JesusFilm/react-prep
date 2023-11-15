import { TextField } from '@mui/material'
import { Button } from '@mui/material'
import { ReactElement } from 'react'

export function Form(): ReactElement {
  return (
    <>
      <TextField
        id="filled-basic"
        label="Filled"
        variant="filled"
        sx={{ ml: 8 }}
      />
      <Button variant="contained" sx={{ ml: 12 }}>
        Button
      </Button>
    </>
  )
}
