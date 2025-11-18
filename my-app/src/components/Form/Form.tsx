import { ReactElement } from 'react'
import { TextField, Button } from '@mui/material'

export function Form(): ReactElement {
  return (
    <>
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <Button>hi</Button>
    </>
  )
}
