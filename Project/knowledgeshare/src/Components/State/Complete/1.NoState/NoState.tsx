import { ReactElement } from 'react'
import { Stack, Typography, Divider, Paper, Button } from '@mui/material'

// 1. You might think this would work, but it doesn't
export function NoState(): ReactElement {
  let count = 0
  function increment() {
    count++
    console.log(count)
  }
  function decrement() {
    count--
    console.log(count)
  }
  function reset() {
    count = 0
    console.log(count)
  }

  return (
    <Stack spacing={4}>
      <Paper id="vanilla-counter" elevation={1}>
        <Stack spacing={2} sx={{ p: 2 }}>
          <Typography variant="h6" gutterBottom>
            Counter
          </Typography>
          <Typography variant="h4" data-role="count">
            {count}
          </Typography>
          <Stack direction="row" spacing={1}>
            <Button onClick={decrement}>-1</Button>
            <Button onClick={increment}>+1</Button>
            <Button onClick={reset}>Reset</Button>
          </Stack>
        </Stack>
      </Paper>

      <Divider />
    </Stack>
  )
}
