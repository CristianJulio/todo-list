import React, { useState } from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { setActivitiesWithCatFacts } from '../activities/activitiySlice'

const FormStyled = styled.form`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 50px auto;
  width: 300px;
`
const Input = styled.input`
  all: unset;
  background: #fff;
  border-radius: 3px;
  box-shadow: 0 3px 18px 3px rgba(0, 0, 0, 0.1);
  padding: 5px 10px;
  text-align: center;
  width: 80px;
`
const Button = styled.button`
  all: unset;
  background: #1f363d;
  border-radius: 4px;
  color: #fff;
  cursor: pointer;
  padding: 6px 15px;
  text-align: center;
  width: 150px;
`

const RandomActivities = () => {
  const [amount, setAmount] = useState('')

  const dispatch = useDispatch()

  const handleRandomClick = (e) => {
    e.preventDefault()
    dispatch(setActivitiesWithCatFacts(amount))
  }

  return (
    <FormStyled onSubmit={handleRandomClick}>
      <Input
        type='text'
        placeholder='Amount...'
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <Button>Get Random Facts</Button>
    </FormStyled>
  )
}

export default RandomActivities
