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

  useEffect(() => {
    setThemed(themes);
  }, [themes]);

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

  const handleLooking = (e) => {
    // console.log(e.target.value);
    setLooking(!looking);
  };

  useEffect(() => {
    let query = {};
    if (search) query.search = search;
    if (theme.length > 0) query.Theme = theme;
    if (skill.length > 0) query.Skill = skill;
    if (expert.length > 0) query.Expert = expert;
    dispatch(getSearchProfile(query));
  }, [dispatch, theme, skill, expert, search]);

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
                    height: "45rem",
                  }}
                >
                  <div className='card filterBy border-0 px-3 pt-3'>
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
                        <>
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
                        </>
                      ))}
                    <hr></hr>
                  </div>

                  <div className='card filterBy border-0 px-3'>
                    <h5 className='card-title'>Skills</h5>
                    {skills.length > 0 &&
                      skills.map((data) => (
                        <>
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
                        </>
                      ))}
                    <hr></hr>
                  </div>

                  <div className='card filterBy border-0 px-3 '>
                    <h5 className='card-title'>Expertise</h5>
                    {expertise.length > 0 &&
                      expertise.map((data) => (
                        <>
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
                        </>
                      ))}
                    <hr></hr>
                  </div>

                  {looking && (
                    <>
                      <div className='card filterBy border-0 px-3'>
                        <h5 className='card-title'>Time Commit</h5>
                        {timecommit.length > 0 &&
                          timecommit.map((data) => (
                            <>
                              <div className='card-text'>
                                <div className='form-check'>
                                  <input
                                    className='form-check-input'
                                    type='checkbox'
                                    value={data._id}
                                    id='fintech'
                                    onChange={handleChangeExpertise}
                                  />
                                  <label class='form-check-label' for='fintech'>
                                    {data.name}
                                  </label>
                                </div>
                              </div>
                            </>
                          ))}
                        <hr></hr>
                      </div>

                      <div className='card filterBy border-0 px-3'>
                        <h5 className='card-title'>Preference</h5>
                        {preference.length > 0 &&
                          preference.map((data) => (
                            <>
                              <div className='card-text'>
                                <div className='form-check'>
                                  <input
                                    className='form-check-input'
                                    type='checkbox'
                                    value={data._id}
                                    id='fintech'
                                    onChange={handleChangeExpertise}
                                  />
                                  <label class='form-check-label' for='fintech'>
                                    {data.name}
                                  </label>
                                </div>
                              </div>
                            </>
                          ))}
                        <hr></hr>
                      </div>

                      <div className='card filterBy border-0 px-3 pb-3'>
                        <h5 className='card-title'>Co Preference</h5>
                        {copreference.length > 0 &&
                          copreference.map((data) => (
                            <>
                              <div className='card-text'>
                                <div className='form-check'>
                                  <input
                                    className='form-check-input'
                                    type='checkbox'
                                    value={data._id}
                                    id='fintech'
                                    onChange={handleChangeExpertise}
                                  />
                                  <label class='form-check-label' for='fintech'>
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
            <div className='col-md-9'>
              <div className='card searchBy mb-3'>
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
              {errorProfile && <p>{errorProfile}</p>}
              {datas &&
                datas.length > 0 &&
                !errorProfile &&
                datas.map((data) => (
                  <Link
                    to={`/profile/${data._id}`}
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <div className='card mb-2 memberListCard'>
                      <div className='row'>
                        <div className='col-md-3'>
                          <img
                            src={user}
                            alt='Member'
                            className='membersImageList m-3'
                          />
                        </div>
                        <div className='col-md-9'>
                          <div className='card-body px-0'>
                            <div className='row'>
                              <div className='col-4'>
                                <h6 className='card-title text-capitalize'>
                                  {data.name}
                                </h6>
                              </div>
                              <div className='col-4 text-center'>Address</div>
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

                            <p className='card-text mt-3 text-capitalize'>
                              Temporary text for testing.Temporary text for
                              testing.Temporary text for testing.Temporary text
                              for testing.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className='row'>
                        {/* Themes Details */}
                        {data.Themes.length > 0 && (
                          <>
                            <div className='col-3'>
                              <h6 className='qualitiesHd'>Themes</h6>
                            </div>
                            <div className='col-9'>
                              {data.Themes.map((data) => (
                                <div className='card-body pt-0'>
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
                        {data.Skills.length > 0 && (
                          <>
                            <div className='col-3'>
                              <h6 className='qualitiesHd'>Skills</h6>
                            </div>
                            <div className='col-9'>
                              {data.Skills.map((data) => (
                                <div className='card-body pt-0'>
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
                        {data.Expertise.length > 0 && (
                          <>
                            <div className='col-3'>
                              <h6 className='qualitiesHd'>Expertise</h6>
                            </div>
                            <div className='col-9'>
                              {data.Expertise.map((data) => (
                                <div className='card-body pt-0'>
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
                ))}
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
