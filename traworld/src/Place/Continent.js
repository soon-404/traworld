import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SelectCont } from "../App";
import { useContext } from "react";
function Continent() {
  const { contState, changeCont } = useContext(SelectCont);

  const data = [
    { continent: "Europe" },
    { continent: "Asia" },
    { continent: "Australia" },
    { continent: "Australia" },
    { continent: "Australia" },
    { continent: "Australia" },
  ];

  return (
    <div className='w-screen h-screen'>
      <div className='flex flex-col items-center h-full pt-14 mb-14 bg-map bg-cover bg-center bg-fixed overflow-auto justify-center'>
        <div className='bg-blue-600 mt-5'>Continent</div>
        <div className='grid grid-cols-3 gap-6 mt-5 pb-16'>
          {data.map((c) => (
            <Link to='/country' onClick={() => changeCont(c.continent)}>
              <div className='w-5 md:w-56 h-5 md:h-64 bg-red-400 flex flex-col items-center'>
                <p>{c.continent}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Continent;
