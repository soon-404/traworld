import React, { useState } from "react";
import { Link } from "react-router-dom";
import menuImage from "../Images/menu.png";
const Header = () => {
  const [menu, setMenu] = useState(false);
  const handleMenu = () => {
    setMenu(!menu);
  };

  const styles = {
    divClass:
      "bg-blue-400  w-48 h-full absolute left-0 top-14 transition duration-300 flex flex-col items-center",
  };

  return (
    // <div className='w-screen h-screen bg-blue-600'>
    <div className='bg-red-100 bg-opacity-20 h-14 w-screen fixed flex flex-row items-center '>
      <div
        className={`${styles.divClass} ${
          menu ? "transform translate-x-0" : "transform -translate-x-full"
        }`}
      >
        <Link to='/'>
          <div className='p-3'>Explore</div>
        </Link>
        <Link to='/Country'>
          <div className='p-3'>Get Postcard</div>
        </Link>
        <Link to='/Country'>
          <div className='p-3'>Saved Place</div>
        </Link>
        <Link to='/Country'>
          <div className='p-3'>Basic Language</div>
        </Link>
      </div>

      <div
        className='bg-h-5 bg-center w-14 h-14 flex justify-center items-center cursor-pointer '
        onClick={handleMenu}
      >
        <img src={menuImage} className='w-6 h-6'></img>
      </div>
      <p className='pl-6 font-appName text-3xl'>Traworld</p>
    </div>
    // </div>
  );
};

export default Header;
