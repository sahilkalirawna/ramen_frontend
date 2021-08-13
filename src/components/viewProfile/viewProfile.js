/* eslint-disable eqeqeq */
import React, { useEffect, useState } from "react";
import DefaultImg from "../../assets/man.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faLink, faCheckSquare } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import {
  getSingleUser,
  postCofounderChange,
} from "../../redux/action/userProfileAction";
import { FormControlLabel, Checkbox } from "@material-ui/core";
import { useParams, Link } from "react-router-dom";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
} from "@material-ui/core";

import ViewProfileSkeleton from "./ViewProfileSkeleton";
import { sendMessage } from "../../redux/action/activateFounderAction";

const ViewProfile = () => {
  const dispatch = useDispatch();
  const { userId: userIdParam } = useParams();
  const [open, setOpen] = useState(false);
  const [timeCommit, setTimeCommit] = useState([]);
  const [preferedCustomer, setPreferedCustomer] = useState([]);
  const [coFounderPreference, setCoFounderPreference] = useState([]);

  useEffect(() => {
    dispatch(getSingleUser(userIdParam));
  }, [dispatch, userIdParam]);

  const generalData = useSelector((state) => state.general);
  const { loginData } = generalData;

  console.log("Login Id", loginData.userId);
  // console.log("Param Id", userIdParam);

  const singleUserData = useSelector((state) => state.singleUser);
  let { userData, isLoading, userCofounderData } = singleUserData;
  // console.log("singleUser Data", singleUserData);

  // console.log("UserData", userData);
  console.log("UserCofounderData", userCofounderData);

  const sendmessage = () => {
    alert("hi");
    dispatch(sendMessage(userIdParam, loginData.userId));
  };
  useEffect(() => {
    setTimeCommit(
      userCofounderData.Timecommit &&
        userCofounderData.Timecommit.map((d) => d._id)
    );
    setPreferedCustomer(
      userCofounderData.preferedcustomer &&
        userCofounderData.preferedcustomer.map((d) => d._id)
    );
    setCoFounderPreference(
      userCofounderData.preference &&
        userCofounderData.preference.map((d) => d._id)
    );
  }, [
    userCofounderData.Timecommit,
    userCofounderData.preferedcustomer,
    userCofounderData.preference,
  ]);
  console.log("useEffect", timeCommit);
  console.log(coFounderPreference);
  console.log(preferedCustomer);

  const handleClickOpen = () => () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleSubmit = () => {
    const data = {
      Timecommit: timeCommit,
      preference: preferedCustomer,
      copreference: coFounderPreference,
    };
    console.log(data);
    dispatch(postCofounderChange(data, userIdParam));
    setOpen(false);
  };

  const all = useSelector((state) => state.leftmenudata);
  const { timecommit, preference, copreference } = all;

  const handleChangeTime = (event) => {
    let newArray = [...timeCommit, event.target.value];
    if (timeCommit.includes(event.target.value)) {
      newArray = newArray.filter((day) => day !== event.target.value);
    }
    setTimeCommit(newArray);
    console.log("timeCommit", timeCommit);
  };

  const handleChangePreferedCustomer = (event) => {
    let newArray = [...preferedCustomer, event.target.value];
    if (preferedCustomer.includes(event.target.value)) {
      newArray = newArray.filter((day) => day !== event.target.value);
    }
    setPreferedCustomer(newArray);
    console.log("preferedCoustomer", preferedCustomer);
  };

  const handleChangePreference = (event) => {
    let newArray = [...coFounderPreference, event.target.value];
    if (coFounderPreference.includes(event.target.value)) {
      newArray = newArray.filter((day) => day !== event.target.value);
    }
    setCoFounderPreference(newArray);
    console.log("Cofounder", coFounderPreference);
  };

  const activateProfileModel = () => {
    return (
      <Dialog
        open={open}
        fullWidth
        onClose={handleClose}
        scroll="paper"
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">
          Cofounder Maching Profile
        </DialogTitle>
        <DialogContent dividers="paper">
          <DialogContentText
            id="scroll-dialog-description"
            tabIndex={-1}
            className="text-dark"
          >
            Update your cofounder matching profile
            {timecommit && timecommit.length > 0 && (
              <div className="mb-3">
                <p className="card-text fw-bolder mb-2">Time Commitment</p>
                {/* Add Map Here */}
                {timecommit.map((data) => (
                  <>
                    <FormControlLabel
                      control={
                        <Checkbox
                          name={data.name}
                          checked={
                            timeCommit && timeCommit.find((d) => d == data._id)
                              ? true
                              : false
                          }
                          onChange={handleChangeTime}
                          value={data._id}
                          id="timecommit"
                          color="primary"
                        />
                      }
                      label={data.name}
                    />
                    <br />
                  </>
                ))}
              </div>
            )}
            {preference && preference.length > 0 && (
              <div className="mb-3">
                <p className="card-text fw-bolder mb-2">Cofounder Preference</p>

                {/* Add Map Here */}
                {preference.map((data) => (
                  <>
                    <FormControlLabel
                      control={
                        <Checkbox
                          name={data.name}
                          checked={
                            coFounderPreference &&
                            coFounderPreference.find((d) => d == data._id)
                              ? true
                              : false
                          }
                          onChange={handleChangePreference}
                          value={data._id}
                          id="preference"
                          color="primary"
                        />
                      }
                      label={data.name}
                    />
                    <br />
                  </>
                ))}
              </div>
            )}
            {copreference && copreference.length > 0 && (
              <div className="mb-3">
                <p className="card-text fw-bolder mb-2">
                  Preferred Customer Segments
                </p>
                {/* Add Map Here */}
                {copreference.map((data) => (
                  <>
                    <FormControlLabel
                      control={
                        <Checkbox
                          name={data.name}
                          checked={
                            preferedCustomer &&
                            preferedCustomer.find((d) => d == data._id)
                              ? true
                              : false
                          }
                          onChange={handleChangePreferedCustomer}
                          value={data._id}
                          id="Cofounder"
                          color="primary"
                        />
                      }
                      label={data.name}
                    />
                    <br />
                  </>
                ))}
              </div>
            )}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Save Changes
          </Button>
        </DialogActions>
      </Dialog>
    );
  };

  return (
    <>
      {!isLoading ? (
        <div className="container pt-5">
          {/* <viewProfileSkeleton /> */}
          <div className="row justify-content-center">
            {/* Profile Photo */}
            <div className="col-sm-4 col-md-3 mb-3">
              <div className="d-flex flex-column align-items-center">
                <img
                  src={DefaultImg}
                  className="img-thumbnail"
                  alt="Default_Img"
                  loading="lazy"
                />
                <div className="pt-3">
                  {userData.lookingforfounder && (
                    <div className="border border-secondary rounded p-2 text-wrap text-center">
                      Looking for Cofounder
                    </div>
                  )}
                </div>
                <div className="pt-3">
                  <div className="btn btn-secondary" onClick={sendmessage}>
                    Send Message
                  </div>
                </div>
              </div>
            </div>
            {/* Profile Data */}
            <div className="col-sm-12 col-md-9">
              <div className="d-flex">
                <div className="fs-3 fw-bold flex-grow-1 text-capitalize">
                  {userData.name}
                </div>
                <div className="fs-3 px-3">
                  <FontAwesomeIcon icon={faLinkedin} className="m-1" />
                  <FontAwesomeIcon icon={faTwitter} className="m-1" />
                  <FontAwesomeIcon icon={faLink} className="m-1" />
                </div>
                {loginData.userId === userIdParam && (
                  <Link
                    to={`/editprofile/${loginData.userId}`}
                    exact
                    className="btn btn-secondary"
                  >
                    Edit Profile
                  </Link>
                )}
              </div>
              <div className="fw-light text-capitalize mb-3">
                {userData.Address && (
                  <>
                    {userData.Address.city}, {userData.Address.state},{" "}
                    {userData.Address.country},
                  </>
                )}
              </div>

              {/* Qualites */}
              <div>
                {userData.Themes && userData.Themes.length > 0 && (
                  <div className="row ">
                    <div className="col-3">Themes</div>
                    <div className="col-9  d-flex flex-wrap">
                      {userData.Themes &&
                        userData.Themes.length > 0 &&
                        userData.Themes.map((data) => (
                          <span
                            className="rounded btn-secondary me-3 mb-3 px-3 text-nowrap py-1 text-capitalize"
                            key={data.name}
                          >
                            {data.name}
                          </span>
                        ))}
                    </div>
                  </div>
                )}
                {userData.Skills && userData.Skills.length > 0 && (
                  <div className="row ">
                    <div className="col-3">Skills</div>
                    <div className="col-9 d-flex flex-wrap">
                      {userData.Skills &&
                        userData.Skills.length > 0 &&
                        userData.Skills.map((data) => (
                          <span
                            className="rounded btn-secondary me-3 mb-3 px-3 text-nowrap py-1 text-capitalize"
                            key={data.name}
                          >
                            {data.name}
                          </span>
                        ))}
                    </div>
                  </div>
                )}
                {userData.Expertise && userData.Expertise.length > 0 && (
                  <div className="row ">
                    <div className="col-3">Expertise</div>
                    <div className="col-9  d-flex flex-wrap">
                      {userData.Expertise &&
                        userData.Expertise.length > 0 &&
                        userData.Expertise.map((data) => (
                          <span
                            className="rounded btn-secondary me-3 mb-3 px-3 text-nowrap  py-1 text-capitalize"
                            key={data.name}
                          >
                            {data.name}
                          </span>
                        ))}
                    </div>
                  </div>
                )}
              </div>

              {/* UserBackground */}
              {userData.background && (
                <div>
                  <div className="fs-3">Background</div>
                  <p>{userData.background}</p>
                </div>
              )}

              {/* UserStartup Ideas */}
              {userData.ideatostart && (
                <div>
                  <div className="fs-3">Startup Ideas</div>
                  <p>{userData.ideatostart}</p>
                </div>
              )}

              {/* Cofounder Section */}

              {userData.lookingforfounder && (
                <div className="card text-dark bg-light mb-3 mt-3 w-100">
                  <div className="card-body">
                    <h5 className="card-title">Cofounder Maching Profile</h5>
                    {loginData.userId === userIdParam && (
                      <div className="pb-3">
                        <button
                          className="btn btn-secondary"
                          onClick={handleClickOpen()}
                        >
                          Edit CoFounder options
                        </button>
                      </div>
                    )}
                    {userCofounderData.Timecommit &&
                      userCofounderData.Timecommit.length > 0 && (
                        <div className="mb-3">
                          <p className="card-text fw-bolder mb-2">
                            Time Commitment
                          </p>
                          {/* Add Map Here */}
                          {userCofounderData.Timecommit.map((data) => (
                            <div className="" key={data._id}>
                              <FontAwesomeIcon icon={faCheckSquare} />{" "}
                              {data.name}
                            </div>
                          ))}
                        </div>
                      )}
                    {userCofounderData.preferedcustomer &&
                      userCofounderData.preferedcustomer.length > 0 && (
                        <div className="mb-3">
                          <p className="card-text fw-bolder mb-2">
                            Preferred Customer Segments
                          </p>
                          {/* Add Map Here */}
                          {userCofounderData.preferedcustomer.map((data) => (
                            <div className="" key={data._id}>
                              <FontAwesomeIcon icon={faCheckSquare} />{" "}
                              {data.name}
                            </div>
                          ))}
                        </div>
                      )}
                    {userCofounderData.preference &&
                      userCofounderData.preference.length > 0 && (
                        <div className="mb-3">
                          <p className="card-text fw-bolder mb-2">
                            Cofounder Preference
                          </p>
                          {/* Add Map Here */}
                          {userCofounderData.preference.map((data) => (
                            <div className="" key={data._id}>
                              <FontAwesomeIcon icon={faCheckSquare} />{" "}
                              {data.name}
                            </div>
                          ))}
                        </div>
                      )}
                  </div>
                </div>
              )}
              {activateProfileModel()}
              {loginData.userId === userIdParam && !userData.lookingforfounder && (
                <div className="card text-dark bg-light mb-3 mt-3 w-100">
                  <div className="card-body">
                    <h5 className="card-title">Cofounder Maching Profile</h5>
                    <p>
                      Your profile is not activate for cofounder matching. Would
                      you like to activate your cofounder matching profile?
                    </p>
                    <p>
                      Reminder: you need to reactivate your profile every four
                      weeks. We require reactivations to keep profiles up to
                      date and help the community reduce the chance of stale
                      cofounder matching profiles
                    </p>
                    <div className="pt-3">
                      {/* <Button onClick={handleClickOpen()} >scroll=paper</Button> */}

                      <button
                        className="btn btn-secondary"
                        onClick={handleClickOpen()}
                      >
                        Activate Profile
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (
        <ViewProfileSkeleton />
      )}
    </>
  );
};

export default ViewProfile;
