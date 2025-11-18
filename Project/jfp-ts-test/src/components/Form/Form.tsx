import { ReactElement } from 'react'
import { Box, TextField } from '@mui/material/'
import Button from '@mui/material/Button'

export function Form(): ReactElement {
  return (
    <div>
      <Box sx={{ display: 'flex', flexDirection: 'row' }}>
        <TextField id="title" label="Title" />
        <TextField id="hours" label="Hours" />
        <TextField id="seconds" label="Seconds" />
        <Button>Add Timer</Button>
      </Box>
    </div>
  )
}
