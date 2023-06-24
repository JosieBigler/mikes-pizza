import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-gray-800 text-white p-4 flex items-center">
      <ul className="flex justify-start space-x-4">
        {/* <li><a href="#home">Home</a></li> */}
        <li><a href="#menu">Menu</a></li>
        {/* <li><a href="#about">About</a></li> */}
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
