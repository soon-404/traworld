import React, { useContext } from "react";
import { Link } from "react-router-dom";
import MenuContext from "./MenuContext";
function Sidebar() {
  const { menu, handleMenu } = useContext(MenuContext);
  const styles = {
    divClass:
      "bg-yellow-300  w-48 h-side fixed items-center left-0 transition duration-300 flex flex-col items-center",
  };

  return (
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
  );
}

export default Sidebar;
