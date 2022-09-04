import "../elements/Basket.css";

function Order({ img, title, price, icon }) {
  return (
    <div className="order">
      <div className="order__block">
        <img className="order-img" src={img} alt="" />
        <h2 className="order__title">{title}</h2>
      
      <div className="order__price">
        <div className="order__price-element">
        {price}
        </div>
        <svg className="order__icon" src={icon}
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_3_700)">
            <path
              d="M15.7041 15.0789L21.1218 20.4966C21.2723 20.6471 21.2723 20.891 21.1218 21.0415C21.0467 21.1168 20.948 21.1543 20.8495 21.1543C20.7508 21.1543 20.6523 21.1168 20.5771 21.0415L15.1187 15.583L9.6602 21.0415C9.58485 21.1168 9.48635 21.1543 9.38786 21.1543C9.28937 21.1543 9.19068 21.1168 9.11552 21.0415C8.96501 20.891 8.96501 20.6471 9.11552 20.4966L14.5331 15.0789L9.11189 9.65731C8.96137 9.50679 8.96137 9.26295 9.11189 9.11244C9.2624 8.96211 9.50624 8.96211 9.65657 9.11244L15.1185 14.5747L20.581 9.11263C20.7315 8.96231 20.9751 8.96231 21.1256 9.11263C21.2762 9.26314 21.2762 9.50699 21.1256 9.6575L15.7041 15.0789Z"
              fill="white"
            />
          </g>
          <circle cx="15" cy="15" r="14.5" stroke="white" />
          <defs>
            <clipPath id="clip0_3_700">
              <rect
                width="12.24"
                height="12.24"
                fill="white"
                transform="matrix(-1 0 0 1 21.2402 9)"
              />
            </clipPath>
          </defs>
        </svg>
      </div>
      </div>
    </div>
  );
}

export default Order;