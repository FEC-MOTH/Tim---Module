import React, { Component } from 'react';
import axios from 'axios';
import ProductDetails from './ProductDetails';
import Specifications from './Specifications';
import Recommendations from './Recommendations';
import RecentlyViewed from './RecentlyViewed';
import OthersBought from './OthersBought';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        HELLO!
        <div>
          <ProductDetails />
        </div>
        <div>
          <Specifications />
        </div>
        <div>
          <Recommendations />
        </div>
        <div>
          <RecentlyViewed />
        </div>
        <div>
          <OthersBought />
        </div>
      </div>
    );
  }
}
