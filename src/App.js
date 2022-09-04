import "./App.css";
// import Card from './components/elements/card.jsx';
// import { products } from '../src/menuList.js';
import Order from "../src/components/elements/CardOrder.jsx";
import { order } from "./orderList.js";
import Button from "./components/ui/button.js";

function App() {
  return (
    // <main className="main">
    //   <div className="container">
    //     <header className="header">
    //       <h1>наша продукция</h1>
    //       <div className="header__block">
    //         <div className="header__busket">
    //           <p className="header__title-busket">3 товара</p>
    //           <p className="header__subtitle-busket">на сумму 3 500 ₽</p>
    //         </div>
    //         <img
    //           className="header__icon-busket"
    //           src="images/busket.svg"
    //           alt="icon"
    //         />
    //       </div>
    //     </header>

    //     <div className="menu">
    //       {products.map((key) => {
    //         const { url, title, description, price, weight, icon } = key;
    //         return (
    //           <Card
    //             url={url}
    //             title={title}
    //             description={description}
    //             price={price}
    //             weight={weight}
    //             icon={icon}
    //           />
    //         );
    //       })}
    //     </div>
    //   </div>
    // </main>
    <div className="section-order">
      <div className="container-order">
        <div className="header-order">
          <h1 className="header-order__title">Корзина с выбранными товарами</h1>
        </div>
        <div className="menu-order">
          {order.map((key) => {
            const { img, title, price, icon } = key;
            return <Order img={img} title={title} price={price} icon={icon} />;
          })}
        </div>
      </div>
      <div className="footer-order">
        <div className="container-order">
          <div className="footer-order__content">
            <p className="footer-order__text">
              заказ на сумму:
              <div className="footer-order__price">6 220 ₽</div>
            </p>
            <Button></Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
