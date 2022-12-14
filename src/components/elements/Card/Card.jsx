import { useDispatch } from 'react-redux';
import { addProduct } from '../../../store/reducers/basket.jsx';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';
import { openProductPage } from '../../../store/reducers/cardPage.jsx'

function Card({ url, title, description, price, weight }) {
  
  const dispatch = useDispatch() 

  const addProd = (e) => {
    let item = {
      id: uuidv4(), 
      title: title,
      url: url,
      price: price,
      description: description,
      weight: weight
    } 
    e.preventDefault()
    e.stopPropagation()
    dispatch(addProduct(item)) 
  }

  const openProd = () => {
    let item = {
      id: uuidv4(), 
      title: title,
      url: url,
      price: price,
      description: description,
      weight: weight
    } 
    dispatch(openProductPage(item)) 
  }

  return (
    <Link onClick={openProd} to="/CardProduct" style={{ textDecoration: 'none' }}>
    <div className="card">
      <img className="card-preveiw" src={url} alt="" />
      <div className="card__block">
        <h2 className="card__title">{title}</h2>
        <p className="card__description">{description}</p>
      </div>
      <div className="card__price">
        {price}
        {weight}
        <svg
          onClick={addProd}
          className="card__icon"
          alt=""
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="15" cy="15" r="14.5" stroke="white" />
          <path
            d="M15 9.28564V20.3571"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M20.3569 14.8214L9.28551 14.8213"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </div>
     </Link>
  );
}

export default Card;
