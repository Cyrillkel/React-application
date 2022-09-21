import Products from './Pages/Products/Products.jsx';
import Basket from './Pages/Basket/Basket.jsx';
import { Routes, Route } from 'react-router-dom';
import './App.css';

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
