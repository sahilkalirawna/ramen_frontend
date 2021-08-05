import React from "react";
import Skeleton from "react-loading-skeleton";

const ViewProfileSkeleton = () => {
  return (
    <div className='container pt-5'>
      <div className='row justify-content-center'>
        {/* Profile Photo */}
        <div className='col-sm-4 col-md-3 mb-3'>
          <div className=''>
            {/* boxSkeleton */}
            <Skeleton height={200} />

            <div className='pt-3'>
              <Skeleton count={2} />
            </div>
          </div>
        </div>
        {/* Profile Data */}
        <div className='col-sm-12 col-md-9'>
          <Skeleton height={25} />
          <div className='fw-light text-capitalize'>
            <Skeleton width={250} />
          </div>

          {/* Qualites */}
          <div className='pt-3'>
            <div className='row mb-3'>
              <div className='col-3'>
                <Skeleton count={3} />
              </div>
              <div className='col-9'>
                <Skeleton count={3} />
              </div>
            </div>
          </div>

          {/* UserBackground */}
          <div className='pt-3'>
            <div className='fs-3'></div>
            <p>
              <Skeleton count={3} />
            </p>
          </div>

          {/* UserStartup Ideas */}
          <div className='pt-3'>
            <div className='fs-3'></div>
            <p>
              <Skeleton count={2} />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewProfileSkeleton;
