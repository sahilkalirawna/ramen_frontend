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
import AllMembersSkeleton from "./AllMembersSkeleton";

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
    isLoading,
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
      {!isLoading ? (
        <>
          <h1>MEMBERS</h1>
          <div className='row justify-content-center'>
            <div className='col-sm-6 col-md-3 mb-3'>
              <StickyBox offsetTop={30} offsetBottom={30}>
                <div
                  className='card filterBy'
                  style={{
                    overflow: "auto",
                    overflowY: "auto",
                    height: "40rem",
                  }}
                >
                  <div className='card filterBy border-0 p-3 pb-0'>
                    {lookingForFounder && (
                      <div className='card-text'>
                        <div className='form-check'>
                          <input
                            className='form-check-input'
                            type='checkbox'
                            value={lookingForFounder.id}
                            onChange={handleLooking}
                            id='lookingcofounder'
                          />
                          <label
                            className='form-check-label'
                            htmlFor='lookingcofounder'
                          >
                            {lookingForFounder.name}
                          </label>
                        </div>
                      </div>
                    )}
                    <hr />
                  </div>

                  <div className='card filterBy border-0 px-3'>
                    <h5 className='card-title'>Theme</h5>
                    {themes.length > 0 &&
                      themes.map((data) => (
                        <React.Fragment key={data._id}>
                          <div className='card-text'>
                            <div className='form-check'>
                              <input
                                className='form-check-input'
                                type='checkbox'
                                value={data._id}
                                id='Theme'
                                onChange={handleChangeThemes}
                              />
                              <label
                                className='form-check-label'
                                htmlFor='Theme'
                              >
                                {data.name}
                              </label>
                            </div>
                          </div>
                        </React.Fragment>
                      ))}
                    <hr />
                  </div>

                  <div className='card filterBy border-0 px-3'>
                    <h5 className='card-title'>Skills</h5>
                    {skills.length > 0 &&
                      skills.map((data) => (
                        <React.Fragment key={data._id}>
                          <div className='card-text'>
                            <div className='form-check'>
                              <input
                                className='form-check-input'
                                type='checkbox'
                                value={data._id}
                                id='Skills'
                                onChange={handleChangeSkills}
                              />
                              <label
                                className='form-check-label'
                                htmlFor='Skills'
                              >
                                {data.name}
                              </label>
                            </div>
                          </div>
                        </React.Fragment>
                      ))}
                    <hr />
                  </div>

                  <div className='card filterBy border-0 px-3'>
                    <h5 className='card-title'>Expertise</h5>
                    {expertise.length > 0 &&
                      expertise.map((data) => (
                        <React.Fragment key={data._id}>
                          <div className='card-text'>
                            <div className='form-check'>
                              <input
                                className='form-check-input'
                                type='checkbox'
                                value={data._id}
                                id='Expertise'
                                onChange={handleChangeExpertise}
                              />
                              <label
                                className='form-check-label'
                                htmlFor='Expertise'
                              >
                                {data.name}
                              </label>
                            </div>
                          </div>
                        </React.Fragment>
                      ))}
                    <hr />
                  </div>

                  {looking && (
                    <>
                      <div className='card filterBy border-0 px-3'>
                        <h5 className='card-title'>Time Commit</h5>
                        {timecommit.length > 0 &&
                          timecommit.map((data) => (
                            <React.Fragment key={data._id}>
                              <div className='card-text'>
                                <div className='form-check'>
                                  <input
                                    className='form-check-input'
                                    type='checkbox'
                                    value={data._id}
                                    id='Time_Commit'
                                    onChange={handleChangeTimecommit}
                                  />
                                  <label
                                    className='form-check-label'
                                    htmlFor='Time_Commit'
                                  >
                                    {data.name}
                                  </label>
                                </div>
                              </div>
                            </React.Fragment>
                          ))}
                        <hr />
                      </div>

                      <div className='card filterBy border-0 px-3'>
                        <h5 className='card-title'>Preference</h5>
                        {preference.length > 0 &&
                          preference.map((data) => (
                            <React.Fragment key={data._id}>
                              <div className='card-text'>
                                <div className='form-check'>
                                  <input
                                    className='form-check-input'
                                    type='checkbox'
                                    value={data._id}
                                    id='Preference'
                                    onChange={handleChangePreference}
                                  />
                                  <label
                                    className='form-check-label'
                                    htmlFor='Preference'
                                  >
                                    {data.name}
                                  </label>
                                </div>
                              </div>
                            </React.Fragment>
                          ))}
                        <hr></hr>
                      </div>

                      <div className='card filterBy border-0 px-3'>
                        <h5 className='card-title'>Co Preference</h5>
                        {copreference.length > 0 &&
                          copreference.map((data) => (
                            <React.Fragment key={data._id}>
                              <div className='card-text'>
                                <div className='form-check'>
                                  <input
                                    className='form-check-input'
                                    type='checkbox'
                                    value={data._id}
                                    id='Co_Preference'
                                    onChange={handleChangeCopreference}
                                  />
                                  <label
                                    className='form-check-label'
                                    htmlFor='Co_Preference'
                                  >
                                    {data.name}
                                  </label>
                                </div>
                              </div>
                            </React.Fragment>
                          ))}
                        <hr></hr>
                      </div>
                    </>
                  )}
                </div>
              </StickyBox>
            </div>
            <div className='col-md-9'>
              {/* SearchBox */}
              <div className='card searchBy'>
                <div className='card-body'>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Search...'
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
                      key={data._id}
                    >
                      <div className='card mt-3 memberListCard'>
                        <div className='row '>
                          <div className='col-3'>
                            <div className='d-flex justify-content-center'>
                              <img
                                src={user}
                                alt='Member'
                                className='membersImageList my-3'
                              />
                            </div>
                          </div>
                          <div className='col-9'>
                            <div className='card-body p-0 pt-3'>
                              <div className='row'>
                                <div className='col-4'>
                                  <h6 className='card-title text-capitalize'>
                                    {data.name}
                                  </h6>
                                </div>
                                <div className='col-4 text-capitalize text-center'>
                                  Address
                                </div>
                                <div className='col-4 text-end fs-5'>
                                  <FontAwesomeIcon
                                    icon={faLinkedin}
                                    className='socialicon'
                                  />
                                  <FontAwesomeIcon
                                    icon={faTwitter}
                                    className='socialicon'
                                  />
                                  <FontAwesomeIcon
                                    icon={faLink}
                                    className='socialicon'
                                  />
                                </div>
                              </div>

                              <p className='card-text text-capitalize mt-3 pb-2'>
                                Temporary text for testing.Temporary text for
                                testing.Temporary text for testing.Temporary
                                text for testing.
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Themes Details */}
                        <div className='row'>
                          {data.Themes && data.Themes.length > 0 && (
                            <>
                              <div className='col-3'>
                                <h6 className='qualitiesHd'>Themes</h6>
                              </div>
                              <div className='col-9'>
                                {data.Themes &&
                                  data.Themes.map((data) => (
                                    <div
                                      className='card-body p-0'
                                      key={data.name}
                                    >
                                      <p className='card-title'>
                                        <span className='rounded btn-secondary me-3 px-3 py-1 text-capitalize'>
                                          {data.name}
                                        </span>
                                      </p>
                                    </div>
                                  ))}
                              </div>
                            </>
                          )}

                          {/* Skills Details */}
                          {data.Skills && data.Skills.length > 0 && (
                            <>
                              <div className='col-3'>
                                <h6 className='qualitiesHd'>Skills</h6>
                              </div>
                              <div className='col-9'>
                                {data.Skills &&
                                  data.Skills.map((data) => (
                                    <div
                                      className='card-body p-0'
                                      key={data.name}
                                    >
                                      <p className='card-title'>
                                        <span className='rounded btn-secondary me-3 px-3 py-1 text-capitalize'>
                                          {data.name}
                                        </span>
                                      </p>
                                    </div>
                                  ))}
                              </div>
                            </>
                          )}

                          {/* Expertise Details */}
                          {data.Expertise && data.Expertise.length > 0 && (
                            <>
                              <div className='col-3'>
                                <h6 className='qualitiesHd'>Expertise</h6>
                              </div>
                              <div className='col-9'>
                                {data.Expertise &&
                                  data.Expertise.map((data) => (
                                    <div
                                      className='card-body p-0'
                                      key={data.name}
                                    >
                                      <p className='card-title'>
                                        <span className='rounded btn-secondary me-3 px-3 py-1 text-capitalize'>
                                          {data.name}
                                        </span>
                                      </p>
                                    </div>
                                  ))}
                              </div>
                            </>
                          )}
                        </div>
                      </div>
                    </Link>
                  ))
                : ""}
            </div>
          </div>
        </>
      ) : (
        <AllMembersSkeleton />
      )}
    </>
  );
};

export default AllMembers;
