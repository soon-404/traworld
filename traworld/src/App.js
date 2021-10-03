import { BrowserRouter, Router, Switch, Route } from "react-router-dom";
import Continent from "./Continent";
import Country from "./Country";
function App() {
  return (
    <BrowserRouter>
      <div className='bg-red-300 h-14 w-screen fixed flex flex-row items-center'>
        <div className='bg-yellow-200 w-14 h-14 flex justify-center items-center'>
          Icon
        </div>
        <p className='pl-6'>Traworld</p>
      </div>
      <Route exact path='/' component={Continent} />
      <Route path='/country' component={Country} />
      <div className='bg-red-800 fixed bottom-0 h-14 w-screen'>Footer</div>
    </BrowserRouter>
  );
}

export default App;
