import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import Home from './pages/Home/Home';
import Hotels from './pages/Hotels/Hotels';
import Hotel from './pages/Hotel/Hotel';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element = {<Home/>}/>
      <Route path='/hotels' element = {<Hotels/>}/>
      <Route path='/hotels/:id' element = {<Hotel/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
