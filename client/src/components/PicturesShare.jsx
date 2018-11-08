import React from 'react';
import style from '../css/PicturesShare.css';

const PicturesShare = function(props) {
  return (
    <div>
      <h1 className={style.h1}>Share how you wear it</h1>
      <p className={style.picturesShareP}>
        Share a photo of your adidas favorite and appear in our showcase below. Make sure to tag
        image with @adidas
      </p>
    </div>
  );
};

export default PicturesShare;
