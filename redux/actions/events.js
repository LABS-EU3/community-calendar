import fetch from 'isomorphic-fetch';

import * as types from '../constants/events';

export const fetchEventsRequest = payload => ({
  type: types.FETCH_EVENT_REQUEST,
  payload,
});
export const fetchEventsSuccess = payload => ({
  type: types.FETCH_EVENT_SUCCESS,
  payload,
});
export const fetchEventsError = payload => ({
  type: types.FETCH_EVENT_ERROR,
  payload,
});

export const doFetchEvent = (userCountry, userCity, eventType) => dispatch => {
  dispatch(fetchEventsRequest(true));
  // setting configurations for fetch
  const config = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      userCountry,
      userCity,
      eventType,
    }),
  };
  // utilize fetch here since axios won't work here. refer to: https://stackoverflow.com/questions/56721660/how-to-fix-error-request-failed-with-status-code-404-in-axios-next-js
  fetch('https://comcalstaging.herokuapp.com/api/v1/event/fetch-events', config)
    .then(res => res.json())
    .then(data => {
      dispatch(fetchEventsSuccess(data));
    })
    .catch(error => dispatch(fetchEventsError(error)));
};
