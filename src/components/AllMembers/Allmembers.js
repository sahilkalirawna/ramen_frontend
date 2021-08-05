import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import StickyBox from "react-sticky-box";
import {
  getQualitiesData,
  getSearchProfile,
} from "../../redux/action/leftMenuActions";
import user from "../../assets/man.png";
import "./Allmember.css";

const AllMembers = () => {
  const dispatch = useDispatch();
  const [theme, settheme] = useState([]);
  const [skill, setskill] = useState([]);
  const [expert, setexpertise] = useState([]);
  const [cofounderTimecomit, setTimecommit] = useState([]);
  const [cofounderPreference, setcofounderPreference] = useState([]);
  const [cofounderPreferedCustomer, setCofounderPreferedCustomer] = useState(
    []
  );
  const [search, setSearch] = useState("");
  const [themed, setThemed] = useState([]);
  const [looking, setLooking] = useState(false);
  useEffect(() => {
    dispatch(getQualitiesData());
  }, [dispatch]);

  const data = useSelector((state) => state.leftmenudata);
  let {
    themes,
    skills,
    preference,
    copreference,
    timecommit,
    expertise,
    lookingForFounder,
    datas,
    errorProfile,
  } = data;
  console.log("themes", themes);
  console.log(data);

  useEffect(() => {
    setThemed(themes);
  }, [themes]);

  console.log("themed");

  console.log(themed);

  console.log(datas);
  console.log(errorProfile);

  const handleChangeThemes = (event) => {
    let newArray = [...theme, event.target.value];
    if (theme.includes(event.target.value)) {
      newArray = newArray.filter((day) => day !== event.target.value);
    }
    settheme(newArray);
  };

  const handleChangeSkills = (event) => {
    let newArray = [...skill, event.target.value];
    if (skill.includes(event.target.value)) {
      newArray = newArray.filter((day) => day !== event.target.value);
    }
    setskill(newArray);
  };

  const handleChangeExpertise = (event) => {
    let newArray = [...expert, event.target.value];
    if (expert.includes(event.target.value)) {
      newArray = newArray.filter((day) => day !== event.target.value);
    }
    setexpertise(newArray);
  };

  const handleChangeTimecommit = (event) => {
    let newArray = [...expert, event.target.value];
    if (cofounderTimecomit.includes(event.target.value)) {
      newArray = newArray.filter((day) => day !== event.target.value);
    }
    setTimecommit(newArray);
  };

  const handleChangePreference = (event) => {
    let newArray = [...expert, event.target.value];
    if (cofounderPreference.includes(event.target.value)) {
      newArray = newArray.filter((day) => day !== event.target.value);
    }
    setcofounderPreference(newArray);
  };

  const handleChangeCopreference = (event) => {
    let newArray = [...expert, event.target.value];
    if (cofounderPreferedCustomer.includes(event.target.value)) {
      newArray = newArray.filter((day) => day !== event.target.value);
    }
    setCofounderPreferedCustomer(newArray);
  };

  const handleLooking = (e) => {
    console.log(e.target.value);
    setLooking(!looking);
  };
  console.log(looking);
  console.log(theme);
  console.log(skill);
  console.log(expert);
  console.log(cofounderTimecomit);
  console.log(cofounderPreference);
  console.log(cofounderPreferedCustomer);

  useEffect(() => {
    let query = {};
    if (search) query.search = search;
    if (theme.length > 0) query.Theme = theme;
    if (skill.length > 0) query.Skill = skill;
    if (expert.length > 0) query.Expert = expert;
    if (cofounderPreference.length > 0)
      query.cofounderPreference = cofounderPreference;
    if (cofounderTimecomit.length > 0)
      query.cofounderTimecomit = cofounderTimecomit;
    if (cofounderPreferedCustomer.length > 0)
      query.cofounderCopreference = cofounderPreferedCustomer;
    console.log("Done..........", query);
    dispatch(getSearchProfile(query));
  }, [
    dispatch,
    theme,
    skill,
    expert,
    search,
    cofounderPreference,
    cofounderTimecomit,
    cofounderPreferedCustomer,
  ]);

  return (
    <>
      <h1 className="">MEMBERS</h1>
      <div className="row">
        <div className="col-md-3">
          <StickyBox offsetTop={20} offsetBottom={20}>
            <div
              className="card filterBy"
              style={{
                overflow: "auto",
                overflowY: "auto",
                height: "47rem",
              }}
            >
              <div className="card-body">
                {lookingForFounder ? (
                  <div className="card-text">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value={lookingForFounder.id}
                        onChange={handleLooking}
                        id="lookingcofounder"
                      />
                      <label class="form-check-label" for="lookingcofounder">
                        {lookingForFounder.name}
                      </label>
                    </div>
                  </div>
                ) : (
                  ""
                )}
                <hr></hr>
              </div>

              <div className="card-body py-0">
                <h5 className="card-title">Theme</h5>
                {themes.length > 0 &&
                  themes.map((data) => (
                    <>
                      <div className="card-text">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value={data._id}
                            id="fintech"
                            onChange={handleChangeThemes}
                          />
                          <label class="form-check-label" for="fintech">
                            {data.name}
                          </label>
                        </div>
                      </div>
                    </>
                  ))}
                <hr></hr>
              </div>

              <div className="card-body">
                <h5 className="card-title">Skills</h5>
                {skills.length > 0 &&
                  skills.map((data) => (
                    <>
                      <div className="card-text">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value={data._id}
                            id="fintech"
                            onChange={handleChangeSkills}
                          />
                          <label class="form-check-label" for="fintech">
                            {data.name}
                          </label>
                        </div>
                      </div>
                    </>
                  ))}
                <hr></hr>
              </div>

              <div className="card-body">
                <h5 className="card-title">Expertise</h5>
                {expertise.length > 0 &&
                  expertise.map((data) => (
                    <>
                      <div className="card-text">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value={data._id}
                            id="fintech"
                            onChange={handleChangeExpertise}
                          />
                          <label class="form-check-label" for="fintech">
                            {data.name}
                          </label>
                        </div>
                      </div>
                    </>
                  ))}
                <hr></hr>
              </div>

              {looking && (
                <>
                  <div className="card-body">
                    <h5 className="card-title">Time Commit</h5>
                    {timecommit.length > 0 &&
                      timecommit.map((data) => (
                        <>
                          <div className="card-text">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value={data._id}
                                id="fintech"
                                onChange={handleChangeTimecommit}
                              />
                              <label class="form-check-label" for="fintech">
                                {data.name}
                              </label>
                            </div>
                          </div>
                        </>
                      ))}
                    <hr></hr>
                  </div>

                  <div className="card-body">
                    <h5 className="card-title">Preference</h5>
                    {preference.length > 0 &&
                      preference.map((data) => (
                        <>
                          <div className="card-text">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value={data._id}
                                id="fintech"
                                onChange={handleChangePreference}
                              />
                              <label class="form-check-label" for="fintech">
                                {data.name}
                              </label>
                            </div>
                          </div>
                        </>
                      ))}
                    <hr></hr>
                  </div>

                  <div className="card-body">
                    <h5 className="card-title">Co Preference</h5>
                    {copreference.length > 0 &&
                      copreference.map((data) => (
                        <>
                          <div className="card-text">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value={data._id}
                                id="fintech"
                                onChange={handleChangeCopreference}
                              />
                              <label class="form-check-label" for="fintech">
                                {data.name}
                              </label>
                            </div>
                          </div>
                        </>
                      ))}
                    <hr></hr>
                  </div>
                </>
              )}
            </div>
          </StickyBox>
        </div>
        {/* SearchBox */}
        <div className="col-md-8">
          <div className="card searchBy">
            <div className="card-body">
              <input
                type="text"
                className="form-control"
                placeholder="Search.."
                onChange={(event) => setSearch(event.target.value)}
              />
            </div>
          </div>

          {/* All Members List */}
          {/* {errorProfile && <p>{errorProfile}</p>} */}
          {datas && datas.length > 0 && !errorProfile
            ? datas.map((data) => (
                <Link
                  to={`/profile/${data._id}`}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <div className="card mt-3 memberListCard">
                    <div className="row singleMemberCard">
                      <div className="col-md-3">
                        <img
                          src={user}
                          style={{ marginLeft: "50px" }}
                          alt="Member"
                          className="membersImageList"
                        />
                      </div>

                      <div className="col-md-9">
                        <div className="card-body">
                          <div className="row">
                            <div className="col-md-4">
                              <h6 className="card-title">{data.name}</h6>
                            </div>

                            <div className="col-md-4">Address</div>

                            <div className="col-md-4">
                              <FontAwesomeIcon
                                icon={faLinkedin}
                                className="socialicon"
                              />
                              <FontAwesomeIcon
                                icon={faTwitter}
                                className="socialicon"
                              />
                              <FontAwesomeIcon
                                icon={faLink}
                                className="socialicon"
                              />
                            </div>
                          </div>

                          <p className="card-text">
                            Temporary text for testing.Temporary text for
                            testing.Temporary text for testing.Temporary text
                            for testing.
                          </p>
                        </div>
                      </div>

                      {/* Themes Details */}
                      <div className="col-md-3">
                        <h6 className="qualitiesHd">
                          {data.Themes && data.Themes.length > 0
                            ? "Themes"
                            : ""}
                        </h6>
                      </div>

                      <div className="col-md-9">
                        {data.Themes &&
                          data.Themes.map((data) => (
                            <>
                              <div
                                className="card-body"
                                style={{ paddingTop: "0px" }}
                              >
                                <p className="card-title">
                                  <span className="badge bg-secondary userQual">
                                    {data.name}
                                  </span>
                                </p>
                              </div>
                            </>
                          ))}
                      </div>

                      {/* Skills Details */}
                      <div className="col-md-3">
                        <h6 className="qualitiesHd">
                          {data.Skills && data.Skills.length > 0
                            ? "Skills"
                            : ""}
                        </h6>
                      </div>
                      <div className="col-md-9">
                        {data.Skills &&
                          data.Skills.map((data) => (
                            <>
                              <div
                                className="card-body"
                                style={{ paddingTop: "0px" }}
                              >
                                <p className="card-title">
                                  <span className="badge bg-secondary userQual">
                                    {data.name}
                                  </span>
                                </p>
                              </div>
                            </>
                          ))}
                      </div>
                      {/* Expertise Details */}
                      <div className="col-md-3">
                        <h6 className="qualitiesHd">
                          {data.Expertise && data.Expertise.length > 0
                            ? "Expertise"
                            : ""}
                        </h6>
                      </div>

                      <div className="col-md-9">
                        {data.Expertise &&
                          data.Expertise.map((data) => (
                            <>
                              <div
                                className="card-body"
                                style={{ paddingTop: "0px" }}
                              >
                                <p className="card-title">
                                  <span className="badge bg-secondary userQual">
                                    {data.name}
                                  </span>
                                </p>
                              </div>
                            </>
                          ))}
                      </div>
                    </div>
                  </div>
                </Link>
              ))
            : ""}
        </div>
      </div>
    </>
  );
};

export default AllMembers;
