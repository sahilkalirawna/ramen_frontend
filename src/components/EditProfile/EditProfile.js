import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getUserUpdatedProfile,
  getUserProfile,
} from "../../redux/action/editUserProfileActions";

const EditProfile = () => {

  const data = useSelector((state) => state.editProfile);
  const { userProfileData } = data;

  const { id } = useParams();
  const dispatch = useDispatch();
  const [showAlert, setShowAlert] = useState(false);
  const [Name, setName] = useState("");
  const history = useHistory();

  useEffect(() => {
    dispatch(getUserProfile(id));
  }, [dispatch, id]);

  // const data = useSelector((state) => state.editProfile);
  // const { userProfileData } = data;
  console.log(userProfileData);

  const onSubmit = () => {
    let dataEdited = {
      name: Name,
      email: "",
    };
    console.log(dataEdited);
    dispatch(getUserUpdatedProfile(dataEdited, id));
    history.push("/");
  };

  
  return (
    <div className="container pt-3" style={{ maxWidth: "540px" }}>
      <div className="row justify-content-center p-3">
        <div className="col-md-12">
          <h1 className="pb-4">Update Profile Details</h1>
          <form onSubmit={onSubmit}>
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
                  value={Name || userProfileData.name}
                  onChange={(event) => setName(event.target.value)}
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
