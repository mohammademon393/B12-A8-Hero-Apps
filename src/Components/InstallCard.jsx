import React from "react";
import downloadImg from "../assets/icon-downloads.png";
import ratingsImg from "../assets/icon-ratings.png";
import { toast } from "react-toastify";

const InstallCard = ({ ins, setInstall }) => {
  const { image, title, downloads, ratingAvg, size } = ins;


  const removeInstall = (id) => {
    const savedList = JSON.parse(localStorage.getItem("install")) || [];
    const updatedList = savedList.filter((item) => item.id !== id);
    localStorage.setItem("install", JSON.stringify(updatedList)); 
    setInstall(updatedList); 
    toast("App unstall sucssecfull")
  };

  return (
    <div className="max-w-[1280px] mx-auto md:mt-5 mt-4 px-4">
      <div className="rounded-xl bg-base-100 shadow-sm h-[120px] mb-4 flex gap-4 overflow-hidden">
        <figure className="p-4">
          <img
            className="w-[80px] md:min-w-[100px] h-[80px] rounded-xl"
            src={image}
            alt={title}
          />
        </figure>
        <div className="flex p-4">
          <div className="justify-start ml-[-30px]">
            <h2 className="font-semibold text-xl">{title}</h2>
            <div className="flex gap-4">
              <div className="flex gap-4 mt-3">
                <span className="flex items-center text-green-500 gap-2 font-semibold">
                  <img
                    className="w-[16px] h-[16px]"
                    src={downloadImg}
                    alt={title}
                  />
                  <p>{downloads}</p>
                </span>
                <span className="flex items-center text-orange-500 gap-2 font-semibold">
                  <img
                    className="w-[16px] h-[16px]"
                    src={ratingsImg}
                    alt={title}
                  />
                  <p>{ratingAvg}</p>
                </span>
                <p className="font-semibold text-[16px] md:font-[500]">
                  {size}MB
                </p>
              </div>
            </div>
          </div>
          <div className="md:flex justify-center ml-[100px] items-center md:ml[400px] lg:ml-[750px] overflow-hidden">
            <button
              onClick={() => removeInstall(ins.id)}
              className="btn justify-end bg-[#00d390] text-white"
            >
              Uninstall
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstallCard;
