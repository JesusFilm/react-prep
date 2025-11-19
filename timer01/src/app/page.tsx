import { Main } from '@/components/Main'
import { Title } from '@/components/Title'
import { Form } from '@/components/Form'
import { Timer } from '@/components/Timer'
import { timers } from '@/libs/data'
import { Container, Grid, Stack } from '@mui/material'

export default function Home() {
  return (
    <div>
      <Container>
        <Grid container spacing={2}>
          <Main />
          <Title label="Timers" />
          <Timer timers={timers[0]} />
          <Form />
        </Grid>
      </Container>
    </div>
  )
}
