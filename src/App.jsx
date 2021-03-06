import React from 'react'
import ActivitiesList from './features/activities/ActivitiesList'
import Header from './features/header/Header'
import styled from 'styled-components'
import Filter from './features/filter/Filter'
import RandomActivities from './features/randomActivities/RandomActivities'

const Wrapper = styled.div`
  margin: 0 auto;
  width: 1200px;

  @media screen and (min-width: 700px) and (max-width: 1199px) {
    width: 700px;
  }

  @media screen and (min-width: 300px) and (max-width: 699px) {
    width: 300px;
  }
`

const App = () => {
  return (
    <>
      <Header />
      <Wrapper>
        <RandomActivities />
        <Filter />
        <ActivitiesList />
      </Wrapper>
    </>
  )
}

export default App
