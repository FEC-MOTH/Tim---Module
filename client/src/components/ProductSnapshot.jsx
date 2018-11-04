import React from 'react';
import style from '../css/ProductSnapshot.css';

const ProductSnapshot = function(props) {
  return (
    <div className="imgWrapper">
      <img className="snapshotImg" src={props.img} />
    </div>
  );
};

export default ProductSnapshot;
