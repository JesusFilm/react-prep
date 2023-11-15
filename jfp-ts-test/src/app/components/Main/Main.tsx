import { ReactElement } from 'react'

import { Title } from '../Title'
import { Task, taskArr } from '../../libs/data'
import { Button, TextField } from '@mui/material'
import { Form } from '../Form'
import { TaskCard } from '../TaskCard'
import { TaskCardProps } from '../TaskCard'

import { v4 as uuidv4 } from 'uuid';
uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'

// const Task1: Task = {
//   name: 'TASK ONE',
//   completed: false,
// }

export function Main(): ReactElement {
  // const taskCard: TaskCardProps = {
  //   item: taskArr[0],
  // }

  return (
    <>
      <Title label={'To Do List'}></Title>
      {/* <Title label={'TODO List'}></Title> */}
      <Form></Form>
      {taskArr.map((x) => (
        <TaskCard item={x} key={uuidv4()}></TaskCard>

      ))}
    </>
  )
}
