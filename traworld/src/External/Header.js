import React from "react";
import { useContext } from "react";
import menuImage from "../Images/menu.png";
import MenuContext from "./MenuContext";
const Header = () => {
  const { menu, handleMenu } = useContext(MenuContext);
  return (
    <div className='bg-black h-bar w-screen fixed top-0 flex flex-row items-center '>
      <div
        className='bg-h-5 bg-center w-14 h-bar flex justify-center items-center cursor-pointer '
        onClick={handleMenu}
      >
        <img src={menuImage} className='w-6 h-6'></img>
      </div>
      <p className='pl-6 font-appName text-3xl text-white'>Traworld</p>
    </div>
  );
};

export default Header;
