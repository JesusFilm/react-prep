'use client'

import { ReactElement, useState, useEffect } from 'react'
import { Title } from '../Title'
import { Form } from '../Form'
import { TimerModel } from '@/libs/data'
import { Timer } from '../Timer'
import { v4 as uuidv4 } from 'uuid'

export function Main(): ReactElement {
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
