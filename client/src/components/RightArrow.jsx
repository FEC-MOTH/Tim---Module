import React from 'react';
import style from '../css/RightArrow.css';

const RightArrow = function(props) {
  return (
    <div className="RightArrow" onClick={props.next}>
      <i
        className={props.currentValue === 3 ? 'arrowHidden' : 'fas fa-angle-right fa-2x'}
        aria-hidden="true"
      />
    </div>
  );
};

export default RightArrow;
