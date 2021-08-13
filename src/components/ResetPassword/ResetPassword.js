import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import Alert from "react-bootstrap/Alert";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import * as yup from "yup";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { sendResetPassword } from "../../redux/action/generalActions";

// import { Link } from "react-router-dom";

const validationSchema = yup.object({
  newPassword: yup
    .string("Enter your password")
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
});

const ResetPassword = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { resetPassToken } = useParams();
  const [showAlert, setShowAlert] = useState(false);

  const data = useSelector((state) => state.general);
  let { errorMessage, isResetPassword } = data;

  useEffect(() => {
    isResetPassword && history.push("/");
    console.log(isResetPassword);
  }, [history, isResetPassword]);

  const formik = useFormik({
    initialValues: {
      newPassword: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      const data = {
        newPasword: values.newPassword,
        resetPasswordLink: resetPassToken,
      };
      dispatch(sendResetPassword(data));
      setShowAlert(true);
      resetForm();
    },
  });

  // forgotPassword

  return (
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
          id="newPassword"
          name="newPassword"
          label="Enter New Password"
          className="pb-3"
          type="password"
          variant="filled"
          value={formik.values.newPassword}
          onChange={formik.handleChange}
          error={
            formik.touched.newPassword && Boolean(formik.errors.newPassword)
          }
          helperText={formik.touched.newPassword && formik.errors.newPassword}
        />
        <Button color="primary" variant="contained" fullWidth type="submit">
          Change Password
        </Button>
      </form>
    </div>
  );
};

export default ResetPassword;
