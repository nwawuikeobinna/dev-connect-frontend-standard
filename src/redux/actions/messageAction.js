import { CLEAR_MESSAGE } from "../types/messageType";

export const clearMessage = () => dispatch => {
  dispatch({
    type: CLEAR_MESSAGE,
    payload: ""
  });
};