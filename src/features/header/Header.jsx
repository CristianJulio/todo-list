import React from 'react'
import styled from 'styled-components'
import AddActivityForm from '../activities/AddActivityForm'

const HeaderStyled = styled.header`
  align-items: center;
  background-image: linear-gradient(to bottom right, #FFC857, #E9724C); 
  display: flex;
  flex-direction: column;
  height: 300px;
  justify-content: center;
`
const TitleHeader = styled.h1`
  color: #fff;
  font-size: 52px;
  margin-bottom: 25px;
  text-align: center;
  width: 100%;

  @media screen and (min-width: 300px) and (max-width: 699px) {
    font-size: 32px;
  }
`

const Header = () => {
  return (
    <HeaderStyled>
      <TitleHeader>Pending Activities</TitleHeader>
      <AddActivityForm />
    </HeaderStyled>
  )
}

export default Header
