import React from "react";
import { FaAppStoreIos, FaDownload, FaGooglePlay } from "react-icons/fa";
import { FaAppStore } from "react-icons/fa";
import heroImg from "../assets/hero.png";
import { MdReviews } from "react-icons/md";

const Banner = () => {
  return (
    <div>
      <div className="max-w-[1280px] mx-auto text-center flex flex-col justify-center py-10">
        <h1 className="font-bold text-[62px]">
          We Build <br />
          <span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-transparent bg-clip-text">
            Productive{" "}
          </span>{" "}
          Apps
        </h1>
        <p className="text-[#627382] text-[20px] p-5">
          At HERO.IO, we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting. <br /> Our goal is to turn your
          ideas into digital experiences that truly make an impact.
        </p>
        <div className="mt-4 flex gap-4 justify-center">
          <a
            href="https://play.google.com/store/games?device=windows&hl=en"
            className="btn border border-gray-400 bg-gray-100"
          >
            <FaGooglePlay></FaGooglePlay>
            Google Play
          </a>
          <a
            href="https://www.apple.com/app-store/"
            className="btn border border-gray-400 bg-gray-100"
          >
            <FaAppStore></FaAppStore>
            App Store
          </a>
        </div>

        <div className="mt-14 m-5 md:ml-[300px]">
          <img src={heroImg} className="w-[650px]" alt="coming soon.." />
        </div>
      </div>
      <div className="bg-[linear-gradient(125.07deg,_rgba(99,46,227,1),_rgba(159,98,242,1)_100%)] text-white p-4 w-full mt-[-60px] flex flex-col justify-center">
        <div className="max-w-[1280px] mx-auto ">
          <h1 className="font-semibold text-[48px]">
            Trusted by Millions, Built for You
          </h1>
          <div className="md:flex gap-[80px] mt-5">
            <div>
              <p className="font-[400] text-[16px] text-[#dbd8d8eb]">
                Total Downloads
              </p>
              <h1 className="font-extrabold text-[60px] flex gap-2">
                29.6M
                <FaDownload></FaDownload>
              </h1>
              <p className="font-[400] text-[16px] text-[#dbd8d8eb]">
                21% more than last month
              </p>
            </div>
            <div>
              <p className="font-[400] text-[16px] text-[#dbd8d8eb]">
                Total Reviews
              </p>
              <h1 className="font-extrabold text-[60px]  flex gap-2 items-center">
                906K <MdReviews></MdReviews>
              </h1>
              <p className="font-[400] text-[16px] text-[#dbd8d8eb]">
                46% more than last month
              </p>
            </div>
            <div>
              <p className="font-[400] text-[16px] text-[#dbd8d8eb]">
                Active Apps
              </p>
              <h1 className="font-extrabold text-[60px]  flex gap-2 items-center">
                132+ <FaAppStoreIos></FaAppStoreIos>
              </h1>
              <p className="font-[400] text-[16px] text-[#dbd8d8eb]">
                31 more will Launch
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
