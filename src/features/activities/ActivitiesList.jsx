import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { filterActivities, selectActivities, selectfilteredActivities } from './activitiySlice'
import Activity from './Activity'
import styled from 'styled-components'
import { selectTermToFilter } from '../filter/filterSlice'

const LisActivitiesListStyled = styled.div`
  padding-bottom: 50px;
`
const ListStyled = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 25px;
`
const Message = styled.p`
  text-align: center;
  padding: 50px;
  font-weight: 400;
  color: #333;
  font-size: 20px;
`

function ActivitiesList() {  
  const activities = useSelector(selectActivities)
  const filteredActivities = useSelector(selectfilteredActivities)
  const termToFilter = useSelector(selectTermToFilter)

  if(!activities.length) return <Message>Add a new activity to start...</Message>
  if(filteredActivities.length === 0 && termToFilter !== '') return <p>No results....</p>
  
  const listToShow = filteredActivities.length === 0 ? activities : filteredActivities
  
  return (
    <LisActivitiesListStyled>
      <ListStyled>
        {listToShow.map(a => (
          <Activity key={a.id} activity={a} />
        ))}
      </ListStyled>
    </LisActivitiesListStyled>
  )
}

export default ActivitiesList
