import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SelectCont } from "../App";
import { useContext } from "react";
function Continent() {
  const { contState, changeCont } = useContext(SelectCont);
  // const [continet, setContinent] = useState("Europe");
  // const handleCountry = (cont) => {
  //   changeCont(cont);
  // };

  const data = [
    { continent: "Europe" },
    { continent: "Asia" },
    { continent: "Australia" },
  ];

  return (
    <div className='w-screen h-screen static'>
      <div className='flex flex-col items-center pt-14 pb-14'>
        <div className='bg-blue-600 mt-5'>Continent</div>
        <div className='grid grid-cols-3 gap-32 mt-5 pb-5'>
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
