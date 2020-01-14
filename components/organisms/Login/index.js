import React, { useState } from 'react';
import axios from 'axios';
import Router from 'next/router';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

import { loginStatus } from '../../../redux/actions/login.actions';
import { Button } from '../../atoms/Button';
import AuthNavBar from '../AuthNavBar';
import Input from '../../atoms/Input';
import { Label, InputDiv, Form } from '../signup';

export const Login = (props) => {
  const initialState = {
    username: '',
    password: '',
  };
  const dispatch = useDispatch();
 

  const [credentials, SetCredentials] = useState(initialState);

  const handleChange = e => {
    const { name, value } = e.target;
    SetCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = (e, existingUser) => {
    e.preventDefault();
    axios.post(
      'https://comcalstaging.herokuapp.com/api/v1/users/signin',
      existingUser,
    )
      .then(({ data }) => {
        dispatch(loginStatus(data));
        Router.push('/UserDashboard');
      });
  };
  return (
    <div>
      <AuthNavBar alt />
      <BorderDiv style={{ borderRadius: '20px'}}>
        <Form onSubmit={e => handleSubmit(e, credentials)}>
          <InputDiv>
            <Label>Username</Label>
            <Input
              style={{borderRadius: '20px'}}
              large
              type="text"
              onChange={handleChange}
              name="username"
              value={credentials.username}
            />
          </InputDiv>

          <InputDiv>
            <Label>Password</Label>
            <Input
              style={{borderRadius: '20px'}}
              large
              type="password"
              onChange={handleChange}
              name="password"
              value={credentials.password}
            />
          </InputDiv>
          <StyledDiv>
            <Input type="checkbox" />
            <Paragraph>Remember me</Paragraph>
          </StyledDiv>
          <Button
            large
            style={{
              fontSize: '16px', width: '20rem', height: '3rem', backgroundColor: '#CE5374', padding: '5px',
            }}
          >
            Login
          </Button>
        </Form>
      </BorderDiv>
    </div>
  );
};

const BorderDiv = styled.div`
  width: 280px;
  height: 280px;
  margin: 0 auto;
  margin-top: 2rem;
  background: #ffffff;
  border: 1px solid #cec8c8;
  box-sizing: border-box;
  padding-top: 3rem;
`;
const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  font-size: 1rem;
  margin-right: 6rem;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
`;
const Paragraph = styled.p``;
