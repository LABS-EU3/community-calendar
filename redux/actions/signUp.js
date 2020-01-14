import axios from 'axios';
import Router from 'next/router';
import Cookie from 'js-cookie';

import * as types from '../constants/signUp';
import { API_URL } from '../../config/environment';

const signUpRequest = payload => ({
  type: types.SIGNUP_REQUEST,
  payload,
});

export const signUpSuccess = payload => ({
  type: types.SIGNUP_SUCCESS,
  payload,
});

export const signUpError = payload => ({
  type: types.SIGNUP_ERROR,
  payload,
});

export const doSignUp = user => dispatch => {
  dispatch(signUpRequest(true));
  axios
    .post('https://comcalstaging.herokuapp.com/api/v1/users/register', user)
    .then(({ data }) => {
      Cookie.set('comcal-event-token', data.user.token);
      Router.push('/userdashboard');
      dispatch(signUpSuccess(data));
    })
    .catch(error => {
      dispatch(signUpError(error));
    });
  dispatch(signUpRequest(false));
};
