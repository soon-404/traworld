import React from "react";
import { SelectCont } from "../App";
import { useContext } from "react";
import { Link } from "react-router-dom";
const Country = (props) => {
  const { contState, changeCont } = useContext(SelectCont);

  const ContinentHead = () => <p className='bg-blue-100 m-4'>{contState}</p>;
  const SearchBar = () => <div className='bg-green-400 h-10 w-96 mb-5'></div>;

  const country = [{ name: "Italy" }, { name: "German" }, { name: "England" }];

  return (
    <div className='w-screen h-screen static'>
      <div className='flex flex-col items-center w-full h-full pt-14 pb-14'>
        <ContinentHead />
        <SearchBar />
        <div className='w-table h-full bg-blue-500 mb-10 overflow-y-auto'>
          {country.map((c) => (
            <Link to='/countryInfo'>
              <div className='p-10 m-2 bg-gray-400 flex relative items-center'>
                <p className='absolute left-7'>{c.name}</p>
                <p className='absolute right-7'>Flag</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Country;
