import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { filterActivities } from '../activities/activitiySlice'
import { selectTermToFilter, setTermToFilter } from './filterSlice'

const FilterStyled = styled.input`
  all: unset;
  background: #FFF;
  border-radius: 3px;
  border: 1px solid #FCFCFC;
  box-shadow: 0px 3px 18px 3px rgba(0,0,0,.1  );
  padding: 5px 10px;
  margin: 50px 0;
  width: 300px;
`

function Filter() {
  // const [valueToFilter, setValueToFilter] = useState('')
  const dispatch = useDispatch()
  const termToFilter = useSelector(selectTermToFilter)
  
  const handleChange = ({ target }) => {
    const value = target.value
    dispatch(setTermToFilter(value))
    dispatch(filterActivities(value))
  }
  
  return (
    <FilterStyled type="text" value={termToFilter} placeholder="Filter activities by description..." onChange={handleChange} />
  )
}

export default Filter
