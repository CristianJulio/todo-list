import React from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { filterActivities, selectActivities } from '../activities/activitiySlice'
import { selectTermToFilter, setTermToFilter } from './filterSlice'

const FilterStyled = styled.input`
  all: unset;
  background: #FFF;
  border-radius: 3px;
  box-shadow: 0px 3px 18px 3px rgba(0,0,0,.1  );
  display: block;
  margin: 50px auto;
  padding: 5px 10px;
  width: 300px;

  @media screen and (min-width: 300px) and (max-width: 699px) {
    width: 250px;
  }
`

const Filter = () => {
  const dispatch = useDispatch()

  const activities = useSelector(selectActivities)
  const termToFilter = useSelector(selectTermToFilter)

  const handleChange = ({ target }) => {
    const value = target.value
    dispatch(setTermToFilter(value))
    dispatch(filterActivities(value))
  }

  if (!activities.length) return null

  return (
    <>
      <FilterStyled type='text' value={termToFilter} placeholder='Filter activities by description...' onChange={handleChange} />
    </>
  )
}

export default Filter
