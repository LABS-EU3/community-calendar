import React, { useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { doSignIn } from '../../../redux/actions/signIn';
import { Button } from '../../atoms/Button';
import NavBar from '../../molecules/Navbar';
import Input from '../../atoms/Input';
import Label from '../../atoms/Label';
import { InputDiv, Form, BorderDiv } from '../SignUpForm';
import { colors } from '../../~reusables';

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  font-size: 1rem;
  margin-right: 6rem;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
`;
const Paragraph = styled.p``;

const SignInForm = ({ doSignIn, requesting, error, userData }) => {
  const initialState = {
    username: '',
    password: '',
  };

  const [credentials, SetCredentials] = useState(initialState);

  const handleChange = e => {
    const { name, value } = e.target;
    SetCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = async (event, user) => {
    event.preventDefault();
    doSignIn(user);
  };
  return (
    <div>
      { requesting && <h3>Requesting</h3>}
      { userData && <h3>Requesting</h3>}
      <NavBar notLoggedIn />
      <BorderDiv>
        <Form onSubmit={event => handleSubmit(event, credentials)}>
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
          <StyledDiv>
            <Input xLarge type="checkbox" />
            <Paragraph>Remember me</Paragraph>
          </StyledDiv>
          <Button
            xLarge
            background={colors.primary}
          >
            Login
          </Button>
        </Form>
      </BorderDiv>
    </div>
  );
};

const mapStateToProps = state => ({
  requesting: state.signIn.requesting,
  userData: state.signIn.user.user,
  error: state.signIn.error,
});

export default connect(mapStateToProps, { doSignIn })(SignInForm);
