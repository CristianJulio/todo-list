import React, { useState } from 'react'
import styled from 'styled-components'
import { AiFillDelete, AiFillEdit, AiFillSave } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import {
  changeActivityState,
  deleteActivity,
  filterActivities,
  selectfilteredActivities,
  updateActivity
} from './activitiySlice'
import { selectTermToFilter, setTermToFilter } from '../filter/filterSlice'

const CardWrapper = styled.li`
  background: #fff;
  border-left: 5px solid ${({ state }) => (state === 'Pending' ? '#D11149' : '#1F363D')};
  border-radius: 3px;
  box-shadow: 0px 3px 18px 3px rgba(0, 0, 0, 0.1);
`
const Info = styled.div`
  display: grid;
  grid-gap: 10px;
  padding: 15px;
`
const Title = styled.h3`
  color: grey;
  font-size: 17px;
  font-weight: 400;
`
const Description = styled.p`
  line-height: 1.5;
`
const ButtonsGroup = styled.div`
  display: grid;
  grid-gap: 15px;
  grid-template-columns: repeat(3, 1fr);
  padding: 0 0 15px 15px;
  width: 250px;
`
const Button = styled.button`
  all: unset;
  background: ${({ color }) => color};
  border-radius: 3px;
  color: #fff;
  cursor: pointer;
  font-size: 20px;
  padding: 5px 10px;
  text-align: center;
`
const StateButton = styled.button`
  all: unset;
  background: ${({ bg }) => (bg === 'Completed' ? '#1F363D' : '#D11149')};
  border-radius: 3px;
  color: #fff;
  cursor: pointer;
  padding: 5px 10px;
  text-align: center;
  width: 100px;
`
const TextArea = styled.textarea`
  all: unset;
  height: 45px;
  line-height: 1.5;
  max-width: 480px;
  min-width: 480px;
  padding: 5px 10px 5px 0;

  @media screen and (min-width: 700px) and (max-width: 1199px) {
    max-width: 300px;
    min-width: 300px;
  }
  
  @media screen and (min-width: 300px) and (max-width: 699px) {
    max-width: 250px;
    min-width: 250px;
  }
`

const Activity = ({ activity }) => {
  const { title, desc, id, completed } = activity

  const [isEditing, setIsEditing] = useState(false)
  const [editValue, setEditValue] = useState(desc)

  const dispatch = useDispatch()

  const termToFilter = useSelector(selectTermToFilter)
  const filteredActivities = useSelector(selectfilteredActivities)

  const handleStateClick = () => {
    dispatch(changeActivityState(id))
    dispatch(filterActivities(termToFilter))
  }
  const handleDeleteClick = () => {
    dispatch(deleteActivity(id))
    dispatch(filterActivities(termToFilter))

    if (filteredActivities.length === 1) dispatch(setTermToFilter(''))
  }
  const handleEditClick = (e) => {
    setIsEditing(true)
  }
  const handleSaveClick = () => {
    setIsEditing(false)
    dispatch(updateActivity({ id, editValue }))
    dispatch(filterActivities(termToFilter))
  }

  const state = !completed ? 'Pending' : 'Completed'

  return (
    <CardWrapper state={state}>
      <Info>
        <Title>{title}</Title>
        {isEditing === false && <Description>{desc}</Description>}
        {isEditing === true && (
          <TextArea
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
            autoFocus={isEditing}
          />
        )}
      </Info>
      <ButtonsGroup>
        {isEditing === true && (
          <Button color='#06D6A0' onClick={handleSaveClick}>
            <AiFillSave />
          </Button>
        )}
        {isEditing === false && (
          <Button color='#133C55' onClick={handleEditClick}>
            <AiFillEdit />
          </Button>
        )}
        <Button color='#D11149' onClick={handleDeleteClick}>
          <AiFillDelete />
        </Button>
        <StateButton bg={state} onClick={handleStateClick}>
          {state}
        </StateButton>
      </ButtonsGroup>
    </CardWrapper>
  )
}

export default Activity
