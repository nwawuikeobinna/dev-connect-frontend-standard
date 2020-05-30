import React, { lazy, Suspense } from "react";
import {Switch, Route} from "react-router-dom";
import UserRoute from "./UserRoute";
import GuestRoute from "./GuestRoute";
import Loader from "../components/spinners/spinner-one";

const DashboardModule = lazy(() => import("../modules/user"));
const HomePage = lazy(() => import("../modules/home"));
const SignupPage = lazy(() => import("../modules/auth/signup"));
const LoginPage = lazy(() => import("../modules/auth/login"));
const PageNotFound = lazy(() => import("../modules/404/PageNotFound"));

const index =()=>{
  return (
      <Suspense fallback={<Loader />}>
        <Switch>
          <GuestRoute exact={true} path="/" component={HomePage} />
          <UserRoute exact={true} path="/dashboard" component={DashboardModule} />
          <GuestRoute exact={true} path="/login" component={LoginPage} />
          <GuestRoute exact={true} path="/signup" component={SignupPage} />
          <GuestRoute component={PageNotFound} />
        </Switch>
      </Suspense>
  );
};

export default index;