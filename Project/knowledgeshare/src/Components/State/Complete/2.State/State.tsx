import { ReactElement, useState } from 'react'
import { Stack, Typography, Divider, Paper, Button } from '@mui/material'

// 2. This is the correct way to use useState
export function State(): ReactElement {
  const [count, setCount] = useState(0)
  function increment() {
    setCount(count + 1)
  }
  function decrement() {
    setCount(count - 1)
  }
  function reset() {
    setCount(0)
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
