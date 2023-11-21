import { ReactElement } from 'react'
import { Title } from '../Title'
import { Form } from '../Form'
import { TaskCard } from '../TaskCard'
import { cardContentClasses, cardMediaClasses } from '@mui/material'
import { cardsData } from '@/app/libs/data'
import { v4 as uuidv4 } from 'uuid'
import react, { useState } from 'react'
import { Task } from '@/app/libs/data'

export function Main(): ReactElement {
  const [cardArray, setCardArray] = useState([...cardsData])
  const [name, setName] = useState('Task')

  function deleteTodo(key: string) {
    setCardArray((cardArray) =>
      cardArray.filter((cardItem) => cardItem.key !== key)
    )
  }

  function changeName(newName: string) {
    setName(newName)
    //console.log(name)
  }

  function handleAddTask(newTask: Task) {
    console.log('Before adding task:', cardArray)
    setCardArray([...cardArray, newTask])
    console.log('After adding task:', cardArray)
    setName('')
  }

  function handleUpdate(id: string, completed: boolean) {
    setCardArray((cardArray) =>
      cardArray.map((cardItem) =>
        cardItem.key === id ? { ...cardItem, completed } : cardItem
      )
    )
    console.log(cardArray)
  }

  return (
    <>
      <Title />

      <Form name={name} onChangeName={changeName} onAddTask={handleAddTask} />

      {cardArray.map(({ name, completed, key }) => (
        <TaskCard
          id={key}
          key={key}
          name={name}
          completed={completed}
          onDeleteTodo={deleteTodo}
          handleChange={handleUpdate}
        ></TaskCard>
      ))}
    </>
  )
}
