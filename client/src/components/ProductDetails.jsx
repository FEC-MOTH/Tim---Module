import React, { Component } from 'react';
import Description from './Description';
import Specifications from './Specifications';

// this is contructor;
// it will handle login for rendering Description and Specifications;

export default class ProductDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: '',
      specification: '',
    };
  }

  render() {
    return (
      <div>
        <div>
          <button>Description</button>
          {/* Button renders another Div to show either description */}
          <button>Specifications</button>
          {/* Button to render another Div to show Specifications */}
        </div>
        <div>
          <Description />
          <div>
            <img
              className="productImg"
              src="http://demandware.edgesuite.net/sits_pod20-adidas/dw/image/v2/aaqx_prd/on/demandware.static/-/Sites-adidas-products/en_US/dw773341ba/zoom/BA8842_01_standard.jpg"
            />
          </div>
          <Specifications />
        </div>
      </div>
    );
  }
}
