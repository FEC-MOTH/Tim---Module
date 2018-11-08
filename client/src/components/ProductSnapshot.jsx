import React from 'react';
import style from '../css/ProductSnapshot.css';

const ProductSnapshot = function(props) {
  const imgs = props.snapshots.snapShotImg;
  const details = props.snapshots.snapshotDetails;

  return (
    <div className={style.snapshotWrapper}>
      <div className={style.snapshotCard}>
        {imgs.map(img => (
          <div className={style.imgWrapper}>
            <div className={style.imgBackground}>
              <img className={style.snapshotImg} src={img} />
            </div>
          </div>
        ))}
        <div className={style.detailWrapper}>
          {details.map(detail => (
            <div className={style.detailCard}>
              <div className={style.deets}>
                <h3 className={style.h3}>{detail[0]}</h3>
                <p className={style.deetsP}>{detail[1]}</p>
                <p className={style.deetsP2}>{detail[2]}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductSnapshot;
