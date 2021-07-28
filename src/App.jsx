import React from 'react'
import ActivitiesList from './features/activities/ActivitiesList'
import Header from './features/header/Header'
import styled from 'styled-components'
import Filter from './features/filter/Filter'
import RandomActivities from './features/randomActivities/RandomActivities'

const Wrapper = styled.div`
  width: 1200px;
  margin: 0 auto;
`

function App () {
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
