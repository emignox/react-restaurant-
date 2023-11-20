import React, { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative flex items-center">
      <h1 className="logo font-extrabold text-indigo-950">
        F<span><img className="w-5 inline" src="./img/donut.png" alt="" /></span>DO
      </h1>
      <button
        onClick={toggleMenu}
        className="lg:hidden ml-auto text-indigo-950 p-2 focus:outline-none">
        {isOpen ? 'X' : '☰'}
      </button>
      {isOpen && (
        <div
          onClick={toggleMenu}
          className="menu-hamb  z-40 fixed top-0 left-0 w-full h-full flex items-center justify-center">
          <ul className="text-indigo-950 text-lg text-center font-semibold">
            <li className="py-4"><a href="#">About us</a></li>
            <li className="py-4"><a href="#">Our foods</a></li>
            <li className="py-4"><a href="#">Recipes</a></li>
            <li className="py-4"><a href="#">FAQ</a></li>
            <li className="py-4"><a href="#">Contact</a></li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
