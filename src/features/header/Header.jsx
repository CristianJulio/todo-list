import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import AddActivityForm from '../activities/AddActivityForm'
import { selectIsCreating, selectIsEditing } from './headerSlice'

const HeaderStyled = styled.header`
  // background-image: linear-gradient(to bottom right, #40798C, #1F363D); 
  background-image: radial-gradient(circle, #40798C, #1F363D); 
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  // flex-wrap: wrap;  
  flex-direction: column;
`

const TitleHeader = styled.h1`
  font-size: 52px;
  color: #fff;
  width: 100%;
  text-align: center;
  margin-bottom: 25px;
`

function Header() {
  const isEditing = useSelector(selectIsEditing)
  const isCreating = useSelector(selectIsCreating)
  
  return (
    <HeaderStyled>
      <TitleHeader>Pending Activities</TitleHeader>
      <AddActivityForm />
    </HeaderStyled>
  )
}

export default Header
