import {combineReducers} from 'redux';
import auth from '../reducers/auth';
import {SIGN_OUT} from '../types/authType';
import users from "../reducers/user";
import message from '../reducers/messageReducer';
import request from '../reducers/loadingReducer';

const appReducer = combineReducers({
  auth,
  users,
  message,
  request,
});

export default (state, action) => {
  if (action.type === SIGN_OUT) {
    state = undefined;
  }

  return appReducer(state, action);
};
