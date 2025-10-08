import React from 'react';
import logo from '../assets/logo.png';
import { Link, NavLink } from 'react-router';
import { House } from 'lucide-react';
import { FaAppStore, FaAppStoreIos, FaDownload, FaGithub, FaHome } from 'react-icons/fa';

const Navbar = () => {
    return (
      <div className="bg-base-100 shadow-sm">
        <div className="navbar max-w-[1280px] mx-auto">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Parent</a>
                  <ul className="p-2">
                    <li>
                      <a>Submenu 1</a>
                    </li>
                    <li>
                      <a>Submenu 2</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a>Item 3</a>
                </li>
              </ul>
            </div>
            <Link
              to={"/"}
              className="flex gap-2 font-bold items-center text-xl"
            >
              <img className="w-10 h-10" src={logo} alt="" />
              HERO.IO
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li className="font-[500] text-[16px]">
                <NavLink to={"/"}>
                  <FaHome className="w-[20px] mr-[-5px]"></FaHome>
                  Home
                </NavLink>
              </li>
              <li className="font-[500] text-[16px]">
                <NavLink to={"/apps"}>
                  <FaAppStoreIos className="w-[20px] mr-[-5px]"></FaAppStoreIos>
                  Apps
                </NavLink>
              </li>
              <li className="font-[500] text-[16px]">
                <NavLink to={"/install"}>
                  <FaDownload className="w-[20px] mr-[-5px]"></FaDownload>
                  Install
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="navbar-end">
            <a className="rounded-md bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)] btn text-white">
              <FaGithub></FaGithub>
              Contribute
            </a>
          </div>
        </div>
      </div>
    );
};

export default Navbar;