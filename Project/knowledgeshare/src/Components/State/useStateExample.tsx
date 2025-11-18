import { ReactElement } from 'react'
import { Stack, Typography, Divider, Paper, Button } from '@mui/material'

// 1. How do you change the UI when the user interacts
// 2. The parts of the useState (array destructuring, initial value, can be more complex)
// 3. Use state setState triggers re-render (batching)
// 4. Pass parts around (you cant pass up)
// 5. setState call back function

export function UseStateExample(): ReactElement {
  return (
    <Stack spacing={4}>
      <Paper id="vanilla-counter" elevation={1}>
        <Stack spacing={2} sx={{ p: 2 }}>
          <Typography variant="h6" gutterBottom>
            Counter
          </Typography>
          <Typography variant="h4" data-role="count">
            0
          </Typography>
          <Stack direction="row" spacing={1}>
            <Button>-1</Button>
            <Button>+1</Button>
            <Button>Reset</Button>
          </Stack>
        </Stack>
      </Paper>

      <Divider />
    </Stack>
  )
}
