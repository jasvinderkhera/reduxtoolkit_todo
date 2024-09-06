import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../redux/slice/todoSlice'

function AddTodo() {
    let [input, setInput] = useState("")
    const dispatch = useDispatch()
    const handleTodo = (e) =>{
        e.preventDefault()
        dispatch(addTodo(input))
        setInput("")
    }

  return (
    <div className='container w-50'>
        <form className='p-5 border border-1' onSubmit={handleTodo}>
        <input type="text" className="form-control mb-4" 
        value={input}
        onChange={(e)=> setInput(e.target.value)}/>

        <button className='btn btn-secondary'>Add Task</button>
        </form>
    </div>
  )
}

export default AddTodo