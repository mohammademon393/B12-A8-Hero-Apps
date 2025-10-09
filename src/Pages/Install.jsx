import React, { useEffect, useState } from 'react';

const Install = () => {
  const [install, setInstall] = useState([]);
  useEffect(()=>{
    const savedList = JSON.parse(localStorage.getItem("install"));
    if (savedList) {
      setInstall(savedList)
    }
  },[]);



  return (
    <div className="bg-gray-100">
      <h1>install: {install.length}</h1>
    </div>
  );
};

export default Install;