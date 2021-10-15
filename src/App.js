import { BrowserRouter, Route } from "react-router-dom";
import Continent from "./Place/Continent";
import Country from "./Place/Country";
import CountryInfo from "./Place/CountryInfo";
import TravelPlace from "./Place/TravelPlace";
import Header from "./External/Header";
import Footer from "./External/Footer";
import Sidebar from "./External/Sidebar";
import MenuContext from "./External/MenuContext";
import React, { createContext, useState } from "react";

export const SelectCont = createContext();
export const SelectCountry = createContext();

function App() {
  const [contState, setContState] = useState("Asia");
  const changeCont = (tempCont) => {
    setContState(tempCont);
  };

  const [countryState, setCountryState] = useState("Thailand");
  const changeCountry = (tempCountry) => {
    setContState(tempCountry);
  };

  const [menu, setMenu] = useState(false);
  const handleMenu = () => {
    setMenu(!menu);
  };

  return (
    <BrowserRouter>
      <SelectCont.Provider value={{ contState, changeCont }}>
        <SelectCountry.Provider value={{ countryState, changeCountry }}>
          <MenuContext.Provider value={{ menu, handleMenu }}>
            <div className='w-screen h-screen flex items-center'>
              <Header />
              <Route exact path='/' component={Continent} />
              <Route path='/country' component={Country} />
              <Route path='/countryInfo' component={CountryInfo} />
              <Route path='/travelPlace' component={TravelPlace} />
              <Sidebar />
              <Footer />
            </div>
          </MenuContext.Provider>
        </SelectCountry.Provider>
      </SelectCont.Provider>
    </BrowserRouter>
  );
}

export default App;
