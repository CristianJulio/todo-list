import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'
import { addActivity } from './activitiySlice'

function AddActivityForm() {
  const [data, setData] = useState({
    title: '',
    desc: ''
  })
  const { title, desc } = data
  const dispatch = useDispatch()

  const handleChange = ({ target }) => {
    const value = target.value
    const name = target.name
    
    setData(data => ({
      ...data,
      [name]: value
    }))
  }

  const handleSubmit = e => {
    e.preventDefault()
    const activityToAdd = {
      ...data,
      id: uuidv4(),
      completed: false
    }

    dispatch(addActivity(activityToAdd))
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="">title</label>
      <input type="text" name="title" value={title} onChange={handleChange} />

      <label htmlFor="">Description</label>
      <input type="text" name="desc" value={desc} onChange={handleChange} />

      <button>Add activity</button>
    </form>
  )
}

export default AddActivityForm
