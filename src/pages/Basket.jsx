import CardOrder from '../components/elements/CardOrder.jsx';
import { order } from '../orderList.js';
import Button from '../components/ui/button.js';
import '../pages/Basket.css'


function Basket() {
  return (
    <div className="section-order">
      <div className="container-order">
        <div className="header-order">
          <h1 className="header-order__title">Корзина с выбранными товарами</h1>
        </div>
        <div className="menu-order">
          {order.map((item) => {
            const { img, title, price, icon } = item;
            return <CardOrder img={img} title={title} price={price} icon={icon} />;
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

export default Basket;