import { ReactElement } from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { useState } from 'react'

// const Form = () => {
//   const [toDoName, setName] = useState({
//     name: ''
//   })
// }

export function Form(): ReactElement {
  const [toDoName, setName] = useState('')

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
          <Typography variant="h4" component="div">
            New Task:
          </Typography>
          <TextField
            onChange={(e) => setName(e.target.value)}
            value={toDoName}
            name="name"
            id="name"
          />

          <Button variant="outlined">Submit</Button>
        </>
      </Box>
    </>
  )
}
