import React from 'react';
import { FaArrowDown, FaRegStar } from 'react-icons/fa';

const TrendingApps = ({ apps }) => {
    const { image, title, ratingAvg, downloads } = apps;
  return (
    <div className="max-w-[1280px] mx-auto">
      <div className="card bg-base-100 shadow-sm hover:scale-105  transition ease-in-out">
        <figure className="p-4">
          <img className="rounded-xl h-[220px]" src={image} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <div className="flex justify-between">
            <div className="badge badge-success text-[16px]">
                <FaArrowDown></FaArrowDown> {downloads}</div>
            <div className="badge badge-warning text-[16px]"> <FaRegStar></FaRegStar> {ratingAvg}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingApps;