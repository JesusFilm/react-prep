import { TaskCard } from '.'
import { getByText, render, fireEvent, waitFor } from '@testing-library/react'
import { Form } from './../Form'
import { Task, tasksData } from '../../libs/data'
import '@testing-library/jest-dom'
import { Main } from '../Main'
import { v4 as uuidv4 } from 'uuid'

const dummyTask: Task = {
  name: 'Dummy Task',
  completed: false,
  taskId: uuidv4(),
}

const handleAdd = jest.fn()

describe('TaskCard Component', () => {
  it('should NOT render any task cards before submitting', () => {
    expect(tasksData).toEqual([])
    expect(tasksData).not.toEqual([dummyTask])
  })

  const deleteTask = jest.fn()
  const { getByText, getByRole } = render(
    <TaskCard item={dummyTask} deleteTask={deleteTask} />
  )

  it('should render dummy task card title', () => {
    const { getByText } = render(
      <TaskCard item={dummyTask} deleteTask={deleteTask} />
    )
    const taskName = getByText('Dummy Task')
    expect(taskName).toBeInTheDocument()
  })

  it('should render completion status', () => {
    const { getByText } = render(
      <TaskCard item={dummyTask} deleteTask={deleteTask} />
    )
    const taskStatusString = getByText('Not Completed')
    expect(taskStatusString).toBeInTheDocument()
  })

  it('should render the switch', () => {
    const { getByRole } = render(
      <TaskCard item={dummyTask} deleteTask={deleteTask} />
    )
    expect(getByRole('checkbox')).toBeInTheDocument()
  })

  it('should render the delete button', () => {
    const { getByRole } = render(
      <TaskCard item={dummyTask} deleteTask={deleteTask} />
    )
    expect(getByRole('button')).toBeInTheDocument()
  })
})

//   it('renders a task card with "No name" when task is submitted without name', async () => {
//     const handleAdd = jest.fn()
//     const { getByText } = render(<Form handleAdd={handleAdd} />)
//     const submitButton = getByText('Submit')
//     fireEvent.click(submitButton)
//     const cardText = getByText('No Name')
//     expect(cardText).toBeInTheDocument()
//   })
