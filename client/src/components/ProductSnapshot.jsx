import React from 'react';
import style from '../css/ProductSnapshot.css';
import { exportObj } from '../../../helpers/helperFunctions.js';

const ProductSnapshot = function(props) {
  const imgs = props.snapshots.snapShotImg;
  const details = props.snapshots.snapshotDetails;

  return (
    <div className="snapshotWrapper">
      <div className="snapshotCard">
        {imgs.map(img => (
          <div className="imgWrapper">
            <div className="imgBackground">
              <img className="snapshotImg" src={img} />
            </div>
          </div>
        ))}
        <div className="detailWrapper">
          {details.map(detail => (
            <div className="detailCard">
              <div className="deets">
                <h3>{detail[0]}</h3>
                <p className="deetsP">{detail[1]}</p>
                <p className="deetsP2">{detail[2]}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductSnapshot;
