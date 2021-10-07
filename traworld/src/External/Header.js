import React, { Children, useState } from "react";
import { Link } from "react-router-dom";
import menuImage from "../Images/menu.png";
import Continent from "../Place/Continent";
import Country from "../Place/Country";
import CountryInfo from "../Place/CountryInfo.js";
import { BrowserRouter, Router, Switch, Route } from "react-router-dom";
const Header = () => {
  const [menu, setMenu] = useState(false);
  const handleMenu = () => {
    setMenu(!menu);
  };

  const styles = {
    divClass:
      "bg-yellow-300  w-48 h-side fixed items-center left-0 transition duration-300 flex flex-col items-center",
  };

  return (
    <div className='w-screen h-screen flex items-center'>
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
      <div className='bg-black h-bar w-screen fixed top-0 flex flex-row items-center '>
      

        <div
        className='bg-h-5 bg-center w-14 h-bar flex justify-center items-center cursor-pointer '
        onClick={handleMenu}
        >
          <img src={menuImage} className='w-6 h-6'></img>
        </div>
        <p className='pl-6 font-appName text-3xl text-white'>Traworld</p>
      </div>
      <Route exact path='/' component={Continent} />
      <Route path='/country' component={Country} />
      <Route path='/countryInfo' component={CountryInfo} />
  </div>
  );
};

export default Header;
