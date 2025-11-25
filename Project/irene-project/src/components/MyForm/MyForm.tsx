import { Button, TextField } from '@mui/material'
import { useState } from 'react'

export function MyForm() {
  const [text, setText] = useState('')
  return (
    <>
      <Button onClick={() => console.log(text)}>Button</Button>
      <TextField
        label="blablabla"
        value={text}
        onChange={(event) => setText(event.target.value)}
      ></TextField>
    </>
  )
}
