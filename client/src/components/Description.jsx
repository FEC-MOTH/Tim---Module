import React from 'react';

const Description = props => (
  <div>
    <h2>{props.products.item_name}</h2>
    <p>{props.products.catchphrase}</p>
    <p>{props.products.description}</p>
  </div>
);

export default Description;
