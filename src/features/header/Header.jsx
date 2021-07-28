import React from 'react'
import styled from 'styled-components'
import AddActivityForm from '../activities/AddActivityForm'
import { useSpring, animated } from 'react-spring'

const HeaderStyled = styled.header`
  align-items: center;
  background-image: linear-gradient(to bottom right, #FFC857, #E9724C); 
  display: flex;
  flex-direction: column;
  height: 300px;
  justify-content: center;
`
const TitleHeader = styled(animated.h1)`
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
  const pulse = useSpring({
    from: {
      transform: 'scale(1)'
    },
    to: [
      { transform: 'scale(1.2' },
      { transform: 'scale(1)' }
    ]
  })

  return (
    <HeaderStyled>
      <TitleHeader style={pulse}>Pending Activities</TitleHeader>
      <AddActivityForm />
    </HeaderStyled>
  )
}

export default Header
