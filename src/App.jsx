import React from 'react'
import ActivitiesList from './features/activities/ActivitiesList'
import AddActivityForm from './features/activities/AddActivityForm'
import Header from './features/header/Header'
import styled from 'styled-components'
import Menu from './features/menu/Menu'

const Wrapper = styled.div`
  width: 1200px;
  margin: 0 auto;
`


function App() {
  return (
    <>
      <Header />
      <Wrapper>
        <Menu />
        <ActivitiesList />
      </Wrapper>
    </>
  )
}

export default App
