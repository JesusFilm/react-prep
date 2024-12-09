'use client'

export function TodoNote(props) {
  console.log('TodoNote with props: ', props)
  let completedState = props.completed ? 'completed' : ''

  // Create todo note
  return (
    <div className="Todo">
      <p
        onClick={() => props.toggleComplete(props.id)}
        className={completedState}
      >
        {props.task}
      </p>
      <button
        style={{
          aspectRatio: '1 / 1',
          background: 'none',
          border: 'none',
        }}
        onClick={() => props.editTodo(props.id)}
      >
        📝
      </button>
      <button
        style={{
          aspectRatio: '1 / 1',
          background: 'none',
          border: 'none',
        }}
        onClick={() => props.deleteTodo(props.id)}
      >
        🗑️
      </button>
    </div>
  )
}
