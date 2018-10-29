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
      products: [],
      view: '', //can either change to description or specifications
    };
    this.fetchData = this.fetchData.bind(this);
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
        let products = data.data.slice(0, 10);
        this.setState({
          products,
        });
      })
      .catch(err => console.error(err));
  }

  render() {
    //One Product for details
    //6 for recommendation, othersbought & recentlyviewed
    const productArr = this.state.products;

    const randomOneProduct = productArr.sort(() => 0.5 - Math.random());
    let oneProduct = randomOneProduct.slice(0, 1);

    const random = productArr.sort(() => 0.5 - Math.random());
    let selected = random.slice(0, 4);

    return (
      <div>
        <div>
          {oneProduct.map((value, i) => (
            <ProductDetails products={value} />
          ))}
        </div>
        <div>
          {selected.map((value, i) => (
            <span className="recentDiv">
              <RecentlyViewed products={value} />
            </span>
          ))}
        </div>

        <div>
          {selected.map((value, i) => (
            <span className="othersBoughtDiv">
              <OthersBought products={value} />
            </span>
          ))}
        </div>

        <div>
          {selected.map((value, i) => (
            <span className="recsDiv">
              <Recommendations products={value} />
            </span>
          ))}
        </div>
      </div>
    );
  }
}
