import React from 'react';
import style from './css/Specifications.css';

const Specifications = function(props) {
  const firstThree = props.specs.slice(0, 3);
  const lastThree = props.specs.slice(3);

  return (
    <div className="mainSpec">
      <div className="specParent">
        <div className="specWrapper">
          <ul>
            {firstThree.map((spec, i) => (
              <li>{spec}</li>
            ))}
          </ul>
          <ul className="other">
            {lastThree.map((spec, i) => (
              <li>{spec}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Specifications;
