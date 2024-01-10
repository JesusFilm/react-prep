//imports
import { Title } from '../Title/Title'
import { Form } from '../Form/Form'
import { TaskList } from '../TaskList'
import Box from '@mui/material/Box'

export function Main() {
  return (
    <Box
      alignItems="center"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Title label="Tasks" />

      <TaskList />
    </Box>
  )
}
