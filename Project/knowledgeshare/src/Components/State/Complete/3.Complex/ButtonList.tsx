import { Button, Stack } from '@mui/material'
import { Dispatch, ReactElement, SetStateAction } from 'react'

interface ButtonListProps {
  setCount: Dispatch<SetStateAction<number>>
}

export function ButtonList({ setCount }: ButtonListProps): ReactElement {
  function decrement() {
    setCount((prevState) => prevState - 1)
  }
  function increment() {
    setCount((prevState) => prevState + 1)
  }
  function reset() {
    setCount(0)
  }
  return (
    <Stack direction="row" spacing={1}>
      <Button onClick={decrement}>-1</Button>
      <Button onClick={increment}>+1</Button>
      <Button onClick={reset}>Reset</Button>
    </Stack>
  )
}
