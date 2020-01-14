import * as types from '../constants/signIn';

const initialState = {
  requesting: false,
  user: {},
  error: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.SIGNIN_REQUEST:
      return {
        ...state,
        requesting: action.payload,
        user: {},
        error: null,
      };
    case types.SIGNIN_SUCCESS:
      return {
        ...state,
        requesting: false,
        user: action.payload,
        error: null,
      };
    case types.SIGNIN_ERROR:
      return {
        ...state,
        requesting: false,
        user: {},
        error: action.payload,
      };
    default:
      return state;
  }
}
