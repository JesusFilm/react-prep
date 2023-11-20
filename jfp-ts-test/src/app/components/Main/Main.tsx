import { ReactElement } from 'react'
import { Title } from '../Title'
import { Form } from '../Form'
import { TaskCard } from '../TaskCard'
import { tasks } from '../../libs/data'

export function Main(): ReactElement {
  return (
    <>
      <Title />
      <Form />
      {tasks.map((taskItem) => (
        <TaskCard task={taskItem} />
      ))}
    </>
  )
}
