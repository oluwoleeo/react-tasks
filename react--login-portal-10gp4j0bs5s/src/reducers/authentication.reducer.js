import { userConstants } from '../constants';

let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { loggedIn: true, user } : {};

export function authentication(state = initialState, action) {
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      return {
        loggingIn: true,
        user: action.user
      };
    case userConstants.LOGIN_SUCCESS:
      return {
        loggedIn: true,
        user: action.user,
        error: null
      };
    case userConstants.LOGIN_FAILURE:
      return {
        loggedIn: false,
        error: action.error,
        user: null
      };
    case userConstants.LOGOUT:
      return {
        loggedIn: false,
        user: null,
        error: null
      };
    default:
      return state
  }
}