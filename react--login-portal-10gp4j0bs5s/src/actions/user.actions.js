import { userConstants } from '../constants';
import { userService } from '../services';
import { alertActions } from './';
import { history } from '../helpers';

export const userActions = {
    login,
    logout,
    register
};

function login(username, password) {
    // return the promise using fetch which adds to localstorage on resolve
    return dispatch => {
        return userService.login(username, password)
        .then(res => dispatch(success(res)))
        .catch(err => {
            dispatch(alertActions.error(`Error: ${err}`));
            dispatch(failure(err));
        });
    }

    function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
    function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}

function logout(id) {
    // complete this function
    return dispatch => {
        return userService.logout(id)
        .then(res => {
            dispatch(alertActions.clear());
            dispatch(success(res));
        })
        .catch(err => {
            dispatch(alertActions.error(err));
            dispatch(failure(err));
        });
    }

    function success() { return { type: userConstants.LOGOUT } }
    function failure(error) { return { type: userConstants.REGISTER_FAILURE, error } }
}

function register(user) {
    // return the promise using fetch which dispatches appropriately 

    return dispatch => {
        return userService.register(user)
        .then(res => {
            dispatch(alertActions.success('Registration successful'));
            dispatch(success(res));
        })
        .catch(err => {
            dispatch(alertActions.error(err));
            dispatch(failure(err));
        });
    }

    function request(user) { return { type: userConstants.REGISTER_REQUEST, user } }
    function success(user) { return { type: userConstants.REGISTER_SUCCESS, user } }
    function failure(error) { return { type: userConstants.REGISTER_FAILURE, error } }
}
