import {SUCCESS_MESSAGE} from "../../redux/types/messageType";

export const messageHandler = (response: any) => async (dispatch: any) => {
  if (response.data !== undefined) {
    dispatch({ 
      type: SUCCESS_MESSAGE, 
      payload: {
        success: true,
        message: response.data.message
      } 
    });
  }else{
    dispatch({ 
      type: SUCCESS_MESSAGE, 
      payload: {
        success: true,
        message: response
      } 
    });
  }
};