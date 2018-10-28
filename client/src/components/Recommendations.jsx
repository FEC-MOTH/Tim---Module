import React from 'react';

const Recommendations = props => (
  <div className="recsDiv">
    <div className="title">You May Also Like</div>
    <div className="imgDiv" align="center">
      <span className="recommendationsImg">
        <img className="productImg" src={require('file-loader!./images/doge.png')} />
        <div>{props.products.item_name}</div>
        <div>{props.products.price}</div>
      </span>
      {/* <span className="recommendationsImg">
        <img className="productImg" src={require('file-loader!./images/doge.png')} />
        <div>Name of Product</div>
        <div>$100</div>
      </span>
      <span className="recommendationsImg">
        <img className="productImg" src={require('file-loader!./images/doge.png')} />
        <div>Name of Product</div>
        <div>$100</div>
      </span> */}
    </div>
  </div>
);

export default Recommendations;
