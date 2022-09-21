import  { Link } from 'react-router-dom';
import '../header/Header.css'; 

function Header() {
  return (
    <div className="header-order">
      <Link to="/">
        <img
          className="header-order__back"
          src="images/back.png"
          alt="back"
        ></img>
      </Link>
      <h1 className="header-order__title">Корзина с выбранными товарами</h1>
    </div>
  );
}

export default Header;
