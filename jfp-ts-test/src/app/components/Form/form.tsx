import { ReactElement } from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

export function Form(): ReactElement {
  return (
    <>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <>
          <Typography variant="h4" component="div">New Task:</Typography>
          <TextField
            required
            id="standard-required"
            label="Required"
            variant="standard"
          />
          <br/>
          <Button variant="outlined">Submit</Button>
          </>
      </Box>
    </>
  )
}
