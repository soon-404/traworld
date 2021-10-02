import { BrowserRouter, Router, Switch, Route } from "react-router-dom";
import Continent from "./Continent";
function App() {
  return (
    <BrowserRouter>
      <Route path='/' component={Continent} />
    </BrowserRouter>
  );
}

export default App;
