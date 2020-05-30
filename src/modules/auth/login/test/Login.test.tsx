import React from "react";
import ReactDOM from "react-dom";
import LoginComponent from "../index";
import {
  render,
  cleanup,
  fireEvent,
  wait,
} from "../../../../__test__/render";
import { Simulate, act } from "react-dom/test-utils";
import { BASE_URL } from "../../../../url/BASE_URL";
import { signin } from "../../../../redux/actions";

const fakeUser = {
  email: "hello@yahoo.com",
  password: "fake password",
};

afterEach(cleanup);

describe("render login component", () => {
  it("should display validation error message", async () => {
    const { getByTestId, getByLabelText } = render(<LoginComponent />);

    // Get input field
    const emailField = getByLabelText("Email");
    // Throw email validation error
    fireEvent.blur(emailField);

    // Get input field
    const passwordField = getByLabelText("Password");
    // Throw password validation error
    fireEvent.blur(passwordField);

    //Wait for response
    await wait();

    // Ensure error message shows
    expect(getByTestId("email-invalid-feedback")).not.toBeNull();
    // Ensure email error message shows
    expect(getByTestId("Email is required")).not.toBeNull();

    // Ensure error message shows
    expect(getByTestId("password-invalid-feedback")).not.toBeNull();
    // Ensure password error message shows
    expect(getByTestId("Password is required")).not.toBeNull();
  });

  it("should submit form successfully", async () => {
    // const handleSubmit = jest.fn();
    const { getByText, getByLabelText } = render(
      <LoginComponent />
    );

    // Get input field
    const emailField = getByLabelText("Email");
    // Get input field
    const passwordField = getByLabelText("Password");
    //  Get button
    const submitButton = getByText("Log in");
    fireEvent.click(submitButton);

    // Handle onChange
    fireEvent.change(emailField, {
      target: { name: "email", value: fakeUser.email }
    });

    // Handle onChange
    fireEvent.change(passwordField, {
      target: { name: "password", value: fakeUser.password }
    });
    
    // Expectations
    expect(emailField.value).toBe(fakeUser.email);
    expect(passwordField.value).toBe(fakeUser.password);

    // expect(handleSubmit).toHaveBeenCalledTimes(1);
    // expect(handleSubmit).toHaveBeenCalledTimes(1);
    // expect(handleSubmit).toHaveBeenCalledWith(fakeUser);
  });
});


test('allows the user to login successfully', async () => {
  // mock out window.fetch for the test
  const fakeUserResponse = {token: 'fake_user_token'}
  jest.spyOn(window, signin).mockImplementationOnce(() => {
    return Promise.resolve({
      json: () => Promise.resolve(fakeUserResponse),
    })
  });
});