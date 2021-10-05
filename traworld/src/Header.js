import React, { useState } from "react";
import { Link } from "react-router-dom";
const Header = (props) => {
  const [menu, setMenu] = useState(false);
  const handleMenu = () => {
    setMenu(!menu);
  };

  const styles = {
    divClass:
      "bg-blue-400 w-48 h-screen fixed left-0 top-14 pb-14 transition duration-300 flex flex-col items-center",
  };

  return (
    <div className='bg-red-300 h-14 w-screen fixed flex flex-row items-center '>
      <div
        className={`${styles.divClass} ${
          menu ? "transform translate-x-0" : "transform -translate-x-full"
        }`}
      >
        <Link to='/Country'>
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
        className='bg-yellow-200 w-14 h-14 flex justify-center items-center cursor-pointer '
        onClick={handleMenu}
      >
        Icon
      </div>
      <p className='pl-6'>Traworld</p>
    </div>
  );
};

export default Header;
