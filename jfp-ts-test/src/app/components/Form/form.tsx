import { ReactElement, useState } from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { tasks } from '../../libs/data'
import { v4 as uuidv4 } from 'uuid'

export function Form(): ReactElement {
  const [textfieldItem, setTextFieldItem] = useState('')

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    console.log('Form submitted with textfieldItem:', textfieldItem)
    setTextFieldItem('')
    return {}
  }

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
            required
            id="standard-required"
            label="Required"
            variant="standard"
            value={textfieldItem}
            onChange={(e) => setTextFieldItem(e.target.value)}
          />
          <br />
          <Button variant="outlined" onClick={(e) => handleSubmit(e)}>
            Submit
          </Button>
        </>
      </Box>
    </>
  )
}
