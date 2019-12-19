import * as types from '../constants/signUp';

const initialState = {
  requesting: false,
  success: false,
  error: null,
};

export default function signUp(state = initialState, action) {
  switch (action.type) {
    case types.SIGNUP_REQUEST:
      return {
        ...state,
        requesting: action.payload,
      };
    case types.SIGNUP_SUCCESS:
      return {
        ...state,
        requesting: false,
        success: action.payload,
      };
    case types.SIGNUP_ERROR:
      return {
        ...state,
        requesting: false,
        error: action.payload,
      };
    default:
      return state;
  }
}