import React from "react";
import { Link } from "react-router-dom";
function Continent() {
  const handleContinent = () => {};

  return (
    <div className='w-screen h-screen static'>
      <nav></nav>
      <div className='flex flex-col items-center pt-14 pb-14'>
        <div className='bg-blue-600 mt-5'>Continent</div>
        <div className='grid grid-cols-3 gap-32 mt-5 pb-5'>
          <Link to='/country'>
            <div className='w-5 md:w-56 h-5 md:h-64 bg-red-400'>Europe</div>
          </Link>
          <div className='w-5 md:w-56 h-5 md:h-64 bg-red-400'>
            North America
          </div>
          <div className='w-5 md:w-56 h-5 md:h-64 bg-red-400'>Asia</div>
          <div className='w-5 md:w-56 h-5 md:h-64 bg-red-400'>
            South America
          </div>
          <div className='w-5 md:w-56 h-5 md:h-64 bg-red-400'>Africa</div>
          <div className='w-5 md:w-56 h-5 md:h-64 bg-red-400'>Australia</div>
        </div>
        <div>Hello</div>
      </div>
    </div>
  );
}

export default Continent;
