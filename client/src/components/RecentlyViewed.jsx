import React from 'react';

const RecentlyViewed = props => (
  <div>
    <div className="title">Recently Viewed</div>
    <div className="imgDiv" align="center">
      <span className="recentImg">
        <img className="productImg" src={require('file-loader!./images/doge.png')} />
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

export default RecentlyViewed;
