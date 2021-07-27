import React from 'react';
import styled from 'styled-components';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai'
import { useDispatch } from 'react-redux';
import { changeActivityState, deleteActivity } from './activitiySlice';

const CardWrapper = styled.li`
  background: #FFF;
  border-left: 5px solid ${({state}) => state === 'Pending' ? '#D11149' : 'green'};
  border-radius: 3px;
  // display: flex;
  // justify-content: space-between;
  // align-items: flex-start;
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
  padding: 5px 10px;
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
  color: pruple;
  cursor: pointer;
  background: ${({bg}) => bg === 'Completed' ? 'green' : '#D11149'};
  padding: 5px 10px;
  border-radius: 3px;
  color: #FFF;
  width: 100px;
  text-align: center;
`

function Activity({ activity }) {
  const { title, desc, id, completed } = activity;

  const dispatch = useDispatch()
  
  const handleStateClick = () => {
    dispatch(changeActivityState(id))
  }
  const handleDeleteClick = () => {
    dispatch(deleteActivity(id))
  }

  const state = !completed ? 'Pending' : 'Completed'

  return (
    <CardWrapper state={state}>
      <Info>
        <Title>{title}</Title>
        <Description>{desc}</Description>
      </Info>
      <ButtonsGroup>
        <Button color="#133C55"><AiFillEdit /></Button>
        <Button color="#D11149" onClick={handleDeleteClick}><AiFillDelete /></Button>
        <StateButton bg={state} onClick={handleStateClick}>{state}</StateButton>
      </ButtonsGroup>
    </CardWrapper>
  );
}

export default Activity;
