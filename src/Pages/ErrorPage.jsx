import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import errorImg from '../assets/error-404.png';

const ErrorPage = () => {
    return (
      <div>
        <Navbar></Navbar>
        <div className="bg-gray-100 p-10 flex flex-col items-center justify-center">
          <div className="max-w-[1280px] mx-auto text-center">
            <img
              className="ml-20 w-[300px] h-[250px]"
              src={errorImg}
              alt="coming soon.."
            />
            <h1 className="font-semibold text-[48px]">Oops, page not found!</h1>
            <p className="text-[#627382] text-[20px]">
              The page you are looking for is not available.
            </p>
            <button className="rounded-md bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)] btn text-white">
              Go Back
            </button>
          </div>
        </div>
        <Footer></Footer>
      </div>
    );
};

export default ErrorPage;