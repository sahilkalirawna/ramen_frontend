import React, { useEffect } from "react";
import DefaultImg from "../../assets/man.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faLink, faCheckSquare } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { getSingleUser } from "../../redux/action/userProfileAction";
import { useParams } from "react-router-dom";
import ViewProfileSkeleton from "./ViewProfileSkeleton";

const ViewProfile = () => {
  const dispatch = useDispatch();
  const { userId } = useParams();
  // console.log(userId);
  // const [themes, setThemes] = useState([]);

  useEffect(() => {
    dispatch(getSingleUser(userId));
  }, [dispatch, userId]);

  const data = useSelector((state) => state.singleUser);

  let { userData, isLoading } = data;
  // console.log(userData.Address.city);
  // setThemes(userData.Themes);

  console.log(userData);
  return (
    <>
      {!isLoading ? (
        <div className='container pt-5'>
          {/* <viewProfileSkeleton /> */}
          <div className='row justify-content-center'>
            {/* Profile Photo */}
            <div className='col-sm-4 col-md-3 mb-3'>
              <div className='d-flex flex-column align-items-center'>
                <img
                  src={DefaultImg}
                  className='img-thumbnail'
                  alt='Default_Img'
                  //     style={{ maxWidth: 200 }}
                />
                <div className='pt-3'>
                  <div className='border border-secondary rounded p-2 text-wrap text-center'>
                    Looking for Cofounder
                  </div>
                </div>
                <div className='pt-3'>
                  <div className='btn btn-secondary'>Send Message</div>
                </div>
              </div>
            </div>
            {/* Profile Data */}
            <div className='col-sm-12 col-md-9'>
              <div className='d-flex'>
                <div className='fs-3 fw-bold flex-grow-1 text-capitalize'>
                  {userData.name}
                </div>
                <div className='fs-3'>
                  <FontAwesomeIcon icon={faLinkedin} className='m-1' />
                  <FontAwesomeIcon icon={faTwitter} className='m-1' />
                  <FontAwesomeIcon icon={faLink} className='m-1' />
                </div>
              </div>
              <div className='fw-light text-capitalize'>
                {/* {userData.Address.city && userData.Address.city }, {userData.Address.state && userData.Address.state},
            {userData.Address.country && userData.Address.country} */}
              </div>

              {/* Qualites */}
              <div className='pt-3'>
                {userData.Themes && userData.Themes.length > 0 && (
                  <div className='row mb-3'>
                    <div className='col-3'>Themes</div>
                    <div className='col-9'>
                      {userData.Themes &&
                        userData.Themes.length > 0 &&
                        userData.Themes.map((d) => (
                          <>
                            <span className='rounded btn-secondary me-3 px-3 py-1 text-capitalize'>
                              {d.name}
                            </span>
                          </>
                        ))}
                    </div>
                  </div>
                )}
                {userData.Skills && userData.Skills.length > 0 && (
                  <div className='row mb-3'>
                    <div className='col-3'>Skills</div>
                    <div className='col-9'>
                      {userData.Skills &&
                        userData.Skills.length > 0 &&
                        userData.Skills.map((data) => (
                          <>
                            <span className='rounded btn-secondary me-3 px-3 py-1 text-capitalize'>
                              {data.name}
                            </span>
                          </>
                        ))}
                    </div>
                  </div>
                )}
                {userData.Expertise && userData.Expertise.length > 0 && (
                  <div className='row mb-3'>
                    <div className='col-3'>Expertise</div>
                    <div className='col-9'>
                      {userData.Expertise &&
                        userData.Expertise.length > 0 &&
                        userData.Expertise.map((data) => (
                          <>
                            <span className='rounded btn-secondary me-3 px-3 py-1 text-capitalize'>
                              {data.name}
                            </span>
                          </>
                        ))}
                    </div>
                  </div>
                )}
              </div>

              {/* UserBackground */}
              <div className='pt-3'>
                <div className='fs-3'>Background</div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                  impedit deleniti aliquam nam recusandae, odit optio illo sed
                  corporis repudiandae. Lorem ipsum dolor sit amet.
                </p>
              </div>

              {/* UserStartup Ideas */}
              <div className='pt-3'>
                <div className='fs-3'>Startup Ideas</div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Animi, unde.
                </p>
              </div>
              <div className='card text-dark bg-light mb-3 mt-5 w-100'>
                <div className='card-body'>
                  <h5 className='card-title'>Cofounder Maching Profile</h5>
                  <div className='mb-3'>
                    <p className='card-text fw-bolder mb-2'>Time Commitment</p>
                    {/* Add Map Here */}
                    <div className=''>
                      <FontAwesomeIcon icon={faCheckSquare} /> 40 hours per week
                    </div>
                  </div>
                  <div className='mb-3'>
                    <p className='card-text fw-bolder mb-2'>
                      Preferred Customer Segments
                    </p>
                    {/* Add Map Here */}
                    <div className=''>
                      <FontAwesomeIcon icon={faCheckSquare} /> B2B
                    </div>
                    <div className=''>
                      <FontAwesomeIcon icon={faCheckSquare} /> SMB
                    </div>
                  </div>
                  <div className='mb-3'>
                    <p className='card-text fw-bolder mb-2'>
                      Cofounder Preference
                    </p>
                    {/* Add Map Here */}
                    <div className=''>
                      <FontAwesomeIcon icon={faCheckSquare} /> Interested in
                      co-creating a new idea
                    </div>
                    <div className=''>
                      <FontAwesomeIcon icon={faCheckSquare} /> Open to helping
                      with an existing idea
                    </div>
                  </div>
                  <div className='mb-3'>
                    <p className='card-text fw-bolder mb-2'>
                      Location Preference
                    </p>
                    {/* Add Map Here */}
                    <div className=''>
                      <FontAwesomeIcon icon={faCheckSquare} /> Same Country
                    </div>
                    <div className=''>
                      <FontAwesomeIcon icon={faCheckSquare} /> Same TimeZone
                    </div>
                  </div>
                </div>
              </div>
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
