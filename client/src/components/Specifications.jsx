import React from 'react';

const Specifications = props => (
  <div>
    <div className="title">Specifications</div>
    {props.specs.map((specs, i) => (
      <ul>
        <li>{specs}</li>
      </ul>
    ))}
  </div>
);

export default Specifications;
