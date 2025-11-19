import { ReactElement } from 'react'
import { Button, Container, Stack, TextField } from '@mui/material'

export function Form(): ReactElement {
  return (
    <div>
      <Container>
        <Stack py={3} m={40} gap={2}>
          <TextField
            sx={{ mb: 2 }}
            id="Max Time"
            label="Max time"
            variant="outlined"
          />
          <Button variant="contained">Start</Button>
          <Button variant="contained">Stop</Button>
          <Button variant="contained">Reset</Button>
        </Stack>
      </Container>
    </div>
  )
}
