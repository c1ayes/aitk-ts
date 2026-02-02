import { useEffect, useState } from 'react'
import './App.css'

interface TaskInterface {
  text: string;
  id: number;
  completed: boolean;
}

function App() {
  const [task, setTask] = useState<string>('');
  const [tasks, setTasks] = useState<TaskInterface[]>(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : []
  });
  const [filter, setFilter] = useState<'active'|'all'|'completed'>("all");
  const [editing, setEditing] = useState<number | null>(null);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks])

  const AddTodo = (text:string): void => {
    setTasks(prev => ([...prev, {id: Date.now(), text: text, completed:false}]));
    setTask('');
  }

  const UpdateTodo = (id: number, new_text: string): void => {
    setTasks(prev => (
      prev.map(task => (
        task.id === id ? {...task, text:new_text}: task
      ))
    ))
  }

  const DeleteTodo = (id: number): void => {
    setTasks(prev => (
      prev.filter(task => (
        task.id !== id
      ))
    ))
  }

  const Check = (id: number): void => {
    setTasks(prev => (prev.map(task => (
      task.id === id ? {...task, completed: !task.completed} : task
    ))))
  }


  //компонент Button с типизированными props
  const Btn: React.FC<{placeholder:string}> = ({placeholder}) => {
    return (
      <button type='submit'>{placeholder}</button>
    )
  }

  return (
    <div>
      <form id='add' onSubmit={(e) => {AddTodo(task); e.preventDefault()}}>
        <input type="text" value={task} onChange={(e) => (setTask(e.target.value))} required/>
        <Btn placeholder='Сохранить'/>
      </form>
      <select value={filter} onChange={(e) => (setFilter(e.target.value as 'all'|'active'|'completed'))}>
        <option value="all">Все</option>
        <option value="active">Активные</option>
        <option value="completed">Выполненные</option>
      </select>
      {(tasks.filter(task => (
        filter === "all" ? true : (filter === "active" ? !task.completed : task.completed)
        )
      )).map(
          task => (editing === task.id ? (<div><input type="text" value={task.text} onChange={(e) => (UpdateTodo(task.id, e.target.value))} onBlur={() => (setEditing(null))}/></div>) :
            (
            <div key={task.id}>{task.text} <button onClick={() => DeleteTodo(task.id)}>Удалить</button> <button onClick={() => (setEditing(task.id))}>Изменить</button> <input type="checkbox" checked={task.completed} onChange={() => (
              Check(task.id)
            )}/></div>)
          ))}
    </div>
  )
}

export default App
