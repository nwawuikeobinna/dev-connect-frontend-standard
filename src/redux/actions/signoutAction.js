import { SIGN_OUT } from "../types/authType";

export const signout = () => dispatch => {
  localStorage.removeItem("token");
  dispatch ({ type: SIGN_OUT });
};