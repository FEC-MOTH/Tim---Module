import React from 'react';

const RecentlyViewed = function(props) {
  const images = props.products.image;
  const imagesArr = JSON.parse(images);

  return (
    <div>
      <div className="title">Recently Viewed</div>
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
        {/* <span className="recentImg">
        <img className="productImg" src={require('file-loader!./images/doge.png')} />
        <div>Name of Product</div>
        <div>$100</div>
      </span>
      <span className="recentImg">
        <img className="productImg" src={require('file-loader!./images/doge.png')} />
        <div>Name of Product</div>
        <div>$100</div>
      </span> */}
      </div>
    </div>
  );
};

export default RecentlyViewed;
