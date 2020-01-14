import * as types from '../constants/events';

const initialState = {
  requesting: false,
  events: [],
  error: null,
};

export default function fetchEvents(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_EVENT_REQUEST:
      return {
        ...state,
        requesting: action.payload,
      };
    case types.FETCH_EVENT_SUCCESS:
      return {
        ...state,
        requesting: false,
        events: action.payload,
      };
    case types.FETCH_EVENT_ERROR:
      return {
        ...state,
        requesting: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
