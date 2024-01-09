//imports
import { Title } from '../Title/Title'
import { Form } from '../Form/Form'
import Box from '@mui/material/Box'
import { TaskCard } from '../TaskCard'
import Task, { tasks } from '../../libs/data'

export function Main() {
  return (
    <Box
      alignItems="center"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
      }}
    >
      <Title label="Tasks" />
      <Form />
      <br />
      {tasks.map((task: Task) => (
        <TaskCard
          key={task.id}
          id={task.id}
          name={task.name}
          completed={task.completed}
        ></TaskCard>
      ))}
    </Box>
  )
}
