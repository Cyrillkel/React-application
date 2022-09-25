import { useDispatch } from 'react-redux';
import { addProduct } from '../../store/reducers/basket';
import { v4 as uuidv4 } from 'uuid';
import '../CardWrapper/CardWrapper.css';

function ProductsWrapper({ url, title, description, price, weight }) {
  const dispatch = useDispatch();
  const handelAddProduct = () => {
    let item = {
      id: uuidv4(),
      url: url,
      title: title,
      description: description,
      price: price,
      weight: weight,
    };
    dispatch(addProduct(item));
  };
  return (
    <div className="wrapper">
      <div className="product-wrapper">
        <img className="product-wrapper__img" src={url} alt="ustrica" />
      </div>
      <div className="descr-wrapper">
        <div className="descr-wrapper__title">{title}</div>
        <div className="descr-wrapper__description">{description}</div>
        <div className="price-wrapper">
          <div className="price-wrapper__block">
            <span className="price-wrapper__cost">{price}</span>
            <span className="price-wrapper__weight">{weight}</span>
            <button onClick={handelAddProduct} className="product-wrapper__btn">
              В корзину
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductsWrapper;
