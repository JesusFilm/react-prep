import { ReactElement, useState } from 'react'
import { Title } from '../Title'
import { Form } from '../Form'
import { TaskCard } from '../TaskCard'
import { tasks } from '../../libs/data'
import { v4 as uuidv4 } from 'uuid'
import { Task } from '@/app/libs/data'

export function Main(): ReactElement {
  const [toDoItems, setToDoItems] = useState<Task[]>(tasks)
  console.log(toDoItems)

  function toggleTodo(key: string, completed: boolean) {
    setToDoItems((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === key) {
          return { ...todo, completed }
        }
        return todo
      })
    })
  }

  function deleteTodo(key: string) {
    setToDoItems((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== key)
    })
  }

  return (
    <>
      <Title />
      <Form setToDoItems={setToDoItems} />
      {/* <Form setToDoItems={(arr) => setToDoItems(arr)} /> */}
      {toDoItems.map((taskItem) => (
        <TaskCard
          task={taskItem}
          key={taskItem.id}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </>
  )
}

//function App(){
//   const [count, setCount] = useState(() => countInitial())
// }
//using the usestate as a function means that it only runs once instead of every single time

// Plan:
// make a setState that changes the value of the item. this causes an infinite loop rerendering whole component

//the function that handles the delete needs to be on main and then pass it to the taskcard : ondeletre
