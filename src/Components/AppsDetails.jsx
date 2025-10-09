import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import downloadImg from '../assets/icon-downloads.png';
import reviweImg from '../assets/icon-review.png';
import rating from '../assets/icon-ratings.png';
import { toast } from 'react-toastify';

const AppsDetails = () => {
    const data = useLoaderData();
    const  {id}  = useParams();
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
    } = app;
    

    const handleInstall =()=> {
      const exsitingList = JSON.parse(localStorage.getItem("install"));
      let updatedList = [];
      if (exsitingList) {
        const isDublicat = exsitingList.some(a=> a.id === app.id)
        if (isDublicat) {
          toast('not allowed')
        }
        updatedList = [...exsitingList, app]
      }else{
        updatedList.push(app)
      }

      localStorage.setItem("install", JSON.stringify(updatedList));
      
    }

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
                <img
                  className="w-10 h-10"
                  src={downloadImg}
                  alt="coming soon"
                />
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
              className="bg-[#00d390] btn font-semibold text-[20px] text-white mt-4"
            >
              Install Now<span>({size})</span>MB
            </button>
          </div>
        </div>

        <div>{/* chart */}</div>
        {/* description */}
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