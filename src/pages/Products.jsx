import Card from '../components/elements/card.js';
import { products } from '../menuList.js';
import './Products.css';
import '../components/elements/card.css'

function Products() {
  return (
    <main className="main">
      <div className="container">
        <header className="header">
          <h1>наша продукция</h1>
          <div className="header__block">
            <div className="header__busket">
              <p className="header__title-busket">3 товара</p>
              <p className="header__subtitle-busket">на сумму 3 500 ₽</p>
            </div>
            <img
              className="header__icon-busket"
              src="images/busket.svg"
              alt="icon"
            />
          </div>
        </header>
        <div className="menu">
          {products.map((product) => {
            const { url, title, description, price, weight, icon } = product;
            return (
              <Card
                url={url}
                title={title}
                description={description}
                price={price}
                weight={weight}
                icon={icon}
              />
            );
          })}
        </div>
      </div>
    </main>
  );
}

export default Products;
