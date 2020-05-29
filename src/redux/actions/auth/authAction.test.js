import {AUTH_USER} from "../../types/authType";
import mockAxios from "axios";
// import thunk from 'redux-thunk';
// import configureMockStore from 'redux-mock-store';
// import axios from 'axios';
import {signin, currentUser} from "../../actions";
// jest.mock('axios');
// const middlewares = [thunk];
// const mockStore = configureMockStore(middlewares);

it('should call auth action', async () => {
  mockAxios.get.mockImplementationOnce(() => Promise.resolve({
    data: {
      results: {
        _id: 1,
        firstName: "First Name"
      }
    }
  }));
  const user = await currentUser({
    _id: 1,
        firstName: "First Name"
  });
  
  expect(user).toEqual({ _id: 1, firstName: "Onye"});
  // expect(mockAxios.get).toHaveBeenCalledTimes(1);
  // expect(mockAxios.get).toHaveBeenCalledWith("https://app-staging-api.herokuapp.com/api/v1/users/current");
});