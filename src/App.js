import Products from './Pages/Products/Products.jsx';
import Basket from './Pages/Basket/Basket.jsx';
import { Routes, Route } from 'react-router-dom';
import CardProduct from './Pages/CardProducts/CardProducts.jsx'
import NotFound from './Pages/NotFound/NotFound.jsx';
import './App.css';

function App() {
  return (
      <Routes>
        <Route path='/' element = {<Products/>}/>
        <Route path='/Basket' element = {<Basket/>}/>
        <Route path='/CardProduct' element = {<CardProduct/>}/>
        <Route path='*' element = {<NotFound/>}/>
      </Routes>    
  );
}

export default App;
