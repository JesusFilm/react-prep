import { ReactElement } from 'react'
import { Title } from '../Title'
import { Form } from '../Form'
import { TaskCard } from '../TaskCard'
import { tasks } from '../../libs/data'
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react'

export function Main(): ReactElement {
  const [tasksArray, setTasksArray] = useState(tasks)

  return (
    <>
      <Title label="Hello World" />
      <Form setTasksArray={setTasksArray} />
      {/* <ul> */}
        {/* {tasksArray.map((taskItem) => (
          <TaskCard task={taskItem} />
        ))} */}
        {tasksArray.map(task => {
          return <>
            <label>
            {/* uuid={task.uuid} */}
              <input type="checkbox" checked={task.completed}></input>
              {task.name} 
            </label>
            <button className="btn-delete">Delete</button>
          </>
        })}
      {/* </ul> */}
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



//https://www.youtube.com/watch?v=Rh3tobg7hEo&ab_channel=WebDevSimplified
//24.58 timestamp