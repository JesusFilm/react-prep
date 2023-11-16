import { ReactElement } from 'react'
import { Title } from '../Title'
import { Form } from '../Form'
import { TaskCard } from '../TaskCard'
import { cardMediaClasses } from '@mui/material'
import { cardsData } from '@/app/libs/data'
import { v4 as uuidv4 } from 'uuid'
import react, { useState } from 'react'

export function Main(): ReactElement {
  return (
    <>
      <Title />

      <Form></Form>

      {cardsData.map((card) => (
        <TaskCard
          name={card.name}
          completed={card.completed}
          key={uuidv4()}
        ></TaskCard>
      ))}
    </>
  )
}
