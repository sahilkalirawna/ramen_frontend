import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { Link } from "react-router-dom";

const validationSchema = yup.object({
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
});

const ForgotPassword = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className='row justify-content-center p-3'>
      <form
        onSubmit={formik.handleSubmit}
        className='col-sm-12 col-md-6 col-lg-4 '
      >
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
          Create a new Account. <Link to='/signup'>Signup</Link>
        </p>
      </form>
    </div>
  );
};

export default ForgotPassword;
