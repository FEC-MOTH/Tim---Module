import React, { Component } from 'react';
import axios from 'axios';
import ProductDetails from './ProductDetails';
import Carousel from './Carousel';
import BoostDetails from './BoostDetails';
import { exportObj } from '../../../helpers/helperFunctions.js';

// TODO: Change helperFunction to be an actual JSON file instead of putting it into helpers.

// css
import style from '../css/App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
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
    const productArr = this.state.products;
    const boostTemp = [];
    const otherProducts = [];

    productArr.forEach(boost => {
      exportObj.ultraBoosts.forEach(check => {
        if (boost.item_name === check) {
          boostTemp.push(boost);
          productArr.splice(boost);
        } else if (boost.item_name !== check) {
          if (!otherProducts.includes(boost)) {
            otherProducts.push(boost);
          }
        }
      });
    });

    //One Product for details
    // const oneProduct = productArr.slice(0, 1);
    const ultraBoost = boostTemp.slice(0, 1);

    // to use for Carousel
    const selectedRecs = otherProducts.slice(0, 16);
    const selectedOtherBought = otherProducts.slice(16, 33);
    const selectedRecent = otherProducts.slice(33);

    // if (props.sectionToRender === 'ProductDetails') {
    //  return (<div>
    //    {oneProduct.map((value, i) => (
    //      <ProductDetails products={value} />
    //    ))}
    //  </div>)
    //}

    return (
      <div className="wrapper">
        {/* <div>
          {oneProduct.map((value, i) => (
            <ProductDetails products={value} />
          ))}
        </div> */}

        <div className="boost">
          {ultraBoost.map((value, i) => (
            <BoostDetails products={value} />
          ))}
        </div>

        <div className="pictureFeed">
          <div className="elfsight-app-63ecb780-3c15-47e5-89b8-9ea83d0343c9" />
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
          <h2>Recently Viewed Items</h2>
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
      </div>
    );
  }
}
