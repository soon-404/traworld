import React from "react";
import Sidebar from "./Sidebar";
function Header() {
  return (
    <div className='bg-red-300 h-14 w-screen fixed flex flex-row items-center'>
      <Sidebar />
      <div
        className='bg-yellow-200 w-14 h-14 flex justify-center items-center cursor-pointer '
        onClick={Sidebar.handleMenu}
      >
        Icon
      </div>
      <p className='pl-6'>Traworld</p>
    </div>
  );
}

export default Header;
