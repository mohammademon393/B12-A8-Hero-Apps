import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router';
import AllApps from '../Components/AllApps';
import AppNotFound from './AppNotFound';

const Apps = () => {
  const apps = useLoaderData();

  const [search, setSearch] = useState('');
  const term = search.trim().toLowerCase();
  const searchApps = term? apps.filter(app => app.title.toLowerCase().includes(term)) : apps;
  
  
    
    return (
      <div className="bg-gray-100">
        <div className="pt-10">
          <h2 className="font-bold text-[42px] text-center">
            Our All Applications
          </h2>
          <p className="text-[#627382] text-center">
            Explore All Apps on the Market developed by us. We code for Millions
          </p>
        </div>

        <div className="pt-10 max-w-[1280px] mx-auto md:flex justify-between pl-5">
          <h2 className="font-bold text-[24px]">
            <span>({searchApps.length})</span> Apps Found
          </h2>

          <label className="input mt-3">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              type="search"
              placeholder="Search apps"
            />
          </label>
        </div>

        {searchApps.length === 0 ? <AppNotFound></AppNotFound> : (
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-4  max-w-[1280px] mx-auto pt-4 pb-10">
            {searchApps.map((app) => (
              <AllApps key={app.id} app={app}></AllApps>
            ))}
          </div>
        )}
      </div>
    );
};

export default Apps;