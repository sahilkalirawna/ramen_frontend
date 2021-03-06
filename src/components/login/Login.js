import React, { useState } from "react";
import { useFormik } from "formik";
import Alert from "react-bootstrap/Alert";
import { useDispatch, useSelector } from "react-redux";

import * as yup from "yup";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { Link, useHistory } from "react-router-dom";
import { getLogIn } from "../../redux/action/generalActions";

const validationSchema = yup.object({
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string("Enter your password")
    .min(5, "Password should be of minimum 8 characters length")
    .required("Password is required"),
});

const Login = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [showAlert, setShowAlert] = useState(false);
  const data = useSelector((state) => state.general);
  let { errorMessage } = data;

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      const data = {
        email: values.email,
        password: values.password,
      };
      dispatch(getLogIn(data, history));
      setShowAlert(true);
    },
  });

  return (
    <div className="container-fluid">
      <div className="row justify-content-center p-3">
        <form
          onSubmit={formik.handleSubmit}
          className="col-sm-12 col-md-6 col-lg-4 "
        >
          {showAlert && errorMessage && (
            <Alert variant="danger">{errorMessage}</Alert>
          )}
          <TextField
            fullWidth
            id="email"
            name="email"
            label="Email"
            className="pb-3"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <TextField
            fullWidth
            id="password"
            name="password"
            label="Password"
            type="password"
            className="pb-3"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
          <Button color="primary" variant="contained" fullWidth type="submit">
            Login
          </Button>
          <div className="d-flex justify-content-between pt-3">
            <p>
              Create an Account. <Link to="/signup">Signup</Link>
            </p>
            <p>
              <Link to="/forgotpassword">Forgot Password?</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
