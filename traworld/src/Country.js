import React from "react";
import { SelectCont } from "./App";
import { useContext } from "react";
const Country = (props) => {
  const { contState, changeCont } = useContext(SelectCont);

  const Test = () => <p className='bg-blue-100'>{contState}</p>;

  return (
    <div className='w-screen h-screen static'>
      <div className='flex flex-col items-center pt-14 pb-14'>
        <Test />
      </div>
    </div>
  );
};

export default Country;
