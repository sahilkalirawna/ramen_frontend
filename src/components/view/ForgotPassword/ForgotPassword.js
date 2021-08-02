import React, { useState } from "react";
import Alert from "react-bootstrap/Alert";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import * as yup from "yup";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { sendForgotPassword } from "../../../redux/action/generalActions";
import { Link } from "react-router-dom";

// import { Link } from "react-router-dom";

const validationSchema = yup.object({
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
});

const ForgotPassword = () => {
  const dispatch = useDispatch();
  const [showAlert, setShowAlert] = useState(false);

  const data = useSelector((state) => state.general);
  let { forgotPassword, errorMessage } = data;

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      const data = {
        email: values.email,
      };
      // alert(JSON.stringify(values, null, 2));
      dispatch(sendForgotPassword(data));
      setShowAlert(true);
      resetForm();
    },
  });

  // forgotPassword

  return (
    <div className='row justify-content-center p-3'>
      <form
        onSubmit={formik.handleSubmit}
        className='col-sm-12 col-md-6 col-lg-4 '
      >
        {errorMessage && showAlert && (
          <Alert variant='danger'>{errorMessage}</Alert>
        )}
        {showAlert && forgotPassword.message && (
          <Alert variant='info'>{forgotPassword.message}</Alert>
        )}
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
        <Button color='primary' variant='contained' fullWidth type='submit'>
          Send Recovery Email
        </Button>
        <p className='pt-3'>
          Already Have an Account. <Link to='/login'>Log in</Link>
        </p>
      </form>
    </div>
  );
};

export default ForgotPassword;
