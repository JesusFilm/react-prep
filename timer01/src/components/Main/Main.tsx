'use client'
import { ReactElement, useState } from 'react'
import { Title } from '@/components/Title'
import { Form } from '@/components/Form'
import { Timer } from '@/components/Timer'
import { timers as defaultTimers } from '@/libs/data'
import { Container, Grid, Stack } from '@mui/material'

export function Main(): ReactElement {
  const [timers, setTimers] = useState(defaultTimers)

  return (
    <div>
      <Container>
        <Grid container spacing={2}>
          <Title label="Timers" />
          <Timer timers={timers} />
          <Form setTimers={setTimers} />
        </Grid>
      </Container>
    </div>
  )
}
