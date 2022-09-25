import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import WrapperCard from '../../../src/components/CardWrapper/CardWrapper.jsx';
import './CardProducts.css';

function CardProducts() {
  const { price, count } = useSelector((state) => state.basket);
  const openProductData = useSelector((state) => state.cardPage.cardPage);
  const nav = useNavigate();
  const goBack = () => nav(-1);
  return (
    <div className="cardProducts">
      <div className="cardProducts__container">
        <div className="cardProducts__header">
          <Link to="/">
            <svg
              onClick={goBack}
              className="cardProducts__icon-back"
              alt="back"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="16"
                cy="16"
                r="15.5"
                transform="rotate(180 16 16)"
                stroke="#D58C51"
              />
              <g clip-path="url(#clip0_1_257)">
                <path
                  d="M14.6514 13.0468C14.7868 12.9115 14.9998 12.9115 15.1352 13.0468C15.2659 13.1776 15.2659 13.3952 15.1352 13.5257L12.6823 15.9786H20.7765C20.9652 15.9786 21.12 16.1286 21.12 16.3172C21.12 16.5059 20.9652 16.6608 20.7765 16.6608H12.6823L15.1352 19.1091C15.2659 19.2444 15.2659 19.4624 15.1352 19.5928C14.9998 19.7282 14.7868 19.7282 14.6514 19.5928L11.6179 16.5593C11.4871 16.4285 11.4871 16.2109 11.6179 16.0804L14.6514 13.0468Z"
                  fill="#D58C51"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_257">
                  <rect
                    width="9.6"
                    height="9.6"
                    fill="white"
                    transform="translate(11.52 11.52)"
                  />
                </clipPath>
              </defs>
            </svg>
          </Link>
          <div className="cardProducts-block">
            <div className="cardProducts__text">
              <span className="cardProducts__title">
                Всего товаров: {count}
              </span>
              <span className="cardProducts__subtitle">На сумму: {price} ₽</span>
            </div>
            <div className="cardProducts-image">
              <Link to="/Basket">
                <svg
                  className="cardProducts__basket"
                  alt="busket"
                  width="50"
                  height="50"
                  viewBox="0 0 50 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="25" cy="25" r="25" fill="#D58C51" />
                  <g clipPath="url(#clip0_1_429)">
                    <path
                      d="M34.0746 23.2042H30.1774L27.379 15.239C27.2096 14.7569 26.6815 14.5032 26.1992 14.6727C25.717 14.8421 25.4635 15.3703 25.6329 15.8525L28.2157 23.2041H20.7843L23.3671 15.8525C23.5365 15.3703 23.283 14.8421 22.8008 14.6727C22.3187 14.5032 21.7904 14.7569 21.621 15.239L18.8226 23.2042H14.9254C14.4143 23.2042 14 23.6184 14 24.1296C14 24.6406 14.4143 25.0549 14.9254 25.0549H15.1789L17.4465 33.3309C17.6163 33.9505 18.1793 34.38 18.8217 34.38H30.2413C30.8871 34.38 31.4522 33.946 31.6189 33.3221L33.8274 25.0549H34.0746C34.5857 25.0549 35 24.6406 35 24.1296C35 23.6185 34.5857 23.2042 34.0746 23.2042ZM21.4678 31.355C21.4678 31.866 21.0535 32.2803 20.5425 32.2803C20.0314 32.2803 19.6171 31.866 19.6171 31.355V26.6562C19.6171 26.1451 20.0314 25.7308 20.5425 25.7308C21.0535 25.7308 21.4678 26.1451 21.4678 26.6562V31.355ZM25.4254 31.355C25.4254 31.866 25.011 32.2803 24.5 32.2803C23.9889 32.2803 23.5746 31.866 23.5746 31.355V26.6562C23.5746 26.1451 23.9889 25.7308 24.5 25.7308C25.011 25.7308 25.4254 26.1451 25.4254 26.6562V31.355ZM29.3829 31.355C29.3829 31.866 28.9686 32.2803 28.4575 32.2803C27.9464 32.2803 27.5321 31.866 27.5321 31.355V26.6562C27.5321 26.1451 27.9464 25.7308 28.4575 25.7308C28.9686 25.7308 29.3829 26.1451 29.3829 26.6562V31.355Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_429">
                      <rect
                        width="21"
                        height="21"
                        fill="white"
                        transform="translate(14 14)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </Link>
            </div>
          </div>
        </div>
        <div className="wrapperCard">
          <WrapperCard
            url={openProductData.url}
            title={openProductData.title}
            description={openProductData.description}
            price={openProductData.price}
            weight={openProductData.weight}
          />
        </div>
      </div>
    </div>
  );
}

export default CardProducts;
