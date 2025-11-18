import { ReactElement } from 'react'
import { Title } from '../Title'
import { Form } from '../Form'
import { timers } from '@/libs/data'
import { Timer } from '../Timer'

export function Main(): ReactElement {
  for (let index = 0; index < timers.length; index++) {
    const element = timers[index]
    Timer(element)
  }
  return (
    <>
      {Title()}
      <Form />
    </>
  )
}
