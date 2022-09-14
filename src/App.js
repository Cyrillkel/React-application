import './App.css';
import Products from './Pages/Products.jsx';
import Basket from './Pages/Basket.jsx';
import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="">
      <Routes>
        <Route path='/' element = {<Products/>}/>
        <Route path='/Basket' element = {<Basket/>}/>
      </Routes>    
    </div>
  );
}

export default App;
