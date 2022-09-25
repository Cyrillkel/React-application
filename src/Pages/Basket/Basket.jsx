import CardOrder from '../../components/elements/CardOrder/CardOrder.jsx';
import Header from '../../components/ui/Header/Header.jsx';
import Button from '../../components/ui/Button/button.js';
import { useSelector } from 'react-redux';
import './Basket.css';


function Basket() {

  const { basket, price } = useSelector(state => state.basket)

  return (
    <div className="section-order">
      <div className='order-content'>
        <div className="container-order">
          <Header />
          <div className="menu-order">
            {basket.length !== 0 ? basket.map((item) => {
              const { url, title, price, id } = item;
              return (
              <CardOrder
                url={url}
                title={title}
                price={price}
                key={id}
                id={id}
              />
              )
            }) : <p className='menu-order__subtitle'>Ваша корзина пуста</p>}
          </div>
        </div>
      </div>
      <div className="footer-order">
          <div className="container-order">
            <div className="footer-order__content">
              <div className="footer-order__text">
                <span className='footer-order__order'>Заказ на сумму:</span>
                <span className="footer-order__price">{price} ₽</span>
              </div>
              <Button />
            </div>
          </div>
        </div>
    </div>
  );
}

export default Basket;