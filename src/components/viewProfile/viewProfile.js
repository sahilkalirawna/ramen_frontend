import React from "react";
import DefaultImg from "../../assets/defaultProfile.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";

const viewProfile = () => {
  const data = {
    Themes: ["sdfsdf", "asdasd"],
  };
  return (
    <div className='container pt-5'>
      <div className='row justify-content-center'>
        {/* Profile Photo */}
        <div className='col-sm-4 col-md-4'>
          <div className=''>
            <img
              src={DefaultImg}
              class='img-thumbnail'
              alt='Default_Img'
              //     style={{ maxWidth: 200 }}
            />
            <div className='pt-3'>
              <div className='btn btn-secondary'>Send Message</div>
            </div>
          </div>
        </div>
        {/* Profile Data */}
        <div className='col-sm-12 col-md-8'>
          <div className='d-flex'>
            <div className='fs-3 fw-bold flex-grow-1'>UserName</div>
            <div className='fs-3'>
              <FontAwesomeIcon icon={faLinkedin} className='m-1' />
              <FontAwesomeIcon icon={faTwitter} className='m-1' />
              <FontAwesomeIcon icon={faLink} className='m-1' />
            </div>
          </div>
          <div className='fw-light'>City, State, Country</div>

          {/* Qualites */}
          <div className='pt-3'>
            <div className='row mb-3'>
              <div className='col-3'>Themes</div>
              <div className='col-9'>
                {data.Themes.map((data) => (
                  <>
                    <span className=' btn-secondary me-3 px-3'>{data}</span>
                  </>
                ))}
              </div>
            </div>
            <div className='row mb-3'>
              <div className='col-3'>Skills</div>
              <div className='col-9'>
                {data.Themes.map((data) => (
                  <>
                    <span className=' btn-secondary me-3  px-3'>{data}</span>
                  </>
                ))}
              </div>
            </div>
            <div className='row mb-3'>
              <div className='col-3'>Expertise</div>
              <div className='col-9'>
                {data.Themes.map((data) => (
                  <>
                    <span className=' btn-secondary me-3  px-3'>{data}</span>
                  </>
                ))}
              </div>
            </div>
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
              unde.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default viewProfile;
