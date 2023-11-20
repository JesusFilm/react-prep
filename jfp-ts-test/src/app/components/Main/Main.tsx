import { ReactElement } from 'react'
import { Title } from '../Title'
import { Form } from '../Form'
import { TaskCard } from '../TaskCard'
import { tasks } from '../../libs/data'
// import { v4 as uuidv4 } from 'uuid';
import {useState} from 'react'

export function Main(): ReactElement {
  return (
    <>
      <Title />
      <Form />
      {tasks.map((taskItem) => (
        <TaskCard task={taskItem} />
      ))}
    </>
  )
}




//only use hooks in function components , not class , the use state needs to execute in the same order.  
// const [count, setCount] = useState(4) 
//1st thing count is the current state, 2nd thing setCount is the function that allows you to change the current state 
// call the setCount 
// function decrementCount (){
//   setCount(prevCount => prevCount - 1)
// }

//call a return on the function: 
// return ( <button onClick ={decrement Count}></button>
// <span>{count}</span> )