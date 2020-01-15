import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { doSignIn } from '../../../redux/actions/signIn';
import { Button } from '../../atoms/Button';
import NavBar from '../../molecules/Navbar';
import Input from '../../atoms/Input';
import Label from '../../atoms/Label';
import * as Styles from '../SignUpForm/index.styled';
import { StyledDiv, Paragraph } from './index.styled';
import { colors } from '../../~reusables';

const SignInForm = ({
  // eslint-disable-next-line no-shadow
  doSignIn, requesting, userData,
}) => {
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
    <Styles.PageWrapper>
      {requesting && <h3>Requesting</h3>}
      {userData && <h3>Requesting</h3>}
      <NavBar notLoggedIn />
      <Styles.BorderDiv>
        <Styles.Form onSubmit={event => handleSubmit(event, credentials)}>
          <Styles.InputDiv>
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
          </Styles.InputDiv>
          <Styles.InputDiv>
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
          </Styles.InputDiv>
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
        </Styles.Form>
      </Styles.BorderDiv>
    </Styles.PageWrapper>
  );
};

SignInForm.propTypes = {
  doSignIn: PropTypes.func.isRequired,
  requesting: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  userData: PropTypes.object.isRequired,
};


const mapStateToProps = state => ({
  requesting: state.signIn.requesting,
  userData: state.signIn.user.user,
  error: state.signIn.error,
});

export default connect(mapStateToProps, { doSignIn })(SignInForm);
