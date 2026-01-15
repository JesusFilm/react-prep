'use client'
import { ReactElement, useState, useEffect } from 'react'
import { Title } from '../Title'
import { Form } from '../Form'
import { TimerModel } from '@/libs/data'
import { Timer } from '../Timer'
import { v4 as uuidv4 } from 'uuid'
import { Box } from '@mui/material'

export function Main(): ReactElement {
  const [name, setName] = useState('')
  const [time, setTime] = useState(5)
  const [timers, setTimers] = useState<TimerModel[]>([])

  function addTimer(name: string, time: number) {
    setTimers((prevTimers) => [
      {
        id: uuidv4(),
        label: name,
        durationSeconds: time,
        remainingSeconds: time,
        isRunning: true,
      },
      ...prevTimers,
    ])

    setName('')
    setTime(5)
  }

  function handleNameChange(newName: string) {
    setName(newName)
  }

  function handleTimeChange(newTime: number) {
    setTime(newTime)
  }

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>

    const tick = () => {
      setTimers((prevTimers) =>
        prevTimers.map((timer) => {
          if (!timer.isRunning) {
            return timer
          }

          const nextRemaining = Math.max(0, timer.remainingSeconds - 1)
          if (nextRemaining === timer.remainingSeconds) {
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

  function removeTimer(id: string) {
    const updatedTimers = timers.filter((timer) => timer.id !== id)
    setTimers(updatedTimers)
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        p: 4,
      }}
    >
      <Box sx={{ paddingBottom: 5 }}>
        <Title />
      </Box>
      <Box sx={{ paddingBottom: 5 }}>
        <Form
          addTimer={addTimer}
          handleNameChange={handleNameChange}
          handleTimeChange={handleTimeChange}
          name={name}
          time={time}
        />
      </Box>
      {timers.map((timer) => (
        <Timer
          key={timer.id}
          model={timer}
          removeTimer={() => removeTimer(timer.id)}
        />
      ))}
    </Box>
  )
}
