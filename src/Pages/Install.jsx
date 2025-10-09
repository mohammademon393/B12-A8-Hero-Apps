import React, { useEffect, useState } from 'react';
import InstallCard from '../Components/InstallCard';

const Install = () => {
  const [install, setInstall] = useState([]);
  useEffect(()=>{
    const savedList = JSON.parse(localStorage.getItem("install"));
    if (savedList) {
      setInstall(savedList)
    }
  },[]);



  return (
    <div className="bg-gray-100 pb-10 ">
      <div className="pt-10">
        <h2 className="font-bold text-[42px] text-center">
          Our All Applications
        </h2>
        <p className="text-[#627382] text-center">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>

      <div className="pt-10 px-4 max-w-[1280px] mx-auto flex justify-between">
        <h2 className="font-bold text-[24px]">
          <span>({install.length})</span> Apps Found
        </h2>
        <button className="btn btn-outline">Sort by</button>
      </div>

      <div>
        {install.map((ins) => (
          <InstallCard ins={ins} key={ins.id}></InstallCard>
        ))}
      </div>
    </div>
  );
};

export default Install;