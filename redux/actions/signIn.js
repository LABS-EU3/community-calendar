import axios from 'axios';
import Router from 'next/router';
import Cookie from 'js-cookie';

import { API_URL } from '../../config/environment';
import * as types from '../constants/signIn';

const signInRequest = payload => ({
  type: types.SIGNIN_REQUEST,
  payload,
});

const signInSuccess = payload => ({
  type: types.SIGNIN_SUCCESS,
  payload,
});

const signInError = payload => ({
  type: types.SIGNIN_ERROR,
  payload,
});

export const doSignIn = user => dispatch => {
  dispatch(signInRequest(true));
  axios.post('https://comcalstaging.herokuapp.com/api/v1/users/signin', user)
    .then(({ data }) => {
      Cookie.set('comcal-event-token', data.user.token);
      Router.push('/userdashboard');
      dispatch(signInSuccess(data));
    })
    .catch(error => {
      dispatch(signInError(error));
    });
  dispatch(signInRequest(false));
};
