import { TextField } from '@mui/material'
import { Button } from '@mui/material'
import { ReactElement } from 'react'
import React, { useState } from 'react'
import { Task, cardsData } from '@/app/libs/data'

export function Form(): ReactElement {
  const [name, setName] = useState('Task')
  const [cardArray, setCardArray] = useState([...cardsData])

  function changeName(newName: string) {
    setName(newName)
    //console.log(name)
  }

  function addTask(): void {
    setCardArray([...cardArray, { name, completed: false }])
    console.log(cardArray)
  }
  return (
    <>
      <TextField
        id="filled-basic"
        label="Filled"
        variant="filled"
        sx={{ ml: 8 }}
        value={name}
        onChange={() =>
          setCardArray([...cardArray, { name: name, completed: false }])
        }
        // onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
        //   changeName(event.target.value)
        // }}
      />
      <Button variant="contained" sx={{ ml: 12 }} onClick={addTask}>
        Button
      </Button>
    </>
  )
}