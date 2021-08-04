import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import {getSingleUser} from "../../redux/action/userProfileAction"
const EditProfile = () => {

  const {id} = useParams();
  const dispatch = useDispatch();
  const [showAlert, setShowAlert] = useState(false);
  const history = useHistory();

  useEffect(() => {
    console.log('hi');
    dispatch(getSingleUser(id));
  },[dispatch]);

  const data = useSelector((state) => state.singleUser);
  const {userData} = data;
  console.log(userData);

  const formik = useFormik({
    initialValues: {
      name: userData.name,
      // email: userData.email,
      // Address: {
      //   city: userData.city,
      //   state: userData.state,
      //   country: userData.country,
      // },
      // background: userData.background,
      // ideatostart: userData.ideatostart,
      // Themes: [],
      // Skills: [],
      // Expertise: [],
    },

    onSubmit: (values) => {
      console.log(values);

      let dataEdited = {
        name: values.name,
        // email: values.email,
        // Address: {
        //   city: values.city,
        //   state: values.state,
        //   country: values.country,
        // },
        // background: values.background,
        // ideatostart: values.ideatostart,
        // Themes: [],
        // Skills: [],
        // Expertise: [],
      };
      dispatch(getSingleUser(dataEdited, id));
      history.push("/");
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
