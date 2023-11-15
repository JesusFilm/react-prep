import { ReactElement } from 'react'
import { Title } from '../Title'
import { Form } from '../Form'
import { TaskCard } from '../TaskCard'
import { cardMediaClasses } from '@mui/material'
import { Task } from '@/app/libs/data'
import { array } from '@/app/libs/data'

export function Main(): ReactElement {
  return (
    <>
      <Title></Title>

      <Form></Form>

      <TaskCard name={array[0].name} completed={array[0].completed}></TaskCard>
    </>
  )
}
