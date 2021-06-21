import React, { useState, useRef, useEffect } from 'react';
import TodoList from './TodoList'
import uuidv4 from 'uuid/v4'

function App() {
  const [todos, setTodos] = useState([])
  const todoNameRef = useRef()
  useEffect(()=>{
    localStorage.setItem([])
  })

  function handleAddTodo(e) {
    const name = todoNameRef.currant.value
    if (name === '') return
      setTodos(prevTodos => {
        return [...prevTodos, {
          id: uuidv4(), name: name, complete: false
        }]
      })
  }

  return (
    <>     
    <TodoList todos={todos}/>
    <input ref={todoNameRef} type='text' />
    <button onClick={handleAddTodo}>Add Todo</button>
    <button>Clear Complete Todos</button>
    <div>0 left to do</div>
    </>
  )
}

export default App;
