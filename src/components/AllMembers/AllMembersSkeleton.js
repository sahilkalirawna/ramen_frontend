import React from "react";
import Skeleton from "react-loading-skeleton";

const AllMembersSkeleton = () => {
  return (
    <>
      <h1>MEMBERS</h1>
      <div className='row justify-content-center'>
        <div className='col-sm-6 col-md-3 mb-3'>
          <div
            className='card p-3'
            style={{
              overflow: "auto",
              overflowY: "auto",
              height: "39rem",
            }}
          >
            <Skeleton className='w-75' />
            <Skeleton count={4} />
            <br />
            <Skeleton className='w-75' />
            <Skeleton count={4} />
            <br />
            <Skeleton className='w-75' />
            <Skeleton count={4} />
            <br />
            <Skeleton className='w-75' />
            <Skeleton count={4} />
          </div>
        </div>
        {/* SearchBox */}
        <div className='col-md-9'>
          <div className='card p-3'>
            <Skeleton height={25} />
          </div>

          {/* All Members List */}
          <div className='card mt-3 '>
            <div className='row pt-3 px-3 mb-3'>
              <div className='col-md-3'>
                <Skeleton height={100} />
              </div>
              <div className='col-md-9'>
                <div className='row'>
                  <div className='col-4'>
                    <Skeleton />
                  </div>
                  <div className='col-4'>
                    <Skeleton />
                  </div>
                  <div className='col-4'>
                    <Skeleton />
                  </div>
                </div>
                <p className='card-text'>
                  <Skeleton count={2} />
                </p>
              </div>
            </div>

            {/* Themes Details */}
            <div className='row pb-3 px-3'>
              <div className='col-3'>
                <Skeleton count={3} />
              </div>
              <div className='col-9'>
                <Skeleton count={3} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllMembersSkeleton;
