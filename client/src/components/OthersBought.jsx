import React from 'react';

const OthersBought = props => (
  <div className="othersBoughtDiv">
    <div className="title">Others Also Bought</div>
    <div className="imgDiv" align="center">
      <span className="othersBoughtImg">
        <img className="productImg" src={require('file-loader!./images/doge.png')} />
        <div>{props.products.item_name}</div>
        <div>{props.products.price}</div>
      </span>
      {/* <span className="othersBoughtImg">
        <img className="productImg" src={require('file-loader!./images/doge.png')} />
        <div>Name of Product</div>
        <div>$100</div>
      </span>
      <span className="othersBoughtImg">
        <img className="productImg" src={require('file-loader!./images/doge.png')} />
        <div>Name of Product</div>
        <div>$100</div>
      </span> */}
    </div>
  </div>
);
export default OthersBought;
