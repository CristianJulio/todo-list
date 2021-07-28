import React from 'react'
import styled from 'styled-components'
import AddActivityForm from '../activities/AddActivityForm'

const HeaderStyled = styled.header`
  background-image: linear-gradient(to bottom right, #FFC857, #E9724C); 
  // background-image: radial-gradient(circle, #FFC857, #E9724C);
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

function Header () {
  return (
    <HeaderStyled>
      <TitleHeader>Pending Activities</TitleHeader>
      <AddActivityForm />
    </HeaderStyled>
  )
}

export default Header
