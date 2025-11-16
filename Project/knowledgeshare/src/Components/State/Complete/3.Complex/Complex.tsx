import { ReactElement, useState } from 'react'
import { Stack, Paper } from '@mui/material'
import { Counter } from './Counter'
import { ButtonList } from './ButtonList'

// 3. Use state can be more complex
export function Complex(): ReactElement {
  const [count, setCount] = useState(0)
  return (
    <Stack spacing={4}>
      <Paper id="vanilla-counter" elevation={1}>
        <Stack spacing={2} sx={{ p: 2 }}>
          <Counter count={count} />
          <ButtonList setCount={setCount} />
        </Stack>
      </Paper>
    </Stack>
  )
}
