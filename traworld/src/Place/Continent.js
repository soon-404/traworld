import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SelectCont } from "../App";
import { useContext } from "react";
import europe from "../Images/europe.jpeg";
function Continent() {
  const { contState, changeCont } = useContext(SelectCont);

  const data = [
    { continent: "Europe", image: europe },
    { continent: "Asia", image: europe },
    { continent: "Australia", image: europe },
    { continent: "N America", image: europe },
    { continent: "S America", image: europe },
    { continent: "Africa", image: europe },
  ];

  return (
    <div className='w-screen h-screen '>
      <div className='flex flex-col items-center h-screen bg-map bg-cover bg-center bg-fixed justify-center overflow-auto'>
        <p className='text-white text-4xl font-body font-bold m-5'>Continent</p>

        <div className='grid grid-cols-3 gap-12  '>
          {data.map((c) => (
            <Link to='/country' onClick={() => changeCont(c.continent)}>
              <div className='bg-gray-50 bg-opacity-30 rounded-3xl w-5 md:w-64 h-5 md:h-64 flex flex-col items-center'>
                <p className='font-body text-lg text-white'>{c.continent}</p>
                <img src={c.image} className='w-40 h-56'></img>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Continent;
