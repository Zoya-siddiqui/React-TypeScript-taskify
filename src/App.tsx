import { useEffect, useState } from 'react'
import './App.css'
import InputFeild from './components/InputFeild'
import TodoList from './components/TodoList'




interface Todo {
  id: number
  todo: string
  isDone: boolean
}

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>('')
  const [todos, setTodos] = useState<Todo[]>(() => {
    const stored = localStorage.getItem('todos');
    return stored ? JSON.parse(stored) : [];
  });
  
  const [editId, setEditId] = useState<number | null>(null)

  useEffect(() => {
    const storedTodos = localStorage.getItem('todos')
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const handleAdd = (e: React.SyntheticEvent) => {
    e.preventDefault()

    if (!todo.trim()) return

    if (editId !== null) {
      setTodos((prev) =>
        prev.map((t) => (t.id === editId ? { ...t, todo } : t))
      )
      setEditId(null)
    } else {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }])
    }

    setTodo('')
  }

  const handleEdit = (id: number) => {
    const found = todos.find((t) => t.id === id)
    if (found) {
      setTodo(found.todo)
      setEditId(id)
    }
  }

  const handleDelete = (id: number) => {
    setTodos((prev) => prev.filter((t) => t.id !== id))
  }

  const handleToggleDone = (id: number) => {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, isDone: !t.isDone } : t))
    )
  }

  return (
    <div className='bg-blue-400 flex flex-col items-center h-screen overflow-y-auto'>
      <h1 className='text-center py-10 text-white font-bold text-5xl'>Taskify</h1>
      <InputFeild todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList
        todos={todos}
        setTodo={setTodo}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
        handleToggleDone={handleToggleDone}
      />
    </div>
  )
}

export default App
