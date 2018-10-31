import React from 'react';
import style from '../css/Recommendations.css';

const Recommendations = function(props) {
  const images = props.products.image;
  const imagesArr = JSON.parse(images);

  const price = props.products.price.toString();

  const correctPrice = function(str) {
    let counter = 0;
    for (let i = 0; i < str.length; i++) {
      if (str[i] === '0') {
        counter += 1;
      }
    }
    return counter === 2 ? '$' + str.slice(0, 2) : '$' + str.slice(0, 3);
  };

  return (
    <div className="itemWrapper">
      <div className="hockeyCard">
        <span className="productContainer">
          <div className="productCard">
            <div className="productInfo">
              <img
                className="img"
                src={`http://demandware.edgesuite.net/sits_pod20-adidas/dw/image/v2/aaqx_prd/on/demandware.static/-/Sites-adidas-products/en_US/${
                  imagesArr[0].id
                }/zoom/${imagesArr[0].fileName}?sh=1024`}
              />
              <div>{props.products.item_name}</div>
              <div>{correctPrice(price)}</div>
            </div>
          </div>
        </span>
      </div>
    </div>
  );
};

export default Recommendations;
