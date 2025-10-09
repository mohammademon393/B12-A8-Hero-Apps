import React, { useEffect, useState } from 'react';
import InstallCard from '../Components/InstallCard';

const Install = () => {
  const [install, setInstall] = useState([]);
  const [sortOrder, setSortOrder] = useState('none');


  useEffect(()=>{
    const savedList = JSON.parse(localStorage.getItem("install"));
    if (savedList) {
      setInstall(savedList)
    }
  },[]);


  const sortedItem =()=>{
    if (sortOrder === "size-asc") {
      return [...install].sort((a, b) => a.size - b.size);
    }else if (sortOrder === "size-dsc") {
      return [...install].sort((a, b) => b.size - a.size);
    }else{
      return install;
    }
  }

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
        <label className="form-control w-full max-w-xs">
          <select
            className="select select-bordered"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="none">Sort by size</option>
            <option value="size-asc">Low-&gt;High</option>
            <option value="size-dsc">High-&gt;Low</option>
          </select>
        </label>
      </div>

      <div>
        {sortedItem().map((ins) => (
          <InstallCard
            setInstall={setInstall}
            ins={ins}
            key={ins.id}
          ></InstallCard>
        ))}
      </div>
    </div>
  );
};

export default Install;