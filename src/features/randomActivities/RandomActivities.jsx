import React, { useState } from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { setActivitiesWithCatFacts } from '../activities/activitiySlice'

const FormStyled = styled.form`
  width: 300px;
  margin: 50px auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const Input = styled.input`
  all: unset;
  width: 80px;
  background: #fff;
  border-radius: 3px;
  text-align: center;
  padding: 5px 10px;
  box-shadow: 0 3px 18px 3px rgba(0, 0, 0, 0.1);
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

function RandomActivities () {
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
