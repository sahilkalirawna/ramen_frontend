import React, { useEffect, useState } from "react";
import { Formik } from "formik";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as yup from "yup";
// import Alert from "react-bootstrap/Alert";
import { Checkbox, FormControlLabel } from "@material-ui/core";

// import  { useFormInput} from "../hook"
import {
  getUserUpdatedProfile,
  getUserProfile,
} from "../../redux/action/editUserProfileActions";
// import { ThemeConsumer } from "react-bootstrap/esm/ThemeProvider";
// import { getQualitiesData } from "../../redux/action/leftMenuActions";

const validationSchema = yup.object({
  name: yup
    .string("Enter your Name")
    .min(3, "Name should be of minimum 3 character in length")
    .max(20, "Name should be of maximum 20 character in length")
    .required("Name is required !"),
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required !"),
  city: yup
    .string("Enter your city")
    .required("City is required !"),
  state: yup
    .string("Enter your state")
    .required("State is required !"),
  country: yup
    .string("Enter your country")
    .required("Country is required !"),
});

const EditProfile = () => {
  const [theme, setTheme] = useState([]);
  const [skill, setSkill] = useState([]);
  const [exper, setExpertise] = useState([]);

  const history = useHistory();
  const dispatch = useDispatch();
  const { userId } = useParams();
  console.log("Edit", userId);

  useEffect(() => {
    dispatch(getUserProfile(userId));
  }, [dispatch, userId]);

  const all = useSelector((state) => state.leftmenudata);
  const { themes, skills, expertise } = all;
  // console.log("All Themes", themes);

  const data = useSelector((state) => state.editProfile);
  const { userProfileData } = data;
  console.log("Profile", userProfileData);

  useEffect(() => {
    setTheme(
      userProfileData.Themes && userProfileData.Themes.map((d) => d._id)
    );

    setSkill(
      userProfileData.Skills && userProfileData.Skills.map((d) => d._id)
    );

    setExpertise(
      userProfileData.Expertise && userProfileData.Expertise.map((d) => d._id)
    );
  }, [
    userProfileData.Themes,
    userProfileData.Skills,
    userProfileData.Expertise,
  ]);

  const handleChangeThemes = (event) => {
    let newArray = [...theme, event.target.value];
    if (theme.includes(event.target.value)) {
      newArray = newArray.filter((day) => day !== event.target.value);
    }
    setTheme(newArray);
  };

  const handleChangeSkills = (event) => {
    let newArray = [...skill, event.target.value];
    if (skill.includes(event.target.value)) {
      newArray = newArray.filter((day) => day !== event.target.value);
    }
    setSkill(newArray);
  };

  const handleChangeExpertise = (event) => {
    let newArray = [...exper, event.target.value];
    if (exper.includes(event.target.value)) {
      newArray = newArray.filter((day) => day !== event.target.value);
    }
    setExpertise(newArray);
  };

  return (
    <div className="container pt-3" style={{ maxWidth: "540px" }}>
      <div className="row justify-content-center p-3">
        <div className="col-md-12">
          <h1 className="pb-4">Update Profile Details</h1>

          <Formik
            validationSchema={validationSchema}
            enableReinitialize={true}
            initialValues={{
              name: userProfileData.name,
              email: userProfileData.email,
              city:
                userProfileData && userProfileData.Address
                  ? userProfileData.Address.city
                  : "",
              state:
                userProfileData && userProfileData.Address
                  ? userProfileData.Address.state
                  : "",
              country:
                userProfileData && userProfileData.Address
                  ? userProfileData.Address.country
                  : "",
              background: userProfileData.background,
              ideatostart: userProfileData.ideatostart,
              userimg: userProfileData.userimg,
              Themes: theme,
              Skills: skill,
              Expertise: exper,
            }}
            onSubmit={async (values) => {
              await new Promise((resolve) => setTimeout(resolve, 500));
              // alert(JSON.stringify(values, null, 2));

              let query = {
                name: values.name,
                email: values.email,
                city: values.city,
                state: values.state,
                country: values.country,
                background: values.background,
                ideatostart: values.ideatostart,
                userimg: values.userimg,
                Themes: values.Themes,
                Skills: values.Skills,
                Expertise: values.Expertise,
              };

              console.log(query);
              // alert(query);
              dispatch(getUserUpdatedProfile(query, userId));
              history.push("/");
            }}
          >
            {(props) => {
              const {
                values,
                // touched,
                errors,
                isSubmitting,
                handleChange,
                handleBlur,
                handleSubmit,
              } = props;

              return (
                <form onSubmit={handleSubmit}>
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
                        // name="Name"
                        className="pb-3"
                        variant="filled"
                        size="small"
                        type="text"
                        value={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {errors.name && (
                        <div style={{ color: "red" }}>{errors.name}</div>
                      )}
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
                        className="pb-3"
                        variant="filled"
                        size="small"
                        type="email"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {errors.email && (
                        <div style={{ color: "red" }}>{errors.email}</div>
                      )}
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
                        className="pb-3"
                        variant="filled"
                        size="small"
                        type="text"
                        value={values.city}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {errors.city && (
                        <div style={{ color: "red" }}>{errors.city}</div>
                      )}
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
                        className="pb-3"
                        variant="filled"
                        size="small"
                        type="text"
                        value={values.state}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {errors.state && (
                        <div style={{ color: "red" }}>{errors.state}</div>
                      )}
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
                        className="pb-3"
                        variant="filled"
                        size="small"
                        type="country"
                        value={values.country}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {errors.country && (
                        <div style={{ color: "red" }}>{errors.country}</div>
                      )}
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
                        className="pb-3"
                        variant="filled"
                        size="small"
                        type="text"
                        value={values.background}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        rows={3}
                        multiline
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
                        className="pb-3"
                        variant="filled"
                        size="small"
                        type="text"
                        value={values.ideatostart}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        rows={3}
                        multiline
                      />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-4 col-sm-4 col-xs-4">
                      <label
                        htmlFor="userimg"
                        className="mt-2"
                        style={{ fontWeight: "bold" }}
                      >
                        Profile Image
                      </label>
                    </div>
                    <div className="col-md-8 col-sm-8 col-xs-8">
                      <TextField
                        fullWidth
                        id="userimage"
                        className="pb-3"
                        variant="filled"
                        size="small"
                        type="file"
                        value={values.userimg}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-4 col-sm-4 col-xs-4">
                      <label
                        htmlFor="themes"
                        className="mt-2"
                        style={{ fontWeight: "bold" }}
                      >
                        Themes
                      </label>
                    </div>

                    <div className="col-md-8 col-sm-8 col-xs-8">
                      {themes.length > 0 &&
                        themes.map((data) => (
                          <>
                            <FormControlLabel
                              control={
                                <Checkbox
                                  name={data.name}
                                  checked={
                                    values.Themes &&
                                    values.Themes.find((d) => d === data._id)
                                      ? true
                                      : false
                                  }
                                  onChange={handleChangeThemes}
                                  id="Theme"
                                  color="primary"
                                  value={data._id}
                                />
                              }
                              label={data.name}
                            />
                          </>
                        ))}
                      <br />
                    </div>
                  </div>

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
                      {skills.length > 0 &&
                        skills.map((data) => (
                          <>
                            <FormControlLabel
                              control={
                                <Checkbox
                                  name={data.name}
                                  checked={
                                    values.Skills &&
                                    values.Skills.find((d) => d === data._id)
                                      ? true
                                      : false
                                  }
                                  onChange={handleChangeSkills}
                                  id="Skill"
                                  color="primary"
                                  value={data._id}
                                />
                              }
                              label={data.name}
                            />
                          </>
                        ))}
                      <br />
                    </div>
                  </div>

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
                      {expertise.length > 0 &&
                        expertise.map((data) => (
                          <>
                            <FormControlLabel
                              control={
                                <Checkbox
                                  name={data.name}
                                  checked={
                                    values.Expertise &&
                                    values.Expertise.find((d) => d === data._id)
                                      ? true
                                      : false
                                  }
                                  onChange={handleChangeExpertise}
                                  id="Expertise"
                                  color="primary"
                                  value={data._id}
                                />
                              }
                              label={data.name}
                            />
                          </>
                        ))}
                      <br />
                    </div>
                  </div>

                  <Button
                    color="primary"
                    variant="contained"
                    fullWidth
                    type="submit"
                    className="mt-4"
                    disabled={isSubmitting}
                  >
                    Update Profile
                  </Button>
                </form>
              );
            }}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
