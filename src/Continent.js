import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import "./Continent.css";
import asia from "./tokyoTower.jpg";
import northAmerica from "./newyork.jpg";
import europe from "./bigben.jpg";
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

  const RenderText = () => {
    if (naButton === true) {
      return <h1>Soon</h1>;
    }
  };

  return (
    // <div>
    //   <button onClick={handleButton} to='/country' renderAs={Link}>
    //     NA
    //   </button>
    //   {RenderText()}

    // <button>South America</button>
    //   <button>Europe</button>
    //   <button>Africa</button>
    //   <button>Asia</button>
    //   <button>Australia</button>

    <div className='contain'>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <div className='contCard' onClick={handleButton}>
            <img className='contPhoto' src={asia}></img>
            {/* <h1 className='swipeText'>Hello</h1> */}
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className='contCard'>
            <img className='contPhoto' src={northAmerica}></img>
            {/* <h1 className='swipeText'>Hello</h1> */}
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className='contCard'>
            {/* <h1 className='swipeText'>Hello</h1> */}
            <img className='contPhoto' src={europe}></img>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Continent;
