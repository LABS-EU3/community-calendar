import React, { useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { Button } from '../../atoms/Button';
import NavBar from '../../molecules/Navbar';
import Label from '../../atoms/Label';
import Paragraph from '../../atoms/Paragraph';
import Input from '../../atoms/Input';
import { colors } from '../../~reusables';
import { doSignUp } from '../../../redux/actions/signUp';

export const BorderDiv = styled.div`
  width: 350px;
  height: auto;
  margin: 0 auto;
  background: #ffffff;
  border: 1px solid #cec8c8;
  box-sizing: border-box;
  padding: 2.5rem 0;
  border-radius: 20px;
`;

export const InputDiv = styled.div`
  margin-bottom: 1.2rem;
  display: flex;
  flex-direction: column;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SignUpForm = ({ doSignUp }) => {
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

  const handleSubmit = (event, newUser) => {
    event.preventDefault();
    console.log(newUser);
    doSignUp(newUser);
  };

  return (
    <div>
      <NavBar notSignedIn />
      <BorderDiv>
        <Form onSubmit={event => handleSubmit(event, credentials)}>
          <InputDiv>
            <Label
              medium
              weight="bold"
            >
              FirstName
            </Label>
            <Input
              xLarge
              type="text"
              onChange={handleChange}
              name="first_name"
              value={credentials.first_name}
            />
          </InputDiv>
          <InputDiv>
            <Label
              medium
              weight="bold"
            >
              LastName
            </Label>
            <Input
              xLarge
              type="text"
              onChange={handleChange}
              name="last_name"
              value={credentials.last_name}
            />
          </InputDiv>
          <InputDiv>
            <Label
              medium
              weight="bold"
            >
              Username
            </Label>
            <Input
              xLarge
              type="text"
              onChange={handleChange}
              name="username"
              value={credentials.username}
            />
          </InputDiv>

          <InputDiv>
            <Label
              medium
              weight="bold"
            >
              Email address
            </Label>
            <Input
              xLarge
              type="text"
              onChange={handleChange}
              name="email"
              value={credentials.email}
            />
          </InputDiv>

          <InputDiv>
            <Label
              medium
              weight="bold"
            >
              Password
            </Label>
            <Input
              xLarge
              type="password"
              onChange={handleChange}
              name="password"
              value={credentials.password}
            />
          </InputDiv>
          <Paragraph>
            Lagos,NG(Change)
          </Paragraph>
          <br />
          <Button
            xLarge
            background={colors.primary}
          >
            Sign up
          </Button>
        </Form>
      </BorderDiv>
    </div>
  );
};

export default connect(state => state, { doSignUp })(SignUpForm);
