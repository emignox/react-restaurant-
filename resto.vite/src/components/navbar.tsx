import { useState } from "react";
import donut from "/donut.png";
import Svg4 from "./svg4";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className=" flex justify-between items-center lg:flex lg:flex-row lg:items-center lg:justify-start p-0 lg:px-20 px-5">
      <h1 className="logo font-extrabold text-indigo-950 ">
        F
        <span>
          <img className="w-5 inline" src={donut} alt="" />
        </span>
        DO
      </h1>
      <Svg4 />

      <div className="flex flex-row ">
        <ul className=" lg:flex text-indigo-950 lg:text-base lg:text-center lg:font-semibold  hidden ">
          <li className="py-4 mx-6">
            <a href="#">About us</a>
          </li>
          <li className="py-4  mx-6">
            <a href="#">Our foods</a>
          </li>
          <li className="py-4  mx-6">
            <a href="#">Recipes</a>
          </li>
          <li className="py-4  mx-6">
            <a href="#">FAQ</a>
          </li>
          <li className="py-4  mx-6">
            <a href="#">Contact</a>
          </li>
          <li className="py-4  font-light   ml-72  ">
            <a href="#"> Sign in / Register</a>
          </li>
        </ul>
      </div>

      <button
        onClick={toggleMenu}
        className="lg:hidden ml-auto text-indigo-950  focus:outline-none"
      >
        {isOpen ? "X" : "☰"}
      </button>
      {isOpen && (
        <div
          onClick={toggleMenu}
          className="menu-hamb z-40 fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center  "
        >
          <h1 className="logo text-3xl font-black text-indigo-950  my-10">
            F
            <span>
              <img className="w-10 inline " src={donut} alt="" />
            </span>
            DO
          </h1>
          <ul className="text-indigo-950 text-lg text-center font-semibold">
            <li className="py-4">
              <a href="#">About us</a>
            </li>
            <li className="py-4">
              <a href="#">Our foods</a>
            </li>
            <li className="py-4">
              <a href="#">Recipes</a>
            </li>
            <li className="py-4">
              <a href="#">FAQ</a>
            </li>
            <li className="py-4">
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
