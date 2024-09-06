import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo } from '../redux/slice/todoSlice'

function Todo() {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()
  return (
    <div className='border border-2 my-3 p-2 container w-50'>
        <h5 className='mb-4 text-decoration-underline fw-bold'>Todo</h5>
        <ul className='bg-dark '>
        {todos && todos.map((item)=> (
            <li key={item.id} className='text-white d-flex justify-content-between align-items-center py-2'>{item.text}
            <button className='btn btn-danger mx-3' onClick={()=>dispatch(removeTodo(item.id))}>Delete</button>
            </li>
        ))}
        </ul>
    </div>
  )
}

export default Todo