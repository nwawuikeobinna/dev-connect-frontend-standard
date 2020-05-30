import {
  CURRENT_USER
} from "../../types/userType";
import axios from "axios";
import { BASE_URL } from "../../../url";
import { LOADING_TRUE, LOADING_FALSE } from "../../types/loadingType";
import { errorHandler } from "../../../helpers/error-handler";
import { signout } from "../../actions";

export const currentUser = () => async (dispatch) => {
  try {
    dispatch({ type: LOADING_TRUE });
    const response = await axios.get(BASE_URL + "users/current");
    dispatch({
      type: CURRENT_USER,
      payload: { success: true, user: response.data.user },
    });
    dispatch({ type: LOADING_FALSE });
  } catch (err) {
    dispatch(errorHandler(err));
    dispatch({ type: LOADING_FALSE });
    dispatch(signout());
  }
};


