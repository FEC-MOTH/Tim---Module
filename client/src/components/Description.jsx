import React from 'react';

const Description = function(props) {
  const product = props.products;
  const imagesArr = JSON.parse(product.image);

  return (
    <div>
      <h4>{product.item_name}</h4>
      <p>{product.catchphrase}</p>
      <p>{product.description}</p>
      <div>
        <img
          className="productImg"
          src={`http://demandware.edgesuite.net/sits_pod20-adidas/dw/image/v2/aaqx_prd/on/demandware.static/-/Sites-adidas-products/en_US/${
            imagesArr[0].id
          }/zoom/${imagesArr[0].fileName}?sh=1024`}
        />
      </div>
    </div>
  );
};

export default Description;
