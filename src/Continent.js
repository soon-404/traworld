import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import "./Continent.css";
import asia from "./tokyoTower.jpg";
import northAmerica from "./newyork.jpg";
import europe from "./bigben.jpg";

import SwiperCore, { EffectCube } from "swiper";
SwiperCore.use([EffectCube]);
function Continent() {
  const [naButton, setNaButton] = useState(false);
  const handleButton = () => {
    if (naButton === false) {
      console.log("na");
      setNaButton(true);
    } else {
      setNaButton(false);
    }
  };

  const renderCard = () => {
    const data = [
      { continentName: "Asia", a: 1 },
      { continentName: "North America", a: 2 },
      { continentName: "North America", a: 2 },
      { continentName: "North America", a: 2 },
      { continentName: "North America", a: 2 },
      { continentName: "North America", a: 2 },
      { continentName: "North America", a: 2 },
    ];

    return (
      <div className='contain2'>
        {data.map((cont) => (
          <SwiperSlide>
            <div className='contCard' onClick={handleButton}>
              <div className='dev'>
                <img className='contPhoto' src={asia}></img>
                {/* <h1 className='swipeText'>Hello</h1> */}
                <Link to='/country'>
                  <button className='buttoner' onClick={handleButton}>
                    {cont.continentName}
                  </button>
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
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        // effect='cube'
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
      >
        {renderCard()}
      </Swiper>
    </div>
  );

  // <div className='contain'>
  //   <Swiper
  //     spaceBetween={50}
  //     slidesPerView={1}
  //     // onSlideChange={() => console.log("slide change")}
  //     // onSwiper={(swiper) => console.log(swiper)}
  //   >
  //     <SwiperSlide>
  //       <div className='contCard' onClick={handleButton}>
  //         <div>
  //           <img className='contPhoto' src={asia}></img>
  //           {/* <h1 className='swipeText'>Hello</h1> */}
  //           <Link to='/country'>
  //             <button onClick={handleButton}>Test</button>
  //           </Link>
  //         </div>
  //       </div>
  //     </SwiperSlide>

  //     <SwiperSlide>
  //       <div className='contCard'>
  //         <img className='contPhoto' src={northAmerica}></img>
  //         {/* <h1 className='swipeText'>Hello</h1> */}
  //       </div>
  //     </SwiperSlide>

  //     <SwiperSlide>
  //       <div className='contCard'>
  //         {/* <h1 className='swipeText'>Hello</h1> */}
  //         <img className='contPhoto' src={europe}></img>
  //       </div>
  //     </SwiperSlide>
  //   </Swiper>
  // </div>
}

export default Continent;
