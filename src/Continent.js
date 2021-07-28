import React, { useState } from "react";
import { Link } from "react-router-dom";
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
    <div>
      <button onClick={handleButton} to='/country' renderAs={Link}>
        NA
      </button>
      {RenderText()}

      {/* <button>South America</button>
      <button>Europe</button>
      <button>Africa</button>
      <button>Asia</button>
      <button>Australia</button> */}
    </div>
  );
}

export default Continent;
