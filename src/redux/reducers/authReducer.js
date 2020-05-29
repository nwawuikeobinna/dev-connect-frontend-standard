
import { AUTH_USER, REFRESH_TOKEN } from "../types/authType";

const INITIAL_STATE = {
  isAuthenticated: "",
  refreshToken: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case AUTH_USER:
    return {
      ...state,
      isAuthenticated: action.payload.token
    };
  default:
    return state;
  }
};