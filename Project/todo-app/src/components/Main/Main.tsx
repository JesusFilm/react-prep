import { ReactElement } from 'react'
import { v4 as uuidv4 } from 'uuid'
import Container from '@mui/material/Container'
import { Title } from '../Title'
import { Form } from '../Form'
import { TaskCard } from '../TaskCard'
import { taskArr } from '../../libs/data'

export function Main(): ReactElement {
  return (
    <Container maxWidth="sm">
      <Title label="Todo" />
      <Form />
      {taskArr.map((task) => (
        <TaskCard key={uuidv4()} task={task} />
      ))}
    </Container>
  )
}
