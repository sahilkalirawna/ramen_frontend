/* eslint-disable eqeqeq */
import React, { useEffect, useState } from "react";
import { Formik } from "formik";
// import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  getUserProfile,
  getUserUpdatedProfile,
} from "./../../redux/action/editUserProfileActions";
import { useParams } from "react-router-dom";
// import { getSearchProfile } from "../../redux/action/leftMenuActions";
import { FormControlLabel, Checkbox } from "@material-ui/core";

const EditFormik = () => {
  const dispatch = useDispatch();
  const { userId } = useParams();
  // const [done, setDone] = useState(false);
  const [them, setTheme] = useState([]);

  useEffect(() => {
    console.log("Hi");
    dispatch(getUserProfile(userId));
  }, [dispatch, userId]);

  const history = useHistory();
  const all = useSelector((state) => state.leftmenudata);
  const { themes } = all;
  console.log(themes);
  const data = useSelector((state) => state.edit);
  const { userProfileData } = data;
  console.log(userProfileData);
  useEffect(() => {
    setTheme(
      userProfileData.Themes && userProfileData.Themes.map((d) => d._id)
    );
  }, [userProfileData.Themes]);
  console.log(them);

  const handleChangeThemes = (event) => {
    let newArray = [...them, event.target.value];
    if (them.includes(event.target.value)) {
      newArray = newArray.filter((day) => day !== event.target.value);
    }
    setTheme(newArray);
  };

  console.log(them);
  // console.log(done);
  return (
    <div>
      <Formik
        enableReinitialize={true}
        initialValues={{
          name: userProfileData.name,
          Themes: them,
        }}
        onSubmit={async (values) => {
          await new Promise((resolve) => setTimeout(resolve, 500));
          alert(JSON.stringify(values, null, 2));
          let query = {
            name: values.name,
            Themes: values.Themes,
          };
          dispatch(getUserUpdatedProfile(query, userId));
          history.push("/");
        }}
      >
        {(props) => {
          const {
            values,
            isSubmitting,
            handleChange,
            handleBlur,
            handleSubmit,
          } = props;
          return (
            <form onSubmit={handleSubmit}>
              <label htmlFor="name" style={{ display: "block" }}>
                Name
              </label>
              <input
                id="name"
                placeholder="Enter your email"
                type="text"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {themes.length > 0 &&
                themes.map((data) => (
                  <FormControlLabel
                    control={
                      <Checkbox
                        name={data.name}
                        checked={
                          values.Themes &&
                          values.Themes.find((d) => d == data._id)
                            ? true
                            : false
                        }
                        onChange={handleChangeThemes}
                        value={data._id}
                        id="Theme"
                        color="primary"
                      />
                    }
                    label={data.name}
                  />
                ))}

              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </form>
          );
        }}
      </Formik>
    </div>
  );
};

export default EditFormik;
