import React, { lazy } from "react";
import { Route, Switch } from "react-router-dom";
import PrivateRoute from "./auth/PrivateRouter";

const Home = lazy(() => import("./components/Home/Home"));
const Login = lazy(() => import("./components/login/Login"));
const Signup = lazy(() => import("./components/Signup/Signup"));
const PageNotFound_404 = lazy(() =>
  import("./components/pageNotFound/PageNotFound_404")
);
const ForgotPassword = lazy(() =>
  import("./components/ForgotPassword/ForgotPassword")
);

const MainRouter = () => {
  return (
    <>
      <Switch>
        <PrivateRoute path='/' name='Home' exact component={Home} />
        <Route path='/login' name='Login' exact component={Login} />
        <Route path='/signup' name='Signup' exact component={Signup} />
        <Route
          path='/forgotpassword'
          name='Forgot_Password'
          exact
          component={ForgotPassword}
        />
        <Route
          path='404'
          name='PageNotFound_404'
          exact
          component={PageNotFound_404}
        />
        <Route path='*' name='PageNotFound_404' component={PageNotFound_404} />
      </Switch>
    </>
  );
};

export default MainRouter;
