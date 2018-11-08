import React from 'react';
import style from '../css/LeftArrow.css';

const LeftArrow = function(props) {
  return (
    <div className={style.LeftArrow} onClick={props.previous}>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.4.2/css/all.css"
        integrity="sha384-/rXc/GQVaYpyDdyxK+ecHPVYJSN9bmVFBvjA/9eOB+pb3F2w2N6fc5qB9Ew5yIns"
        crossOrigin="anonymous"
      />
      <i
        className={props.currentValue === 0 ? style.arrowHidden : 'fas fa-angle-left fa-2x'}
        aria-hidden="true"
      />
    </div>
  );
};

export default LeftArrow;
