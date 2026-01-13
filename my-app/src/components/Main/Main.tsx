'use client'

import { ReactElement, useState, useEffect } from 'react'
import { Title } from '../Title'
import { Form } from '../Form'
import { TimerModel } from '@/libs/data'
import { Timer } from '../Timer'
import { v4 as uuidv4 } from 'uuid'

export function Main(): ReactElement {
  // Adding new timers

  const [name, setName] = useState('')
  const [time, setTime] = useState(5)
  const [timers, setTimers] = useState<TimerModel[]>([])

  function addTimer(name: string, time: number) {
    setTimers((prevTimers) => [
      ...prevTimers,
      {
        id: '123',
        label: name,
        durationSeconds: time,
        remainingSeconds: time,
        isRunning: true,
      },
    ])
  }

  function handleNameChange(newName: string) {
    setName(newName)
  }

  function handleTimeChange(newTime: number) {
    setTime(newTime)
  }

  // Counting down timers

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
  }, [timers])

  return (
    <>
      <Title />
      {timers.map((timer) => (
        <Timer key={uuidv4()} model={timer} />
      ))}
      <Form
        addTimer={addTimer}
        handleNameChange={handleNameChange}
        handleTimeChange={handleTimeChange}
        name={name}
        time={time}
      />
    </>
  )
}
