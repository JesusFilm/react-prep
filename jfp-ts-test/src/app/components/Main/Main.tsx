import { ReactElement } from 'react'
import { Title } from '../Title'
import { Form } from '../Form'
import { TaskCard } from '../TaskCard'
import { cardMediaClasses } from '@mui/material'
import { cardArray } from '@/app/libs/data'
import { v4 as uuidv4 } from 'uuid'

export function Main(): ReactElement {
  uuidv4() // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'

  return (
    <>
      <Title></Title>

      <Form></Form>

      {cardArray.map((x) => (
        <TaskCard
          name={x.name}
          completed={x.completed}
          key={uuidv4()}
        ></TaskCard>
      ))}
    </>
  )
}
