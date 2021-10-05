import { BrowserRouter, Router, Switch, Route } from "react-router-dom";
import Continent from "./Place/Continent";
import Country from "./Place/Country";
import CountryInfo from "./Place/CountryInfo.js";
import Header from "./External/Header";
import Footer from "./External/Footer";
import React, { createContext, useState } from "react";
export const SelectCont = createContext();
function App() {
  const [contState, setContState] = useState("Asia");
  const changeCont = (tempCont) => {
    setContState(tempCont);
  };
  return (
    <BrowserRouter>
      <SelectCont.Provider value={{ contState, changeCont }}>
        <Header />
        <Route exact path='/' component={Continent} />
        <Route path='/country' component={Country} />
        <Route path='/countryInfo' component={CountryInfo} />
        <Footer />
      </SelectCont.Provider>
    </BrowserRouter>
  );
}

export default App;
