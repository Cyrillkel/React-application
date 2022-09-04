function Card({ url, title, description, price, weight, icon }) {
  return (
    <div className="card">
      <img className="card-preveiw" src={url} alt="" />
      <div className="card__block">
      <h2 className="card__title">{title}</h2>
        <p className="card__description">{description}</p>
      </div>
        <div className="card__price">
          {price}{weight}
          <svg className="card__icon" src={icon} alt="" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="15" cy="15" r="14.5" stroke="white"/>
          <path d="M15 9.28564V20.3571" stroke="white" stroke-width="2" stroke-linecap="round"/>
          <path d="M20.3569 14.8214L9.28551 14.8213" stroke="white" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </div>
    </div>
  );
}

export default Card;


