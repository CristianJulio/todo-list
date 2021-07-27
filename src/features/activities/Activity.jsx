import React, { useState } from 'react';
import styled from 'styled-components';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai'
import { GrStatusGood } from 'react-icons/gr'
import { useDispatch } from 'react-redux';
import { changeActivityState } from './activitiySlice';

const CardWrapper = styled.li`
  background: #FFF;
  border-left: 5px solid ${({state}) => state === 'Pending' ? '#D11149' : 'green'};
  border-radius: 3px;
`
const Title = styled.h3`
  padding: 5px 10px;
  color: grey;
  font-weight: 400;
  font-size: 17px;
`

const Description = styled.p`
  line-height: 1.5;
  padding: 5px 10px;
`

const ButtonsGroup = styled.div`
  width: 150px;
  padding: 5px 10px;
  display: flex;
  justify-content: space-between;
`

const Button = styled.button`
  all: unset;
  padding: 5px;
  cursor: pointer;
  font-size: 20px;
  color: ${({color}) => color};
`

function Activity({ activity }) {
  const [isClicked, setIsClicked] = useState(false)
  const { title, desc, id, completed } = activity;

  const dispatch = useDispatch()
  
  const handleStateClick = e => {
    dispatch(changeActivityState(id))
  }

  const state = !completed ? 'Pending' : 'Completed'

  return (
    <CardWrapper state={state}>
      <Title>{title}</Title>
      <Description>{desc}</Description>
      <ButtonsGroup>
        <Button color="red" onClick={handleStateClick}><GrStatusGood /></Button>
        <Button color="#133C55"><AiFillEdit /></Button>
        <Button color="#D11149  "><AiFillDelete /></Button>
      </ButtonsGroup>
    </CardWrapper>
  );
}

export default Activity;
