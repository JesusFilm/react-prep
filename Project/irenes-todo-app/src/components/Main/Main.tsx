'use client'

import { FormControlLabel, Switch } from '@mui/material'
import { tasks } from '../../libs/data'
import { Form } from '../Form'
import { TaskCard } from '../TaskCard'
import { useState } from 'react'
import { v4 } from 'uuid'

export function Main() {
  const [checkedstate, setCheckedstate] = useState(false)
  console.log(checkedstate)

  return (
    <>
      <Form />
      {tasks.map((currentTask) => (
        <TaskCard key={v4()} task={currentTask} />
      ))}
      <FormControlLabel
        control={
          <Switch
            onChange={() => setCheckedstate((prev) => !prev)}
            checked={checkedstate}
          />
        }
        label="Switch"
      />
    </>
  )
}
