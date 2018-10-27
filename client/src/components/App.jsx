import React, { Component } from 'react';
import axios from 'axios';
import ProductDetails from './ProductDetails';
import Recommendations from './Recommendations';
import RecentlyViewed from './RecentlyViewed';
import OthersBought from './OthersBought';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: '', //can either change to description or specifications
      products: [],
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  renderViews() {
    let { view } = this.state;

    if (view === 'description') {
      console.log('I am the view');
    }
  }

  fetchData() {
    axios
      .get('shoedidas/product/details')
      .then(data => {
        let products = data.data;
        this.setState({
          products,
        });
      })
      .catch(err => console.error(err));
  }

  render() {
    return (
      <div>
        HELLO!
        <div>
          <ProductDetails />
        </div>
        <div>
          <Recommendations />
        </div>
        <div>
          <OthersBought />
        </div>
        <div>
          <RecentlyViewed />
        </div>
      </div>
    );
  }
}
