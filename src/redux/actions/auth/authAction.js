import { AUTH_USER } from "../../types/authType";
import axios from "axios";
import { BASE_URL } from "../../../url/BASE_URL";
import {LOADING_TRUE, LOADING_FALSE} from "../../types/loadingType";
import setAuthorizationHeader from "../../../utils/setAuthorizationHeader";
import { errorHandler } from "../../../helpers/error-handler";
import { messageHandler } from "../../../helpers/message-handler";
import { CURRENT_USER } from "../../types/userType";

export const refreshToken = (data, history) => async dispatch => { 
  try {
    dispatch({ type: LOADING_TRUE });
    const response = await axios.post(BASE_URL+"auth/refreshToken", data);
    localStorage.setItem("token", response.data.token);
    const {onboarding, stage, userType, _id} = response.data.user;
    if (onboarding && stage > 0) {
      history.push(`/onboarding?stage=${stage}`);
    }else if(userType === 'employee'){
      history.push(`/employee/dashboard/${_id}`);
    }else {
      history.push("/dashboard");
    }
    
    dispatch({ type: LOADING_FALSE });
  } catch (error) {
    localStorage.removeItem("token");
    dispatch(errorHandler(error));
    history.push("/home");
    dispatch({ type: LOADING_FALSE });
  }
};

export const signup = (data, props) => async dispatch => { 
  try {
    dispatch({ type: LOADING_TRUE });
    const response = await axios.post(BASE_URL+"auth/signup", data);
    dispatch(messageHandler(response));
    props.history.push("/signin");
    dispatch({ type: LOADING_FALSE });
  } catch (error) {
    dispatch(errorHandler(error));
    dispatch({ type: LOADING_FALSE });
  }
};

export const signin = (formProps, props) => async dispatch => { 
  try {
    dispatch({ type: LOADING_TRUE });
    const response = await axios.post(BASE_URL+"auth/login", formProps);
    setAuthorizationHeader(response.data.token);
    dispatch({ 
      type: AUTH_USER, 
      payload: { 
        token: response.data.token
      } 
    });

    localStorage.setItem("token", response.data.token);
    dispatch({ 
      type: CURRENT_USER,
      payload: { success: true, user: response.data.user }
    });
    dispatch(messageHandler(response));
    dispatch({ type: LOADING_FALSE });
  } catch (error) {
    dispatch(errorHandler(error));
    dispatch({ type: LOADING_FALSE });
  }
};

export const verifyAndLogin = (token, props) => async dispatch => { 
  try {
    dispatch({ type: LOADING_TRUE });
    const response = await axios.post(BASE_URL+"auth/verify", {token: token});
    setAuthorizationHeader(response.data.token);
    dispatch({ type:AUTH_USER, 
      payload: { 
        token: response.data.token
      } });
    localStorage.setItem("token", response.data.token);
    dispatch({ 
      type: CURRENT_USER,
      payload: { success: true, user: response.data.user }
    });
    dispatch(messageHandler(response));
    dispatch({ type: LOADING_FALSE });
    props.history.push("/onboarding?stage=welcome");
  } catch (error) {
    dispatch(errorHandler(error));
    dispatch({ type: LOADING_FALSE });
    props.history.push("/signin");
  }
};

export const forgotPassword = (formProps, props) => async dispatch => {
  try {
    dispatch({ type: LOADING_TRUE });
    const response = await axios.post(BASE_URL+"auth/forgot-password", formProps);
    dispatch(messageHandler(response));
    props.history.push("/signin");
    dispatch({ type: LOADING_FALSE });
  } catch (error) {
    dispatch(errorHandler(error));
    dispatch({ type: LOADING_FALSE });
  }
};

export const resetPassword = (params, props) => async dispatch => {
  try {
    dispatch({ type: LOADING_TRUE });
    const response = await axios.post(BASE_URL+"auth/reset-password", params);
    dispatch(messageHandler(response));
    props.history.push("/signin");
    dispatch({ type: LOADING_FALSE });
  } catch (error) {
    dispatch(errorHandler(error));
    dispatch({ type: LOADING_FALSE });
  }
};

export const completeRegistration = (params) => async dispatch => {
  try {
    dispatch({ type: LOADING_TRUE });
    const response = await axios.post(BASE_URL+"auth/complete-signup", params);
    dispatch(messageHandler(response));
    dispatch({ type: LOADING_FALSE });
  } catch (error) {
    dispatch(errorHandler(error));
    dispatch({ type: LOADING_FALSE });
  }
};