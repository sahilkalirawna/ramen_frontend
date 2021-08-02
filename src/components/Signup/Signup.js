import React, { useState } from "react";
import Alert from "react-bootstrap/Alert";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import * as yup from "yup";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { Link, withRouter } from "react-router-dom";
import { getSignUp } from "../../redux/action/generalActions";

const validationSchema = yup.object({
  name: yup
    .string("Enter your Name")
    .min(3, "Name should be of minimum 3 character in length")
    .max(20, "Name should be of maximum 20 character in length")
    .required("Name is required"),
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string("Enter your password")
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
});

const Signup = () => {
  const dispatch = useDispatch();
  const [showAlert, setShowAlert] = useState(false);

  // const history = useHistory();

  const data = useSelector((state) => state.general);
  let { isSignedUp, errorMessage } = data;

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      let data = {
        name: values.name,
        email: values.email,
        password: values.password,
      };
      dispatch(getSignUp(data));
      setShowAlert(true);
      resetForm();
      // isSignedUp && history.push("/login");
    },
  });

  return (
    <div className='row justify-content-center p-3'>
      <form
        onSubmit={formik.handleSubmit}
        className='col-sm-12 col-md-6 col-lg-4'
      >
        {showAlert && errorMessage && (
          <Alert variant='danger'>{errorMessage}</Alert>
        )}
        {isSignedUp && (
          <Alert variant='success'>
            Account created. Please <Link to='/login'>Log in</Link>
          </Alert>
        )}
        <TextField
          fullWidth
          id='name'
          name='name'
          label='Name'
          className='pb-3'
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />
        <TextField
          fullWidth
          id='email'
          name='email'
          label='Email'
          className='pb-3'
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
          fullWidth
          id='password'
          name='password'
          label='Password'
          type='password'
          className='pb-3'
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        <Button color='primary' variant='contained' fullWidth type='submit'>
          Sign Up
        </Button>
        <p className='pt-3'>
          Already Have an Account. <Link to='/login'>Log in</Link>
        </p>
      </form>
    </div>
  );
};

export default withRouter(Signup);
