import { Button, TextField } from '@mui/material'
import { ReactElement, useState } from 'react'

interface FormProps {
  addTask: (name: string) => void
}

export function Form(props: FormProps): ReactElement {
  const [textFieldValue, setTextFieldValue] = useState('')
  function handleTextFieldChange(
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) {
    setTextFieldValue(e.target.value)
  }

  function handleButtonClick() {
    props.addTask(textFieldValue)
    setTextFieldValue('')
  }

  return (
    <>
      <TextField value={textFieldValue} onChange={handleTextFieldChange}>
        Enter Task
      </TextField>
      <Button onClick={handleButtonClick}>Add</Button>
    </>
  )
}
