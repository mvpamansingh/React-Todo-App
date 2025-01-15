import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'

function App() {
  const [count, setCount] = useState(0)
  const [todoss, setTodos] = useState([]);

useEffect(()=>{

  setInterval(()=>{
    fetch("http://localhost:8000/getAllTodos").then(async function (res){
  const recevedjson = await res.json();
  setTodos(recevedjson.todolist)

})
  },4000)

}, [])





  return (
    <div>
        <CreateTodo></CreateTodo>
        <Todos todos = {todoss}></Todos>
    </div>
  )
}

export default App


/**
 * 
 *                     Working 
 * 
--->Initial Render:
When your app first loads, the useEffect runs once (because of the empty [] dependency array)
It sets up an interval timer

-->The Interval Timer:
Every 4 seconds (4000 milliseconds), it will fetch th data from the server
 */