import React from 'react';
import { FaGooglePlay } from "react-icons/fa";
import { FaAppStore } from 'react-icons/fa';

const Banner = () => {
    return (
      <div className="max-w-[1280px] mx-auto text-center flex flex-col justify-center py-10">
        <h1 className="font-bold text-[62px]">
          We Build <br />
          <span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-transparent bg-clip-text">
            Productive{" "}
          </span>{" "}
          Apps
        </h1>
        <p className="text-[#627382] text-[20px]">
          At HERO.IO, we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting. <br /> Our goal is to turn your
          ideas into digital experiences that truly make an impact.
        </p>
        <div className="mt-4 flex gap-4 justify-center">
          <button className="btn border border-gray-400 bg-gray-100">
            <FaGooglePlay></FaGooglePlay>
            Google Play
          </button>
          <button className="btn border border-gray-400 bg-gray-100">
            <FaAppStore></FaAppStore>
            App Store
          </button>
        </div>
      </div>
    );
};

export default Banner;