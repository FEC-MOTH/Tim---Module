import React, { Component } from 'react';
import axios from 'axios';
import ProductDetails from './ProductDetails';
import Recommendations from './Recommendations';
import RecentlyViewed from './RecentlyViewed';
import OthersBought from './OthersBought';

// css
import style from '../css/App.css';

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

  fetchData() {
    axios
      .get('shoedidas/product/details')
      .then(data => {
        let products = data.data;
        let randomized = products.sort(() => 0.5 - Math.random());
        let selected = randomized.slice(0, 15);
        this.setState({
          products: selected,
        });
      })
      .catch(err => console.error(err));
  }

  render() {
    //One Product for details
    //6 for recommendation, othersbought & recentlyviewed
    const productArr = this.state.products;

    //for Description & Specification
    const oneProduct = productArr.slice(0, 1);

    //for 4 Products
    // const selectedOtherBought = productArr.slice(1, 5);
    // const selectedRecent = productArr.slice(6, 10);
    const selectedRecs = productArr.slice(0, 10);

    return (
      <div className="wrapper">
        {/* <div>
          {oneProduct.map((value, i) => (
            <ProductDetails products={value} />
          ))}
        </div> */}
        <div className="mainRecDiv">
          <div className="mainRecContainer">
            <h2>You May Also Like</h2>
            <div className="recRow">
              <div className="recPadding">
                <div className="recWrapper">
                  <div className="recContainer">
                    <div className="recTransformer">
                      {selectedRecs.map((value, i) => (
                        <span>
                          <Recommendations products={value} />
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="recentlyViewed">
          <div>
            <h2 style={style.h2}>Recently Viewed</h2>
            <div className="recentDiv">
              {selectedRecent.map((value, i) => (
                <span>
                  <RecentlyViewed products={value} />
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="othersBought">
          <div>
            <h2 style={style.h2}>Others Also Bought</h2>
            <div className="othersBoughtDiv">
              {selectedOtherBought.map((value, i) => (
                <span>
                  <OthersBought products={value} />
                </span>
              ))}
            </div>
          </div>
        </div> */}
      </div>
    );
  }
}
