import React, { useState } from 'react'
import styled from 'styled-components'
import { v4 as uuidv4 } from 'uuid'
import { useDispatch } from 'react-redux'
import { addActivity } from './activitiySlice'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const FormStyled = styled.form`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100px;
  justify-content: space-between;
  width: 450px;

  @media screen and (min-width: 300px) and (max-width: 699px) {
    height: 150px;
    width: 300px;
  }
`
const InputGroup = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  @media screen and (min-width: 300px) and (max-width: 699px) {
    flex-direction: column;
    height: 75px;
  }
`
const Input = styled.input`
  all: unset;
  background: #fff;
  border-radius: 3px;
  padding: 5px 10px;
`
const Button = styled.button`
  all: unset;
  background: #1f363d;
  border-radius: 25px;
  color: #fff;
  cursor: pointer;
  font-size: 15px;
  padding: 10px;
  text-align: center;
  width: 150px;
`

const AddActivityForm = () => {
  const [data, setData] = useState({
    title: '',
    desc: ''
  })

  const { title, desc } = data
  const dispatch = useDispatch()

  const handleChange = ({ target }) => {
    const name = target.name
    const value = target.value

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
      <Button>Add activity</Button>
      <ToastContainer position='top-left' autoClose={3000} hideProgressBar />
    </FormStyled>
  )
}

export default AddActivityForm
