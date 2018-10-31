import React from 'react';
import style from '../css/RecentlyViewed.css';

const RecentlyViewed = function(props) {
  const images = props.products.image;
  const imagesArr = JSON.parse(images);

  return (
    <div>
      <div className="imgDiv" align="center">
        <span className="recentImg">
          <img
            className="productImg"
            src={`http://demandware.edgesuite.net/sits_pod20-adidas/dw/image/v2/aaqx_prd/on/demandware.static/-/Sites-adidas-products/en_US/${
              imagesArr[0].id
            }/zoom/${imagesArr[0].fileName}?sh=1024`}
          />
          <div>{props.products.item_name}</div>
          <div>{props.products.price}</div>
        </span>
      </div>
    </div>
  );
};

export default RecentlyViewed;
