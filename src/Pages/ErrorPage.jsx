import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const ErrorPage = () => {
    return (
      <div>
        <Navbar></Navbar>
        <div
          className="bg-[#627382]">
          <h1>404 page not found</h1>
        </div>
        <Footer></Footer>
      </div>
    );
};

export default ErrorPage;