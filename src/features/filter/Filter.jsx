import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { filterActivities, selectActivities } from '../activities/activitiySlice'
import { selectTermToFilter, setTermToFilter } from './filterSlice'

const FilterStyled = styled.input`
  all: unset;
  background: #FFF;
  border-radius: 3px;
  border: 1px solid #FCFCFC;
  box-shadow: 0px 3px 18px 3px rgba(0,0,0,.1  );
  display: block;
  margin: 50px auto;
  padding: 5px 10px;
  width: 300px;
`

function Filter () {
  const dispatch = useDispatch()
  const termToFilter = useSelector(selectTermToFilter)
  const activities = useSelector(selectActivities)

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
