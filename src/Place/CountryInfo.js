import React from "react";
import { SelectCont } from "../App";
import { useContext } from "react";
import { Link } from "react-router-dom";
import europe from "../Images/europe.jpeg";
import { SelectCountry } from "../App";
function CountryInfo() {
  const { countryState, changeCountry } = useContext(SelectCountry);
  const data = [
    { Place: "Eifel Tower", image: europe },
    { Place: "Colosseum", image: europe },
    { Place: "Ttavo", image: europe },
    { Place: "-", image: europe },
    { Place: "-", image: europe },
    { Place: "-", image: europe },
  ];
  return (
    <div className='w-screen h-screen '>
      <div className='flex flex-col items-center h-screen bg-italy bg-cover bg-center bg-fixed justify-center overflow-auto'>
        <p className='text-white text-4xl font-body font-bold m-5'>Italy</p>
      </div>
    </div>
  );
}

export default CountryInfo;
