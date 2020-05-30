
import { AUTH_USER } from "../../types/authType";

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