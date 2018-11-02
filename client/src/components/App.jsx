import React, { Component } from 'react';
import axios from 'axios';
import ProductDetails from './ProductDetails';
import Recommendations from './Recommendations';
import RecentlyViewed from './RecentlyViewed';
import OthersBought from './OthersBought';
import Carousel from './Carousel';

// css
import style from '../css/App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      view: '', //can either change to description or specifications
      isToggle: false,
    };
    this.fetchData = this.fetchData.bind(this);
    this.toggleFavorite = this.toggleFavorite.bind(this);
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
        let selected = randomized.slice(0, 50);
        this.setState({
          products: selected,
        });
      })
      .catch(err => console.error(err));
  }

  toggleFavorite() {
    let toggle = this.state.isToggle;
    this.setState({
      isToggle: !toggle,
    });
  }

  render() {
    //One Product for details
    //6 for recommendation, othersbought & recentlyviewed
    const productArr = this.state.products;

    //for Description & Specification
    const oneProduct = productArr.slice(0, 1);

    //for 4 Products
    const selectedRecs = productArr.slice(1, 17);
    const selectedOtherBought = productArr.slice(17, 33);
    const selectedRecent = productArr.slice(34);

    return (
      <div className="wrapper">
        <div>
          {oneProduct.map((value, i) => (
            <ProductDetails products={value} />
          ))}
        </div>

        <div className="mainRecContainer">
          <h2>You May Also Like</h2>
          <div className="recRow">
            <div className="recPadding">
              <div className="recTransformer">
                <span>
                  <Carousel products={selectedRecs} />
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mainRecContainer">
          <h2>Others Also Bought</h2>
          <div className="recRow">
            <div className="recPadding">
              <div className="recTransformer">
                <span>
                  <Carousel products={selectedOtherBought} />
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mainRecContainer">
          <h2>Recently Viewed</h2>
          <div className="recRow">
            <div className="recPadding">
              <div className="recTransformer">
                <span>
                  <Carousel products={selectedRecent} />
                </span>
              </div>
            </div>
          </div>
        </div>

        <div>
          {/* for Recommendations */}
          {/* <Carousel products={selectedRecs} /> */}
        </div>

        {/* <div className="mainRecContainer">
          <h2>Recently Viewed</h2>
          <div className="recRow">
            <div className="recPadding">
              <div className="recWrapper">
                <div className="recTransformer">
                  {selectedRecent.map((value, i) => (
                    <span>
                      <Recommendations
                        boolean={this.state.isToggle}
                        toggle={this.toggleFavorite}
                        products={value}
                      />
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div> */}

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
