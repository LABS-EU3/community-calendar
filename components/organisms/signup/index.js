import React, { useState } from 'react';
import styled from 'styled-components';

import axios from 'axios';
import { Button } from '../../atoms/Button';
import AuthNavBar from '../AuthNavBar';
import Input from '../../atoms/Input';
import { NavBarAlt } from "../../molecules/Navbar/index.stories";
import { inputLarge as Input } from "../../atoms/Input/index.stories";

export const BorderDiv = styled.div`
  width: 385px;
  height: 470px;
`
export const InputDiv = styled.div`
  margin-bottom: 1.2rem;
`;
export const Label = styled.div`
  font-family: Montserrat;
  font-weight: bold;
  font-size: 16px;
`;

export const Paragraph = styled.p`
  margin-bottom: 0.8rem;
  margin-top: 5px;
  margin-right: 7rem;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Register = () => {
  const initialState = {
    first_name: '',
    last_name: '',
    username: '',
    email: '',
    password: '',
  };
  const [credentials, SetCredentials] = useState(initialState);

  const handleChange = e => {
    const { name, value } = e.target;
    SetCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = (e, newUser) => {
    e.preventDefault();
    axios
      .post(
        'https://comcalstaging.herokuapp.com/api/v1/users/register',
        newUser,
      )
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div>
      <AuthNavBar />
      <BorderDiv>
        <Form onSubmit={e => handleSubmit(e, credentials)}>
          <InputDiv>
            <Label>FirstName</Label>
            <Input
              style={{ width: '250px' }}
              large
              type="text"
              onChange={handleChange}
              name="first_name"
              value={credentials.first_name}
            />
          </InputDiv>
          <InputDiv>
            <Label>LastName</Label>
            <Input
              style={{ width: '250px' }}
              large
              type="text"
              onChange={handleChange}
              name="last_name"
              value={credentials.last_name}
            />
          </InputDiv>
          <InputDiv>
            <Label>Username</Label>
            <Input
              style={{ width: '250px' }}
              large
              type="text"
              onChange={handleChange}
              name="username"
              value={credentials.username}
            />
          </InputDiv>

          <InputDiv>
            <Label>Email address</Label>
            <Input
              style={{ width: '250px' }}
              large
              type="text"
              onChange={handleChange}
              name="email"
              value={credentials.email}
            />
          </InputDiv>

          <InputDiv>
            <Label>Password</Label>
            <Input
              style={{ width: '250px' }}
              large
              type="text"
              onChange={handleChange}
              name="password"
              value={credentials.password}
            />
          </InputDiv>
          <Paragraph>Lagos,NG(Change)</Paragraph>
          <Button
            large
            style={{
              fontSize: '16px', width: '250px', height: '40px', backgroundColor: '#CE5374', padding: '5px',
            }}
          >
            Sign up
          </Button>
        </Form>
      </BorderDiv>
    </div>
  );
};
