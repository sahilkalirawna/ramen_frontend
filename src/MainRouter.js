import React, { lazy } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import PrivateRoute from "./auth/PrivateRouter";

const Home = lazy(() => import("./components/Home/Home"));
const Login = lazy(() => import("./components/login/Login"));
const Signup = lazy(() => import("./components/Signup/Signup"));
const viewProfile = lazy(() =>
  import("./components/viewProfile/viewProfile.js")
);
const EditProfile = lazy(() => import("./components/EditProfile/EditProfile"));
const ResetPassword = lazy(() =>
  import("./components/ResetPassword/ResetPassword")
);
const ForgotPassword = lazy(() =>
  import("./components/ForgotPassword/ForgotPassword")
);
const PageNotFound_404 = lazy(() =>
  import("./components/pageNotFound/PageNotFound_404")
);
const EditFormik = lazy(() => import("./components/EditFormik/EditFormik"));

const MainRouter = () => {
  let token = useSelector((state) => state.general);
  let { loginData } = token;
  console.log(loginData);

  // if (loginData) {
  //   console.log("Authenticated", loginData.token);
  // } else {
  //   console.log("Not Authenticated");
  // }

  return (
    <>
      {loginData.token ? (
        <Switch>
          <Route path="/" name="Home" exact component={Home} />
          <Route
            path="/editprofile/:userId"
            name="Edit_Profile"
            exact
            component={EditFormik}
          />

          <Route
            path="/profile/:userId"
            name="User Profile"
            exact
            component={viewProfile}
          />

          <Route
            path="404"
            name="PageNotFound_404"
            exact
            component={PageNotFound_404}
          />
          <Route
            path="*"
            name="PageNotFound_404"
            component={PageNotFound_404}
          />
        </Switch>
      ) : (
        <>
          <Switch>
            <Route path="/login" name="Login" exact component={Login} />
            <Route path="/signup" name="Signup" exact component={Signup} />
            <Route
              path="/forgotpassword"
              name="Forgot_Password"
              exact
              component={ForgotPassword}
            />
            <Route
              path="/resetPassword/:resetPassToken"
              name="Reset_Password"
              exact
              component={ResetPassword}
            />
          </Switch>
          <Redirect to="/login" />
        </>
      )}
    </>
  );
};

export default MainRouter;
