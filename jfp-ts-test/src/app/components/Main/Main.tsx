import { ReactElement } from 'react'
import { Title } from '../Title'
import { Form } from '../Form'
import { TaskCard } from '../TaskCard'
import { tasks } from '../../libs/data'
// import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react'
import { toDoName } from '../Form/form'
import { Herr_Von_Muellerhoff } from 'next/font/google'

export function Main(): ReactElement {
  const [tasksArray, setTasksArray] = useState(tasks)

  // const updateCard = () => {
  //   setTasksArray({...tasksArray, newSetTasksArray})
  // }

  // const removeCard = () => {
  //   setArray(array.slice(0, array.length - 1));
  // };
  //i need to make the todoName go into the taskcard name.

  return (
    <>
      <Title label="Hello World" />
      <Form setTasksArray = {setTasksArray}/>

      {tasksArray.map((taskItem) => (
        <TaskCard task={taskItem} />
      ))}
    </>
  )
}

//new state of array of tasks - empty array? or a default value of static tasks in data
// t o add something use the setState to add the card to the list - lets you add and re-render
//call the setstate in the form

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
