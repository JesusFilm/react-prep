import { ReactElement } from 'react'
import { Title } from '../Title'
import { Form } from '../Form'
import { TaskCard } from '../TaskCard'
import { cardMediaClasses } from '@mui/material'
import { cardsData } from '@/app/libs/data'
import { v4 as uuidv4 } from 'uuid'
import react, { useState } from 'react'
import { Task } from '@/app/libs/data'

export function Main(): ReactElement {
  const [cardArray, setCardArray] = useState([...cardsData])
  const [name, setName] = useState('Task')

  function deleteTodo(key: string) {
    setCardArray(cardArray.filter((cardArray) => cardArray.key !== key))
    console.log(key, cardArray.key)
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

  return (
    <>
      <Title />

      <Form name={name} onChangeName={changeName} onAddTask={handleAddTask} />

      {cardArray.map((cardArray: Task) => (
        <TaskCard
          name={cardArray.name}
          completed={cardArray.completed}
          key={uuidv4()}
          onDeleteTodo={deleteTodo}
        ></TaskCard>
      ))}
    </>
  )
}
