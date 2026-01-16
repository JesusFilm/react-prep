import { TimerModel } from '@/libs/data'
import { ReactElement, useState, useEffect } from 'react'
import { Button, Box, CircularProgress } from '@mui/material'
import axios from 'axios'

interface TimerProps {
  model: TimerModel
  removeTimer: () => void
}

export function Timer({ model, removeTimer }: TimerProps): ReactElement {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [url, setUrl] = useState()

  console.log(url)

  useEffect(() => {
    if (model.isRunning) return
    setLoading(true)
    axios
      .get(
        'https://cataas.com/cat/cute/says/hi?position=center&font=Impact&fontSize=50&fontColor=%23fff&fontBackground=none'
      )
      .then((response) => {
        console.log('response.data', response.data.url)
        setUrl(response.data.url)
        setLoading(false)
      })
      .catch((err) => {
        setError(err.message)
        setLoading(false)
      })
  }, [!model.isRunning])

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
        <Box sx={{}}>{model.isRunning}</Box>
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
        {loading ? <CircularProgress /> : url && <img src={url} alt="" />}
        {!url && model.remainingSeconds}
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
