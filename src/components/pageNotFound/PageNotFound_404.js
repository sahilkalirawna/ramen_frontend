import React from "react";
import _404 from "../../assets/404_small.PNG";

const PageNotFound_404 = () => {
  return (
    <>
      <div className='d-flex justify-content-center align-items-center'>
        <img src={_404} alt='404_Error' className='img-fluid' />
      </div>
    </>
  );
};

export default PageNotFound_404;
