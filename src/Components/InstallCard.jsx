import React from "react";
import downloadImg from "../assets/icon-downloads.png";
import ratingsImg from "../assets/icon-ratings.png";

const InstallCard = ({ ins }) => {
  const { image, title, downloads, ratingAvg, size } = ins;

  return (
    <div className="max-w-[1280px] mx-auto md:mt-5 mt-4 px-4">
      <div className="rounded-xl bg-base-100 shadow-sm h-[120px] mb-4 flex gap-4">
        <figure className="p-4">
          <img
            className="w-[80px] h-[80px] rounded-xl"
            src={image}
            alt={title}
          />
        </figure>
        <div className="flex p-4">
          <div className="justify-start">
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
                <span>
                  <p className="font-semibold">{size}</p>
                </span>
              </div>
            </div>
          </div>
          <div className="flex  items-center justify-end ml-[900px]">
            <button className="btn bg-[#00d390] text-white">Uninstall</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstallCard;
