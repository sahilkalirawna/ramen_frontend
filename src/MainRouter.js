import React, { lazy } from "react";
import { Route, Switch } from "react-router-dom";
import PrivateRoute from "./auth/PrivateRouter";

const Home = lazy(() => import("./components/Home/Home"));
const EditProfile = lazy(() => import("./components/EditProfile/EditProfile"));
const Login = lazy(() => import("./components/login/Login"));
const Signup = lazy(() => import("./components/Signup/Signup"));
const ResetPassword = lazy(() =>
  import("./components/ResetPassword/ResetPassword")
);
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
        <PrivateRoute
          path='/editprofile/:userId'
          name='Edit_Profile'
          exact
          component={EditProfile}
        />
        <Route path='/login' name='Login' exact component={Login} />
        <Route path='/signup' name='Signup' exact component={Signup} />
        <Route
          path='/forgotpassword'
          name='Forgot_Password'
          exact
          component={ForgotPassword}
        />
        <Route
          path='/resetPassword/:resetPassToken'
          name='Reset_Password'
          exact
          component={ResetPassword}
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
