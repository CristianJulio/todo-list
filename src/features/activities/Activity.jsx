import React, { useState } from 'react';
import styled from 'styled-components';
import { AiFillDelete, AiFillEdit, AiFillSave } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux';
import { changeActivityState, deleteActivity, filterActivities, selectfilteredActivities, updateActivity } from './activitiySlice';
import { selectTermToFilter, setTermToFilter } from '../filter/filterSlice';

const CardWrapper = styled.li`
  background: #FFF;
  border-left: 5px solid ${({state}) => state === 'Pending' ? '#D11149' : 'green'};
  border-radius: 3px;
  box-shadow: 0px 3px 18px 3px rgba(0,0,0,.1);
`
const Info = styled.div`
  display: grid;
  grid-gap: 10px;
  padding: 15px;
`
const Title = styled.h3`
  // padding: 5px 10px;
  color: grey;
  font-weight: 400;
  font-size: 17px;
`
const Description = styled.p`
  line-height: 1.5;
  // padding: 5px 10px;
`
const ButtonsGroup = styled.div`
  width: 250px;
  padding: 0 0 15px 15px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 15px;
`
const Button = styled.button`
  all: unset;
  padding: 5px 10px;
  cursor: pointer;
  font-size: 20px;
  background: ${({color}) => color};
  border-radius: 3px;
  color: #fff;
  text-align: center;
`
const StateButton = styled.button`
  all: unset;
  background: ${({bg}) => bg === 'Completed' ? 'green' : '#D11149'};
  border-radius: 3px;
  color: #FFF;
  color: pruple;
  cursor: pointer;
  padding: 5px 10px;
  text-align: center;
  width: 100px;
`
const TextArea = styled.textarea`
  min-height: 100px;
  max-width: 550px;
  min-width: 550px;
`

function Activity({ activity }) {
  const { title, desc, id, completed } = activity;
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

    if(filteredActivities.length === 1) dispatch(setTermToFilter(''))
  }
  const handleEditClick = e => {
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
        {isEditing === false ? (
          <Description>{desc}</Description>
        ) : (
          <TextArea value={editValue} onChange={(e) => setEditValue(e.target.value)}></TextArea>
        )}
      </Info>
      <ButtonsGroup>
        {isEditing === true && <Button color="#06D6A0" onClick={handleSaveClick}><AiFillSave /></Button>}
        {isEditing === false && <Button color="#133C55" onClick={handleEditClick}><AiFillEdit /></Button>}
        <Button color="#D11149" onClick={handleDeleteClick}><AiFillDelete /></Button>
        <StateButton bg={state} onClick={handleStateClick}>{state}</StateButton>
      </ButtonsGroup>
    </CardWrapper>
  );
}

export default Activity;
