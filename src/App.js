import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Welcome from './welcome';
import Loginform from './login';
import SeatSelection from './seatselection';
import ThankYou from './ThankYou';
import Mainpage from './mainpage';




function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route index path='/' element={<Welcome/>}/>
          <Route index path='/login' element={<Loginform/>}/>
          <Route index path='/mainpage' element={<Mainpage/>}/>
          <Route index path='/seatselection' element={<SeatSelection/>}/>
          <Route index path='/ThankYou' element={<ThankYou/>}/>
        </Routes>
      </Router>
      
      {/* <Mainpage></Mainpage> */}
         </div>
  );
}

export default App;
