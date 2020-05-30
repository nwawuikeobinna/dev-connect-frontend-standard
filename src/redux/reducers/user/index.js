
import { 
  CURRENT_USER
} from "../../types/userType";

const INITIAL_STATE = {
  current: {}
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case CURRENT_USER:
    return {
      ...state,
      current: action.payload.user
    };
  default:
    return state;
  }
};