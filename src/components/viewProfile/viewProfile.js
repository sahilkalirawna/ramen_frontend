import React, { useEffect } from "react";
import DefaultImg from "../../assets/man.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faLink, faCheckSquare } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { getSingleUser } from "../../redux/action/userProfileAction";
import { useParams, Link } from "react-router-dom";
import ViewProfileSkeleton from "./ViewProfileSkeleton";
import { sendMessage } from "../../redux/action/activateFounderAction";

const ViewProfile = () => {
  const dispatch = useDispatch();
  const { userId: userIdParam } = useParams();

  useEffect(() => {
    dispatch(getSingleUser(userIdParam));
  }, [dispatch, userIdParam]);

  const generalData = useSelector((state) => state.general);
  const { loginData } = generalData;

  console.log("Login Id", loginData.userId);
  // console.log("Param Id", userIdParam);

  const singleUserData = useSelector((state) => state.singleUser);
  let { userData, isLoading, userCofounderData } = singleUserData;
  console.log("singleUser Data", singleUserData);

  console.log("UserData", userData);
  console.log("UserCofounderData", userCofounderData);

  const sendmessage = () => {
    alert("hi");
    dispatch(sendMessage(userIdParam, loginData.userId));
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
                  <div className="row mb-3">
                    <div className="col-3">Themes</div>
                    <div className="col-9">
                      {userData.Themes &&
                        userData.Themes.length > 0 &&
                        userData.Themes.map((data) => (
                          <span
                            className="rounded btn-secondary me-3 px-3 py-1 text-capitalize"
                            key={data.name}
                          >
                            {data.name}
                          </span>
                        ))}
                    </div>
                  </div>
                )}
                {userData.Skills && userData.Skills.length > 0 && (
                  <div className="row mb-3">
                    <div className="col-3">Skills</div>
                    <div className="col-9">
                      {userData.Skills &&
                        userData.Skills.length > 0 &&
                        userData.Skills.map((data) => (
                          <span
                            className="rounded btn-secondary me-3 px-3 py-1 text-capitalize"
                            key={data.name}
                          >
                            {data.name}
                          </span>
                        ))}
                    </div>
                  </div>
                )}
                {userData.Expertise && userData.Expertise.length > 0 && (
                  <div className="row mb-3">
                    <div className="col-3">Expertise</div>
                    <div className="col-9">
                      {userData.Expertise &&
                        userData.Expertise.length > 0 &&
                        userData.Expertise.map((data) => (
                          <span
                            className="rounded btn-secondary me-3 px-3 py-1 text-capitalize"
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
                        <div className="btn btn-secondary">
                          Edit CoFounder options
                        </div>
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
                      <div className="btn btn-secondary">Activate Profile</div>
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
