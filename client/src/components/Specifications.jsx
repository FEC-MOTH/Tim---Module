import React from 'react';
import style from '../css/Specifications.css';

const Specifications = function(props) {
  const firstThree = props.specs.slice(0, 3);
  const lastThree = props.specs.slice(3);

  return (
    <div className={style.mainSpec}>
      <div className={style.specParent}>
        <div className={style.specWrapper}>
          <ul className={style.ul1}>
            {firstThree.map((spec, i) => (
              <li className={style.item}>{spec}</li>
            ))}
          </ul>
          <ul className={style.ul2}>
            {lastThree.map((spec, i) => (
              <li className={style.item}>{spec}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Specifications;
