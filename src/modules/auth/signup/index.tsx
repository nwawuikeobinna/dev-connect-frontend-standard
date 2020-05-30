import React from "react";
import Layout from "../../../layouts/outer";
import { connect } from "react-redux";
import { withFormik, Form, Field } from "formik";
import { signup } from "../../../redux/actions";
import { SignupValidations } from "./validator";
import { CustomInputComponent } from "../../../helpers/formik/custom-input";
import Logo from "../../../components/logo";

interface Props {
  loading: boolean;
}

const SignupPage = (props: Props) => {
  return (
    <Layout {...props}>
      <Logo />

      <div className="right_hand_side">
        <div className="form_box">
          <Form>
            <Field
              name="name"
              title="Name"
              type="text"
              placeholder=""
              component={CustomInputComponent}
            />

            <Field
              name="email"
              title="Email"
              type="email"
              placeholder=""
              component={CustomInputComponent}
            />

            <Field
              name="password"
              title="Password"
              type="password"
              placeholder=""
              component={CustomInputComponent}
            />

            <div className="input_group">
              <button
                className="button-orange-lg"
                type="submit"
                disabled={props.loading}
              >
                {props.loading ? (
                  <i className="fa fa-spinner fa-spin" />
                ) : (
                  <i className="ion-ios-lock" />
                )}
                &nbsp; Sign up
              </button>
            </div>
          </Form>
        </div>
      </div>
    </Layout>
  );
};

const mapStateToProps = (state: any) => {
  return {
    loading: state.request.loading,
  };
};

const mapDispatchToProps = {
  signup,
};

const FormikConnect = withFormik({
  mapPropsToValues({
    name,
    email,
    password
  }: any) {
    return {
      name: name || "",
      email: email || "",
      password: password || "",
    };
  },
  validationSchema: SignupValidations(),
  handleSubmit: async (
    values: any,
    { props, resetForm, setErrors, setSubmitting }: any
  ) => {
    props.signup(values, props);
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormikConnect(SignupPage));
