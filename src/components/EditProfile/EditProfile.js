import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as yup from "yup";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import {
  getUserProfile,
  getUserUpdatedProfile,
} from "../../redux/action/editUserProfileActions";


const validationSchema = yup.object({
  name: yup
    .string("Enter your Name")
    .min(3, "Name should be of minimum 3 character in length")
    .max(20, "Name should be of maximum 20 character in length")
    .required("Name is required"),
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required")
});

const EditProfile = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [showAlert, setShowAlert] = useState(false);

  const history = useHistory();
  useEffect(() => {
    dispatch(getUserProfile(id));
  }, [dispatch]);

  const data = useSelector((state) => state.editProfile);

  const { userProfileData } = data;
  console.log(userProfileData);

  const formik = useFormik({ru
    initialValues: {
      name: userProfileData.name,
      email: userProfileData.email,
      Address: {
        city: userProfileData.Address.city,
        state: userProfileData.state,
        country: userProfileData.country,
      },
      // Address.city: userProfileData.Address.city,
      background: userProfileData.background,
      ideatostart: userProfileData.ideatostart,
      Themes: [],
      Skills: [],
      Expertise: [],
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);

      let dataEdited = {
        name: values.name,
        email: values.email,
        Address: {
          city: values.city,
          state: values.state,
          country: values.country,
        },
        background: values.background,
        ideatostart: values.ideatostart,
        Themes: [],
        Skills: [],
        Expertise: [],
      };
      dispatch(getUserUpdatedProfile(dataEdited, id));
      // setShowAlert(true);
      history.push("/");

      // alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className="container pt-3" style={{ maxWidth: "540px" }}>
      <div className="row justify-content-center p-3">
        <div className="col-md-12">
          <h1 className="pb-4">Update Profile Details</h1>
          <form onSubmit={formik.handleSubmit}>
            <div className="row">
              <div className="col-md-4 col-sm-4 col-xs-4">
                <label
                  htmlFor="name"
                  className="mt-2"
                  style={{ fontWeight: "bold" }}
                >
                  Name
                </label>
              </div>
              <div className="col-md-8 col-sm-8 col-xs-8">
                <TextField
                  fullWidth
                  id="name"
                  name="name"
                  className="pb-3"
                  variant="filled"
                  size="small"
                  type="text"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  error={formik.touched.name && Boolean(formik.errors.name)}
                  helperText={formik.touched.name && formik.errors.name}
                />
              </div>
            </div>

            <div className="row">
              <div className="col-md-4 col-sm-4 col-xs-4">
                <label
                  htmlFor="email"
                  className="mt-2"
                  style={{ fontWeight: "bold" }}
                >
                  Email
                </label>
              </div>

              <div className="col-md-8 col-sm-8 col-xs-8">
                <TextField
                  fullWidth
                  id="email"
                  name="email"
                  className="pb-3"
                  variant="filled"
                  size="small"
                  type="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                />
              </div>
            </div>

            <div className="row">
              <div className="col-md-4 col-sm-4 col-xs-4">
                <label
                  htmlFor="city"
                  className="mt-2"
                  style={{ fontWeight: "bold" }}
                >
                  City
                </label>
              </div>

              <div className="col-md-8 col-sm-8 col-xs-8">
                <TextField
                  fullWidth
                  id="city"
                  name="Address.city"
                  type="text"
                  className="pb-3"
                  variant="filled" 
                  size="small"
                  value={formik.values.Address.city}
                  onChange={formik.handleChange}
                  // error={formik.touched.city && Boolean(formik.errors.city)}
                  // helperText={formik.touched.city && formik.errors.city}
                />
              </div>
            </div>

            <div className="row">
              <div className="col-md-4 col-sm-4 col-xs-4">
                <label
                  htmlFor="state"
                  className="mt-2"
                  style={{ fontWeight: "bold" }}
                >
                  State
                </label>
              </div>

              <div className="col-md-8 col-sm-8 col-xs-8">
                <TextField
                  fullWidth
                  id="state"
                  name="state"
                  type="text"
                  className="pb-3"
                  variant="filled"
                  size="small"
                  value={formik.values.state}
                  onChange={formik.handleChange}
                  error={formik.touched.state && Boolean(formik.errors.state)}
                  helperText={formik.touched.state && formik.errors.state}
                />
              </div>
            </div>

            <div className="row">
              <div className="col-md-4 col-sm-4 col-xs-4">
                <label
                  htmlFor="country"
                  className="mt-2"
                  style={{ fontWeight: "bold" }}
                >
                  Country
                </label>
              </div>

              <div className="col-md-8 col-sm-8 col-xs-8">
                <TextField
                  fullWidth
                  id="country"
                  name="country"
                  type="text"
                  className="pb-3"
                  variant="filled"
                  size="small"
                  value={formik.values.country}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.country && Boolean(formik.errors.country)
                  }
                  helperText={formik.touched.country && formik.errors.country}
                />
              </div>
            </div>

            <div className="row">
              <div className="col-md-4 col-sm-4 col-xs-4">
                <label
                  htmlFor="background"
                  className="mt-2"
                  style={{ fontWeight: "bold" }}
                >
                  Background Details
                </label>
              </div>

              <div className="col-md-8 col-sm-8 col-xs-8">
                <TextField
                  fullWidth
                  id="background"
                  name="background"
                  type="text"
                  className="pb-3"
                  multiline
                  rows={3}
                  variant="filled"
                  size="small"
                  value={formik.values.background}
                  onChange={formik.handleChange}
                  // error={formik.touched.background && Boolean(formik.errors.background)}
                  // helperText={formik.touched.background && formik.errors.background}
                />
              </div>
            </div>

            <div className="row">
              <div className="col-md-4 col-sm-4 col-xs-4">
                <label
                  htmlFor="startupidea"
                  className="mt-2"
                  style={{ fontWeight: "bold" }}
                >
                  Startup Idea Details
                </label>
              </div>

              <div className="col-md-8 col-sm-8 col-xs-8">
                <TextField
                  fullWidth
                  id="ideatostart"
                  name="ideatostart"
                  type="text"
                  className="pb-3 mb-2"
                  multiline
                  rows={3}
                  variant="filled"
                  size="small"
                  value={formik.values.ideatostart}
                  onChange={formik.handleChange}
                />
              </div>
            </div>

            <div className="row">
              <div className="col-md-4 col-sm-4 col-xs-4">
                <label
                  htmlFor="userimage"
                  className="mt-2"
                  style={{ fontWeight: "bold" }}
                >
                  Profile Image
                </label>
              </div>

              <div className="col-md-8 col-sm-8 col-xs-8">
                <input
                  id="userimage"
                  name="userimage"
                  type="file"
                  className="pb-3 mb-2"
                  variant="filled"
                  // value={formik.values.background}
                  onChange={formik.handleChange}
                  // value={formik.values.password}
                  // onChange={formik.handleChange}
                  // error={formik.touched.password && Boolean(formik.errors.password)}
                  // helperText={formik.touched.password && formik.errors.password}
                />
              </div>
            </div>

            <hr />

            <div className="row">
              <div className="col-md-4 col-sm-4 col-xs-4">
                <label
                  htmlFor="theme"
                  className="mt-2"
                  style={{ fontWeight: "bold" }}
                >
                  Themes
                </label>
              </div>

              <div className="col-md-8 col-sm-8 col-xs-8">
                <FormControlLabel
                  control={
                    <Checkbox
                      // checked={state.checkedB}
                      // onChange={handleChange}
                      name="checkedB"
                      color="primary"
                    />
                  }
                  label="Fintech"
                />
                <br />
                <FormControlLabel
                  control={
                    <Checkbox
                      // checked={state.checkedB}
                      // onChange={handleChange}
                      name="checkedB"
                      color="primary"
                    />
                  }
                  label="Healthcare"
                />
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-md-4 col-sm-4 col-xs-4">
                <label
                  htmlFor="skills"
                  className="mt-2"
                  style={{ fontWeight: "bold" }}
                >
                  Skills
                </label>
              </div>

              <div className="col-md-8 col-sm-8 col-xs-8">
                <FormControlLabel
                  control={
                    <Checkbox
                      // checked={state.checkedB}
                      // onChange={handleChange}
                      name="checkedB"
                      color="primary"
                    />
                  }
                  label="Software Engineering"
                />
                <br />
                <FormControlLabel
                  control={
                    <Checkbox
                      // checked={state.checkedB}
                      // onChange={handleChange}
                      name="checkedB"
                      color="primary"
                    />
                  }
                  label="Growth"
                />
                <br />
                <FormControlLabel
                  control={
                    <Checkbox
                      // checked={state.checkedB}
                      // onChange={handleChange}
                      name="checkedB"
                      color="primary"
                    />
                  }
                  label="Product"
                />
                <br />
                <FormControlLabel
                  control={
                    <Checkbox
                      // checked={state.checkedB}
                      // onChange={handleChange}
                      name="checkedB"
                      color="primary"
                    />
                  }
                  label="Analytics"
                />
                <br />
                <FormControlLabel
                  control={
                    <Checkbox
                      // checked={state.checkedB}
                      // onChange={handleChange}
                      name="checkedB"
                      color="primary"
                    />
                  }
                  label="Operations"
                />
                <br />
              </div>
            </div>

            <hr />

            <div className="row">
              <div className="col-md-4 col-sm-4 col-xs-4">
                <label
                  htmlFor="expertises"
                  className="mt-2"
                  style={{ fontWeight: "bold" }}
                >
                  Expertises
                </label>
              </div>

              <div className="col-md-8 col-sm-8 col-xs-8">
                <FormControlLabel
                  control={
                    <Checkbox
                      // checked={state.checkedB}
                      // onChange={handleChange}
                      name="checkedB"
                      color="primary"
                    />
                  }
                  label="Blockchain"
                />
                <br />
                <FormControlLabel
                  control={
                    <Checkbox
                      // checked={state.checkedB}
                      // onChange={handleChange}
                      name="checkedB"
                      color="primary"
                    />
                  }
                  label="Ecommerce"
                />
                <br />
                <FormControlLabel
                  control={
                    <Checkbox
                      // checked={state.checkedB}
                      // onChange={handleChange}
                      name="checkedB"
                      color="primary"
                    />
                  }
                  label="Product"
                />
                <br />
                <FormControlLabel
                  control={
                    <Checkbox
                      // checked={state.checkedB}
                      // onChange={handleChange}
                      name="checkedB"
                      color="primary"
                    />
                  }
                  label="Analytics"
                />
                <br />
                <FormControlLabel
                  control={
                    <Checkbox
                      // checked={state.checkedB}
                      // onChange={handleChange}
                      name="checkedB"
                      color="primary"
                    />
                  }
                  label="Operations"
                />
              </div>
            </div>

            <Button
              color="primary"
              variant="contained"
              fullWidth
              type="submit"
              className="mt-4"
            >
              Update Profile
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
