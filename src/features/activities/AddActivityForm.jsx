import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addActivity, updateActivity } from './activitiySlice';
import styled from 'styled-components';

const FormStyled = styled.form`
  padding: 25px 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Input = styled.input`
  all: unset;
  background: #FFF;
  padding: 5px 10px;
  border-radius: 3px;
  margin-right: 15px;
`;

const Button = styled.button`
  all: unset;
  background: #40798C;
  color: #FFF;
  padding: 5px 10px;
  border-radius: 3px;
  cursor: pointer;
`

function AddActivityForm() {
  const [data, setData] = useState({
    title: '',
    desc: '',
  });
  const { title, desc } = data;
  const dispatch = useDispatch();

  const handleChange = ({ target }) => {
    const value = target.value;
    const name = target.name;

    setData((data) => ({
      ...data,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if(!title || !desc) return
    
    const activityToAdd = {
      ...data,
      id: uuidv4(),
      completed: false,
    };

    setData({
      title: '',
      desc: '',
    })

    dispatch(addActivity(activityToAdd));
  };

  const handleEditSubmit = (e) => {
    e.preventDefault()
    dispatch(updateActivity({ i }))
  }

  return (
    <FormStyled onSubmit={handleSubmit}>
      <Input
        type="text"
        id="title"
        name="title"
        value={title}
        placeholder="Title"
        onChange={handleChange}
      />
      <Input
        type="text"
        id="desc"
        name="desc"
        value={desc}
        placeholder="Description"
        onChange={handleChange}
      />
      <Button>Add activity</Button>
    </FormStyled>
  );
}

export default AddActivityForm;
