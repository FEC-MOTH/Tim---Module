import React from 'react';
import style from '../css/RightArrow.css';

const RightArrow = function(props) {
  return (
    <div className={style.RightArrow} onClick={props.next}>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.4.2/css/all.css"
        integrity="sha384-/rXc/GQVaYpyDdyxK+ecHPVYJSN9bmVFBvjA/9eOB+pb3F2w2N6fc5qB9Ew5yIns"
        crossorigin="anonymous"
      />
      <i
        className={props.currentValue === 3 ? style.arrowHidden : 'fas fa-angle-right fa-2x'}
        aria-hidden="true"
      />
    </div>
  );
};

export default RightArrow;
