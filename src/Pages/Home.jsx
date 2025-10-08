import React from 'react';
import Banner from '../Components/Banner';
import TrendingApps from '../Components/TrendingApps';
import { Link, useLoaderData } from 'react-router';

const Home = () => {
    const AppsData = useLoaderData();
    // console.log(AppsData);
    
    
    return (
      <div className=" bg-gray-100">
        <Banner></Banner>
        <div className="mt-10">
          <h2 className="font-bold text-3xl text-center">Trending Apps</h2>
          <p className="text-[#627382] text-center">
            Explore All Trending Apps on the Market developed by us
          </p>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-4  max-w-[1280px] mx-auto my-10">
            {AppsData.map((apps) => (
              <TrendingApps key={apps.id} apps={apps}></TrendingApps>
            ))}
          </div>
          <div className='flex justify-center'>
            <Link to={'/apps'} className="btn btn-primary mb-5 text-center">
              Show All Apps
            </Link>
          </div>
        </div>
      </div>
    );
};

export default Home;