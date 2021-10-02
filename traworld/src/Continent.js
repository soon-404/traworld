import React from "react";

function Continent() {
  return (
    <div className='w-screen h-screen static'>
      <nav>
        <div className='bg-red-300 h-14 w-screen fixed'>Traworld</div>
      </nav>
      <div className='flex flex-col items-center pt-14 '>
        <div className='bg-blue-600 mt-5'>Continent</div>
        <div className='grid grid-cols-3 gap-32 mt-5'>
          <div className='w-56 h-64 bg-red-400'>Europe</div>
          <div className='w-56 h-64 bg-red-400'>North America</div>
          <div className='w-56 h-64 bg-red-400'>Asia</div>
          <div className='w-56 h-64 bg-red-400'>South America</div>
          <div className='w-56 h-64 bg-red-400'>Africa</div>
          <div className='w-56 h-64 bg-red-400'>Australia</div>
        </div>
      </div>
      <div className='bg-red-800 fixed bottom-0 h-14 w-screen'>Footer</div>
    </div>
  );
}

export default Continent;
