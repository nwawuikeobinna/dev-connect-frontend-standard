import {
  LOADING_TRUE,
  LOADING_FALSE,
  PROGRESS_LOADING_TRUE,
  PROGRESS_LOADING_FALSE,
} from "../types/loadingType";

const INITIAL_STATE = {
  loading: false,
  progressLoading: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOADING_TRUE:
      return {
        ...state,
        loading: true,
      };
    case LOADING_FALSE:
      return {
        ...state,
        loading: false,
      };
    case PROGRESS_LOADING_TRUE:
      return {
        ...state,
        progressLoading: true,
      };
    case PROGRESS_LOADING_FALSE:
      return {
        ...state,
        progressLoading: false,
      };
    default:
      return state;
  }
};
