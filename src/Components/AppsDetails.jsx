import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import downloadImg from "../assets/icon-downloads.png";
import reviweImg from "../assets/icon-review.png";
import rating from "../assets/icon-ratings.png";
import { toast } from "react-toastify";
import { BarChart, Bar, ResponsiveContainer, CartesianGrid, XAxis, YAxis, Tooltip } from "recharts";



const data = [
  {
    name: "1 star",
    count: 400000,
  },
  {
    name: "2 star",
    count: 500000,
  },
  {
    name: "3 star",
    count: 1000000,
  },
  {
    name: "4 star",
    count: 5000000,
  },
  {
    name: "5 star",
    count: 13100000,
  },
];


const AppsDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const app = data.find((a) => String(a.id) === id);

  const {
    title,
    image,
    companyName,
    downloads,
    ratingAvg,
    reviews,
    description,
    description2,
    size,
    ratings,
  } = app;
  

  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    const existingList = JSON.parse(localStorage.getItem("install")) || [];
    const alreadyInstalled = existingList.some((a) => a.id === app.id);
    setIsInstalled(alreadyInstalled);
  }, [app.id]);

  const handleInstall = () => {
    const existingList = JSON.parse(localStorage.getItem("install")) || [];

    const isDuplicate = existingList.some((a) => a.id === app.id);
    if (isDuplicate) {
      toast("Already installed !!");
      setIsInstalled(true);
      return;
    }

    const updatedList = [...existingList, app];
    localStorage.setItem("install", JSON.stringify(updatedList));
    toast("Installed successfully !!");
    setIsInstalled(true);
  };


  // {
  //   ratings.map(data => console.log(data))
  // }

  return (
    <div className="max-w-[1280px] mx-auto py-10 p-5">
      <div className="md:flex gap-10">
        <div>
          <img
            className="w-[380px] h-[280px]"
            src={image}
            alt="coming soon.."
          />
        </div>
        <div>
          <h1 className="font-bold text-[32px]">{title}</h1>
          <span className="flex gap-2 font-semibold text-[20px]">
            Developed by <p className="text-purple-700">{companyName}</p>
          </span>

          <div className="mt-6 flex gap-x-10">
            <span className="flex flex-col items-center">
              <img className="w-10 h-10" src={downloadImg} alt="coming soon" />
              <p className="text-[16px] font-normal">Downloads</p>
              <h1 className="font-extrabold text-[40px]">{downloads}M</h1>
            </span>
            <span className="flex flex-col items-center">
              <img className="w-10 h-10" src={rating} alt="coming soon" />
              <p className="text-[16px] font-normal">Average Ratings</p>
              <h1 className="font-extrabold text-[40px]">{ratingAvg}M</h1>
            </span>
            <span className="flex flex-col items-center">
              <img className="w-10 h-10" src={reviweImg} alt="coming soon" />
              <p className="text-[16px] font-normal">Total Reviews</p>
              <h1 className="font-extrabold text-[40px]">{reviews}M</h1>
            </span>
          </div>

          <button
            onClick={handleInstall}
            disabled={isInstalled}
            className={`btn font-semibold text-[20px] mt-4 transition-colors duration-300 ${
              isInstalled
                ? "bg-gray-400 text-white cursor-not-allowed"
                : "bg-[#00d390] text-white hover:bg-[#00b880]"
            }`}
          >
            {isInstalled ? "Installed" : `Install Now (${size}MB)`}
          </button>
        </div>
      </div>

      {/* chart */}
      <div className="mt-10 flex justify-center">
        <ResponsiveContainer width="90%" height={300}>
          <BarChart
            data={ratings}
            layout="vertical"
            margin={{ top: 20, right: 30, left: 80, bottom: 20 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" />
            <YAxis dataKey="name" type="category" />
            <Tooltip />
            <Bar dataKey="count" fill="#ff8811" radius={[0, 10, 10, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-10">
        <h3 className="text-[32px] font-semibold">Description</h3>
        <p className="text-[20px] text-[#627382]">{description}</p> <br />
        <p className="text-[20px] text-[#627382]">{description2}</p> <br />
        <p className="text-[20px] text-[#627382]">{description}</p>
      </div>
    </div>
  );
};

export default AppsDetails;
