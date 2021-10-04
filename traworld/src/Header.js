import React from "react";
import { useState } from "react";
function Header() {
  const [menu, setMenu] = useState(false);
  const handleMenu = () => {
    setMenu(!menu);
  };
  const styles = {
    divClass:
      "bg-blue-400 w-48 h-screen fixed left-0 top-14 pb-14 transition duration-500",
  };
  return (
    <div className='bg-red-300 h-14 w-screen fixed flex flex-row items-center'>
      <div
        className={`${styles.divClass} ${
          menu ? "transform translate-x-0" : "transform -translate-x-full"
        }`}
      ></div>
      <div
        className='bg-yellow-200 w-14 h-14 flex justify-center items-center cursor-pointer '
        onClick={handleMenu}
      >
        Icon
      </div>
      <p className='pl-6'>Traworld</p>
    </div>
  );
}

export default Header;
