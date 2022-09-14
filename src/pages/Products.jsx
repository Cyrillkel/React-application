import Card from '../components/elements/Card.jsx';
import { products } from '../menuList.js';
import './Products.css';
import '../components/elements/card.css';
import { Link } from 'react-router-dom';
import { useState } from 'react'; // хук, динамически рендерит изменения

function Products() {

const [count, setCount] = useState(0) 
const addProd = () => {
  setCount(count + 1)
}

  return (
    <main className="main">
      <div className="container">
        <header className="header">
          <h1>наша продукция</h1>
          <div className="header__block">
            <div className="header__busket">
              <p className="header__title-busket">{count} товара</p>
              <p className="header__subtitle-busket">на сумму 3 500 ₽</p>
            </div>
            <Link to="/Basket">
              <img
                className="header__icon-busket"
                src="images/busket.svg"
                alt="icon"
              />
            </Link>
          </div>
        </header>
        <div className="menu">
          {products.map((product) => {
            const { url, title, description, price, weight} = product;
            return (
              <Card
                url={url}
                title={title}
                description={description}
                price={price}
                weight={weight}
                addProduct={addProd}
              />
            );
          })}
        </div>
      </div>
    </main>
  );
}

export default Products;
