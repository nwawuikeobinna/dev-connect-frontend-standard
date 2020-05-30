import React from 'react';
import Layout from '../../../layouts/outer';
import {connect} from 'react-redux';
import {withFormik, Form, Field} from 'formik';
import {signin} from '../../../redux/actions';
import {LoginValidations} from './validator';
import {CustomInputComponent} from '../../../helpers/formik/custom-input';
import Logo from "../../../components/logo";

interface Props {
  history: any;
  loading: boolean;
  setSubmitting: any;
  handleSubmit: any;
}

const LoginPage = (props: Props) => {
  return (
    <Layout {...props}>
      <Logo />

      <div className="right_hand_side">
        <div className="form_box">
          <Form>
            <Field
              name="email"
              title="Email"
              type="text"
              placeholder="Email address"
              component={CustomInputComponent}
            />
            <Field
              name="password"
              title="Password"
              type="password"
              placeholder="Password"
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
                &nbsp; Log in
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
  signin,
};

const FormikConnect = withFormik({
  mapPropsToValues({email, password}: any) {
    return {
      email: email || '',
      password: password || '',
    };
  },
  validationSchema: LoginValidations(),
  handleSubmit: async (
    values: any,
    {props, resetForm, setErrors, setSubmitting}: any
  ) => {
    props.signin(values, props);
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormikConnect(LoginPage));
