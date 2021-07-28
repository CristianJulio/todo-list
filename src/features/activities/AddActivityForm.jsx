import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'
import { addActivity, updateActivity } from './activitiySlice'
import styled from 'styled-components'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const FormStyled = styled.form`
  // padding: 25px 0;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  width: 430px;
  height: 100px;
`

const InputGroup = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`

const Input = styled.input`
  all: unset;
  background: #fff;
  padding: 5px 10px;
  border-radius: 3px;
  // margin-right: 15px;
`

const Button = styled.button`
  all: unset;
  width: 150px;
  text-align: center;
  padding: 6px 15px;
  border-radius: 4px;
  cursor: pointer;
  background: #1f363d;
  color: #fff;
`

function AddActivityForm () {
  const [data, setData] = useState({
    title: '',
    desc: ''
  })
  const { title, desc } = data
  const dispatch = useDispatch()

  const handleChange = ({ target }) => {
    const value = target.value
    const name = target.name

    setData((data) => ({
      ...data,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!title || !desc) return toast.error('You must fill all the fields')
    if (desc.length > 200) return toast.error('fields must be less than 200 characters')

    const activityToAdd = {
      ...data,
      id: uuidv4(),
      completed: false
    }

    setData({
      title: '',
      desc: ''
    })

    dispatch(addActivity(activityToAdd))
  }

  const handleEditSubmit = (e) => {
    e.preventDefault()
    dispatch(updateActivity({ i }))
  }

  return (
    <FormStyled onSubmit={handleSubmit}>
      <InputGroup>
        <Input
          type='text'
          id='title'
          name='title'
          value={title}
          placeholder='Title'
          onChange={handleChange}
          autoFocus
        />
        <Input
          type='text'
          id='desc'
          name='desc'
          value={desc}
          placeholder='Description'
          onChange={handleChange}
        />
      </InputGroup>
      <Button id='button'>Add activity</Button>
      <ToastContainer position='top-left' autoClose={3000} hideProgressBar />
    </FormStyled>
  )
}

export default AddActivityForm
