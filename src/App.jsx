import 'bootstrap/dist/css/bootstrap.min.css'; 
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import NavBar from './components/NavBar'
import Offers from './components/Offers';
import Travels from './components/Travels';
import CreateRide from './components/CreateRide';

function App() {

  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/offers" element={<Offers/>}/>
        <Route path="/travels" element={<Travels/>}/>
        <Route path='/offer-ride' element={<CreateRide/>}/>
      </Routes>
      
    </div>
  )
}

export default App
