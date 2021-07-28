import "./App.css";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Continent from "./Continent.js";
import Country from "./Country";

function App() {
  return (
    <Router>
      <Link to='/country'>Country</Link>
      <Switch>
        <Route exact path='/'>
          <div className='App'>
            <h1>Test</h1>
            <Continent />
          </div>
        </Route>
        <Route path='/country'>
          <Country />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
