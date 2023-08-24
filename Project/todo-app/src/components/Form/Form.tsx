import { ReactElement, ChangeEvent, useState, useEffect } from 'react'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { v4 as uuidv4 } from 'uuid'
import { Task } from '../../libs/data'

interface Props {
  handleAdd: (task: Task) => void
}

export function Form({ handleAdd }: Props): ReactElement {
  const [name, setName] = useState('')

  function handleSubmit(): void {
    handleAdd({
      id: uuidv4(),
      name,
      completed: false,
    })
    setName(() => '')
  }

  return (
    <Stack direction="row" sx={{ width: '100%', pt: 4 }}>
      <TextField
        fullWidth
        value={name}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          setName(event?.target.value)
        }}
      />
      <Button sx={{ ml: 2 }} onClick={handleSubmit}>
        Add
      </Button>
    </Stack>
  )
}
