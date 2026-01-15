import { TimerModel } from '@/libs/data'
import { ReactElement } from 'react'
import { Button, Box } from '@mui/material'

interface TimerProps {
  model: TimerModel
  removeTimer: () => void
}

export function Timer({ model, removeTimer }: TimerProps): ReactElement {
  return (
    <Box
      sx={{
        border: 1,
        borderRadius: 5,
        m: 2,
        width: '25%',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          paddingLeft: 3,
          paddingRight: 3,
          paddingTop: 1,
          paddingBottom: 3,
        }}
      >
        <Box sx={{}}>{model.label}</Box>
        <Box sx={{}}>{model.isRunning.toString()}</Box>
      </Box>

      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 50,
          height: '100%',
          paddingBottom: 1.5,
        }}
      >
        {model.remainingSeconds}
      </Box>

      <Box sx={{ display: 'flex-inline', marginTop: 1 }}>
        <Button
          onClick={removeTimer}
          fullWidth
          sx={{
            color: 'red',
            borderRadius: 5,
            '&:hover': {
              backgroundColor: '#FFCCCB', // Darker color on hover
            },
          }}
        >
          {'\u2715'}
        </Button>
      </Box>
    </Box>
  )
}
