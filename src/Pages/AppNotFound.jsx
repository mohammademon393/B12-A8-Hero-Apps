import React from 'react';
import errorImg from '../assets/App-Error.png';
import { Link } from 'react-router';

const AppNotFound = () => {
    return (
      <div className="bg-gray-100 p-10 flex flex-col items-center justify-center">
        <div className="max-w-[1280px] mx-auto text-center flex flex-col justify-center">
          <div className="ml-[50px] md:ml-[200px]">
            <img
              className=" w-[300px] h-[250px]"
              src={errorImg}
              alt="coming soon.."
            />
          </div>
          <div>
            <h1 className="font-semibold text-[48px]">OPPS!! APP NOT FOUND</h1>
            <p className="text-[#627382] text-[20px]">
              The App you are requesting is not found on our system. please try
              another apps
            </p>
            <Link
              to={"/apps"}
              className="rounded-md bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)] btn text-white mt-3"
            >
              Show All Apps
            </Link>
          </div>
        </div>
      </div>
    );
};

export default AppNotFound;