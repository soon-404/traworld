import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper.scss";
import "./Continent.css";

import asia from "./tokyoTower.jpg";
import northAmerica from "./newyork.jpg";
import southAmerica from "./peru.jpg";
import europe from "./bigben.jpg";
import australia from "./australia.jpg";
import africa from "./sahara.jpg";
import antartica from "./ice.jpg";

function Continent() {
  const renderCard = () => {
    const data = [
      { continentName: "Asia", continentPhoto: asia },
      { continentName: "North America", continentPhoto: northAmerica },
      { continentName: "South America", continentPhoto: southAmerica },
      { continentName: "Europe", continentPhoto: europe },
      { continentName: "Australia", continentPhoto: australia },
      { continentName: "Africa", continentPhoto: africa },
      { continentName: "Antarctica", continentPhoto: antartica },
    ];

    return (
      <div className='contain2'>
        {data.map((cont) => (
          <SwiperSlide>
            <div className='contCard'>
              <div className='dev'>
                <img className='contPhoto' src={cont.continentPhoto}></img>
                {/* <h1 className='swipeText'>Hello</h1> */}
                <Link to='/country' className='linkBox'>
                  <button className='buttoner'>{cont.continentName}</button>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </div>
    );
  };

  return (
    <div className='contain'>
      <Swiper spaceBetween={50} slidesPerView={1}>
        {renderCard()}
      </Swiper>
    </div>
  );
}

export default Continent;
