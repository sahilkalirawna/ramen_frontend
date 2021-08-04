import React, { useEffect, useState } from "react";
import DefaultImg from "../../assets/man.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { getSingleUser } from "./../../redux/action/userProfileAction";
import { useParams } from "react-router-dom";

const ViewProfile = () => {
  const dispatch = useDispatch();
  const { userId } = useParams();
  console.log(userId);
  // const [themes, setThemes] = useState([]);

  useEffect(() => {
    console.log("Hi");
    dispatch(getSingleUser(userId));
  }, [dispatch]);

  const data = useSelector((state) => state.singleUser);

  let { userData } = data;
  // setThemes(userData.Themes);

  console.log(userData);
  return (
    <div className="container pt-5">
      <div className="row justify-content-center">
        {/* Profile Photo */}
        <div className="col-sm-4 col-md-4">
          <div className="">
            <img
              src={DefaultImg}
              class="img-thumbnail"
              alt="Default_Img"
              //     style={{ maxWidth: 200 }}
            />
            <div className="pt-3">
              <div className="btn btn-secondary">Send Message</div>
            </div>
          </div>
        </div>
        {/* Profile Data */}
        <div className="col-sm-12 col-md-8">
          <div className="d-flex">
            <div className="fs-3 fw-bold flex-grow-1">{userData.name}</div>
            <div className="fs-3">
              <FontAwesomeIcon icon={faLinkedin} className="m-1" />
              <FontAwesomeIcon icon={faTwitter} className="m-1" />
              <FontAwesomeIcon icon={faLink} className="m-1" />
            </div>
          </div>
          <div className="fw-light">
            {/* {userData.Address.city && userData.Address.city }, {userData.Address.state && userData.Address.state},
            {userData.Address.country && userData.Address.country} */}
          </div>

          {/* Qualites */}
          <div className="pt-3">
            <div className="row mb-3">
              <div className="col-3">
                {userData.Themes && userData.Themes.length > 0 ? "Themes" : ""}
              </div>
              <div className="col-9">
                {userData.Themes &&
                  userData.Themes.length > 0 &&
                  userData.Themes.map((d) => (
                    <>
                      <span className=" btn-secondary me-3 px-3">{d.name}</span>
                    </>
                  ))}
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-3">
                {userData.Skills && userData.Skills.length > 0 ? "Skills" : ""}
              </div>
              <div className="col-9">
                {userData.Skills &&
                  userData.Skills.length > 0 &&
                  userData.Skills.map((data) => (
                    <>
                      <span className=" btn-secondary me-3  px-3">
                        {data.name}
                      </span>
                    </>
                  ))}
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-3">
                {userData.Expertise && userData.Expertise.length > 0
                  ? "Expertise"
                  : ""}
              </div>
              <div className="col-9">
                {userData.Expertise &&
                  userData.Expertise.length > 0 &&
                  userData.Expertise.map((data) => (
                    <>
                      <span className=" btn-secondary me-3  px-3">
                        {data.name}
                      </span>
                    </>
                  ))}
              </div>
            </div>
          </div>

          {/* UserBackground */}
          <div className="pt-3">
            <div className="fs-3">Background</div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              impedit deleniti aliquam nam recusandae, odit optio illo sed
              corporis repudiandae. Lorem ipsum dolor sit amet.
            </p>
          </div>

          {/* UserStartup Ideas */}
          <div className="pt-3">
            <div className="fs-3">Startup Ideas</div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
              unde.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewProfile;
