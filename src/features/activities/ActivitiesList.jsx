import React from 'react'
import { useSelector } from 'react-redux'
import { selectActivities } from './activitiySlice'
import Activity from './Activity'
import styled from 'styled-components'

const LisActivitiesListStyled = styled.div`
  padding: 50px 0;
`

const ListStyled = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 25px;
`

function ActivitiesList() {  
  const activities = useSelector(selectActivities)

  if(!activities.length) return <p>Nothing to show...</p>
  
  return (
    <LisActivitiesListStyled>
      <ListStyled>
        {activities.map(a => (
          <Activity key={a.id} activity={a} />
        ))}
      </ListStyled>
    </LisActivitiesListStyled>
  )
}

export default ActivitiesList
