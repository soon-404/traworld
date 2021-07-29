import "./App.css";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Continent from "./Continent.js";
import Country from "./Country";

export const NavBar = () => {
  return (
    <nav class='navbar navbar-light bg-light'>
      <div class='container-fluid'>
        <span class='navbar-brand mb-0 h1'>TraWorld</span>
      </div>
    </nav>
  );
};

function App() {
  return (
    <Router>
      <NavBar />
      {/* <Link to='/country'>Country</Link> */}
      <Switch>
        <Route exact path='/'>
          <Continent />
        </Route>
        <Route path='/country'>
          <Country />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
