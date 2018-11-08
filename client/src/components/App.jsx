import React, { Component } from 'react';
import axios from 'axios';
import ProductDetails from './ProductDetails';
import Carousel from './Carousel';
import BoostDetails from './BoostDetails';
import { exportObj } from '../../../helpers/helperFunctions.js';

// css
import style from '../css/App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      toRender: '',
    };
    this.fetchData = this.fetchData.bind(this);
    axios.defaults.baseURL = 'http://' + process.env.HOSTNAME + ':' + process.env.PORT;
  }

  componentDidMount() {
    this.fetchData();
    // this.toRender();
  }

  // toRender() {
  //   this.setState({
  //     toRender: this.props.view,
  //   });
  // }

  fetchData() {
    axios
      .get('shoedidas/product/details')
      .then(data => {
        let product = data.data;
        let randomized = product.sort(() => 0.5 - Math.random());
        let selected = randomized.slice(0, 50);
        this.setState({
          products: selected,
        });
      })
      .catch(err => console.error(err));
  }

  render() {
    const productArr = this.state.products;
    const boostTemp = [];
    const otherProducts = [];

    productArr.forEach(boost => {
      if (boost.item_name.toLowerCase().includes('ultraboost')) {
        boostTemp.push(boost);
      } else {
        otherProducts.push(boost);
      }
    });

    //One Product for details
    // const oneProduct = productArr.slice(0, 1);
    const ultraBoost = boostTemp.slice(0, 1);

    // to use for Carousel
    const selectedRecs = otherProducts.slice(0, 16);
    const selectedOtherBought = otherProducts.slice(16, 33);
    const selectedRecent = otherProducts.slice(33);

    //set var for render
    let toRender;

    if (this.props.view === 'productDetails') {
      toRender = (
        <div>
          <div className={style.boost}>
            {ultraBoost.map((value, i) => (
              <BoostDetails products={value} />
            ))}
          </div>

          <div className={style.pictureFeed}>
            <div className="elfsight-app-63ecb780-3c15-47e5-89b8-9ea83d0343c9" />
          </div>
        </div>
      );
    } else if (this.props.view === 'recommended') {
      toRender = (
        <div className={style.mainRecContainer}>
          <h2>You May Also Like</h2>
          <div className={style.recRow}>
            <div className={style.recPadding}>
              <div className={style.recTransformer}>
                <span>
                  <Carousel products={selectedRecs} />
                </span>
              </div>
            </div>
          </div>
        </div>
      );
    } else if (this.props.view === 'othersAlsoBought') {
      toRender = (
        <div className={style.mainRecContainer}>
          <h2>Others Also Bought</h2>
          <div className={style.recRow}>
            <div className={style.recPadding}>
              <div className={style.recTransformer}>
                <span>
                  <Carousel products={selectedOtherBought} />
                </span>
              </div>
            </div>
          </div>
        </div>
      );
    } else if (this.props.view === 'recentlyViewed') {
      toRender = (
        <div className={style.mainRecContainer}>
          <h2>Recently Viewed Items</h2>
          <div className={style.recRow}>
            <div className={style.recPadding}>
              <div className={style.recTransformer}>
                <span>
                  <Carousel products={selectedRecent} />
                </span>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className={style.wrapper}>
        {toRender}
        {/* <div>
          {oneProduct.map((value, i) => (
            <ProductDetails products={value} />
          ))}
        </div> */}
      </div>
    );
  }
}
