'use client'

import { tasks } from '../../libs/data'
import { Form } from '../Form'
import { TaskCard } from '../TaskCard'

import { v4 } from 'uuid'

export function Main() {
  return (
    <>
      <Form />
      {tasks.map((currentTask) => (
        <TaskCard key={v4()} task={currentTask} />
      ))}
    </>
  )
}
