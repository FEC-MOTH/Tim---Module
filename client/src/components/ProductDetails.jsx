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
            <img className="productImg" src={require('file-loader!./images/doge.png')} />
          </div>
          <Specifications />
        </div>
      </div>
    );
  }
}
