import { BrowserRouter, Router, Switch, Route } from "react-router-dom";
import Continent from "./Continent";
import Country from "./Country";
import Header from "./Header";
import Footer from "./Footer";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Route exact path='/' component={Continent} />
      <Route path='/country' component={Country} />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
