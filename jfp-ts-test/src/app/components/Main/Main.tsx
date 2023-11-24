import { ReactElement, useState } from 'react'
import { Title } from '../Title'
import { Form } from '../Form'
import { TaskCard } from '../TaskCard'
import { tasks } from '../../libs/data'
import { v4 as uuidv4 } from 'uuid';

export function Main(): ReactElement {
  const [toDoItems, setToDoItems] = useState([])
  // value = {toDoItems}  this needs to go where the array is this 
  return (
    <>
      <Title />
      <Form />
      {tasks.map((taskItem) => (
        <TaskCard task={taskItem} key={taskItem.id} />
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





