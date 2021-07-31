import React, { useState } from "react";
import "./Country.css";
function Country() {
  const whichContinent = () => {
    const countryAsia = [{ a: 1, b: 2 }];
    const countryNA = [{ a: 1, b: 2 }];
  };

  const handle = () => {
    console.log("hello");
  };
  return (
    <div class='container bg-primary'>
      {/* <text className='textCountry'>country</text> */}
      <div class='row row-cols-1 row-cols-lg-5 g-3 g-lg-3'>
        <div class='col'>
          <div class='p-3 border bg-light' role='button' onClick={handle}>
            Row
          </div>
        </div>
        <div class='col'>
          <div class='p-3 border bg-light'>Row column</div>
        </div>
        <div class='col'>
          <div class='p-3 border bg-light'>Row column</div>
        </div>
        <div class='col'>
          <div class='p-3 border bg-light'>Row column</div>
        </div>
        <div class='col'>
          <div class='p-3 border bg-light'>Row column</div>
        </div>
        <div class='col'>
          <div class='p-3 border bg-light'>Row column</div>
        </div>
        <div class='col'>
          <div class='p-3 border bg-light'>Row column</div>
        </div>
        <div class='col'>
          <div class='p-3 border bg-light'>Row column</div>
        </div>
        <div class='col'>
          <div class='p-3 border bg-light'>Row column</div>
        </div>
        <div class='col'>
          <div class='p-3 border bg-light'>Row column</div>
        </div>

        <div class='col'>
          <div class='p-3 border bg-light'>5555</div>
        </div>
      </div>
    </div>
  );
}

export default Country;
