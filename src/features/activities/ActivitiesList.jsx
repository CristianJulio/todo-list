import React from 'react'
import Activity from './Activity'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { selectActivities, selectfilteredActivities } from './activitiySlice'
import { selectTermToFilter } from '../filter/filterSlice'

const ListStyled = styled.ul`
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(2, 1fr);
  list-style: none;
  padding-bottom: 50px;

  @media screen and (min-width: 700px) and (max-width: 1199px) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }

  @media screen and (min-width: 300px) and (max-width: 699px) {
    grid-template-columns: 1fr;
  }
`
const Message = styled.p`
  color: #333;
  font-size: 20px;
  font-weight: 400;
  padding: 50px;
  text-align: center;
`

const ActivitiesList = () => {
  const activities = useSelector(selectActivities)
  const filteredActivities = useSelector(selectfilteredActivities)
  const termToFilter = useSelector(selectTermToFilter)

  if (!activities.length) return <Message>Add a new activity to start...</Message>
  if (filteredActivities.length === 0 && termToFilter !== '') return <Message>No results....</Message>

  const listToShow = filteredActivities.length === 0 ? activities : filteredActivities

  return (
    <ListStyled>
      {listToShow.map((a) => (
        <Activity key={a.id} activity={a} />
      ))}
    </ListStyled>
  )
}

export default ActivitiesList
