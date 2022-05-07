import 'bootstrap/dist/css/bootstrap.min.css'; 
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import NavBar from './components/NavBar'
import Offers from './components/Offers';

function App() {

  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/offers" element={<Offers/>}/>
      </Routes>
      
    </div>
  )
}

export default App
