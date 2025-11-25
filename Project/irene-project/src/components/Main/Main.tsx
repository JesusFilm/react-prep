'use client'

import { ReactElement, useState, useEffect } from 'react'
import { timers as initialTimers, TimerModel } from '@/libs/data'
import { v4 as uuidv4 } from 'uuid'
import { Container, Box, Button } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import Title from '../Title'
import Form from '../Form'
import Timer from '../Timer'
import { MyForm } from '../MyForm'
import { DeleteAllButton } from '../DeleteAllButton'

export default function Main(): ReactElement {
  const [timers, setTimers] = useState<TimerModel[]>(initialTimers)
  const [dialogOpen, setDialogOpen] = useState(false)

  function checkIfFinished(timers: TimerModel[]): boolean {
    const allFinished = timers.every((timer) => {
      return timer.remainingSeconds == 0
    })
    console.log('allFinished', allFinished)
    return allFinished
  }

  useEffect(() => {
    if (checkIfFinished(timers)) {
      alert('FINISHED')
    }
  }, [timers])

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>

    const tick = () => {
      setTimers((prevTimers) =>
        prevTimers.map((timer) => {
          if (!timer.isRunning) {
            // Do nothing if timer is done
            return timer
          }

          const nextRemaining = Math.max(0, timer.remainingSeconds - 1)
          if (nextRemaining === timer.remainingSeconds) {
            // Do nothing if remaining seconds is the same
            return timer
          }

          return {
            ...timer,
            remainingSeconds: nextRemaining,
            isRunning: nextRemaining > 0,
          }
        })
      )

      timeoutId = setTimeout(tick, 1000)
    }

    timeoutId = setTimeout(tick, 1000)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [])

  const handleAddTimer = (label: string, durationSeconds: number) => {
    const newTimer: TimerModel = {
      id: uuidv4(),
      label,
      durationSeconds,
      remainingSeconds: durationSeconds,
      isRunning: true,
    }
    setTimers((prevTimers) => [...prevTimers, newTimer])
  }

  function handleDeleteTimer(id: string) {
    setTimers((prevTimers) => prevTimers.filter((timer) => timer.id !== id))
  }

  function resetAllTimers() {
    setTimers([])
  }

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background:
          'linear-gradient(135deg, #fff5f8 0%, #ffeef5 50%, #ffffff 100%)',
        py: 6,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Container
        maxWidth="md"
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Title label="My Timer Dashboard" />
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            onClick={() => setDialogOpen(true)}
            size="large"
            sx={{
              mb: 4,
              py: 1.5,
              px: 4,
              background: 'linear-gradient(135deg, #ff91d4 0%, #ffb3d9 100%)',
              color: '#fff',
              fontWeight: 600,
              boxShadow: '0 4px 12px rgba(255, 182, 193, 0.4)',
              border: '2px solid #ffb3d9',
              '&:hover': {
                background: 'linear-gradient(135deg, #ffb3d9 0%, #ff91d4 100%)',
                boxShadow: '0 6px 16px rgba(255, 182, 193, 0.5)',
                transform: 'translateY(-2px)',
              },
              transition: 'all 0.3s ease',
            }}
          >
            Add New Timer
          </Button>
          {/** 1. Create a button that deletes all timers*/}
          <DeleteAllButton onClick={resetAllTimers} />
          {/** 2. When all timers are finished/complete, show an alert saying ALL DONE */}
          <Form
            open={dialogOpen}
            onClose={() => setDialogOpen(false)}
            onAddTimer={handleAddTimer}
          />
          <Box
            sx={{
              mt: 4,
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 2,
            }}
          >
            {timers.map((timer) => (
              <Timer key={timer.id} {...timer} onDelete={handleDeleteTimer} />
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
