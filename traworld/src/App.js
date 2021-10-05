import { BrowserRouter, Router, Switch, Route } from "react-router-dom";
import Continent from "./Continent";
import Country from "./Country";
import Header from "./Header";
import Footer from "./Footer";
import React, { useContext, createContext, useState } from "react";
export const SelectCont = createContext();
function App() {
  const [contState, setContState] = useState();
  const changeCont = (tempCont) => {
    setContState(tempCont);
  };
  return (
    <BrowserRouter>
      <SelectCont.Provider value={{ contState, changeCont }}>
        <Header />
        <Route exact path='/' component={Continent} />
        <Route path='/country' component={Country} />
        <Footer />
      </SelectCont.Provider>
    </BrowserRouter>
  );
}

export default App;
