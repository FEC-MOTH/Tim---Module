import React, { Component } from 'react';
import style from '../css/Recommendations.css';
import SvgStar from '../components/starSvg.jsx';
import ReactSVG from 'react-svg';

export default class Recommendations extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hello: 'hello',
    };
  }

  render() {
    console.log(this.props);
    const images = this.props.products.image;
    const imagesArr = JSON.parse(images);

    const price = this.props.products.price.toString();

    const correctPrice = function(str) {
      return str.length === 5 ? '$' + str.slice(0, 3) : '$' + str.slice(0, 2);
    };

    const randomRating = () => Math.floor(Math.random() * 100);
    return (
      <div className="hockeyCard">
        <span className="productContainer">
          <div className="productCard">
            <div className="productInfo">
              <img
                className="img"
                src={`http://demandware.edgesuite.net/sits_pod20-adidas/dw/image/v2/aaqx_prd/on/demandware.static/-/Sites-adidas-products/en_US/${
                  imagesArr[0].id
                }/zoom/${imagesArr[0].fileName}?sh=1024`}
              />
              <div className="favorite">
                <div className="toggleWishList">
                  <img
                    className="icon"
                    src={
                      this.props.boolean
                        ? 'https://png.icons8.com/metro/1600/hearts.png'
                        : 'https://cdn3.iconfinder.com/data/icons/pyconic-icons-1-2/512/heart-outline-512.png'
                    }
                    onClick={this.props.toggle}
                  />
                </div>
              </div>
              <div className="productDetails">
                <div className="productName">{this.props.products.item_name}</div>
                <div className="productPrice">{correctPrice(price)}</div>
              </div>
              <div className="rating">
                <SvgStar />
                <SvgStar />
                <SvgStar />
                <SvgStar />
                <SvgStar />
                <div className="numbersOfRaters">{randomRating()}</div>
              </div>
            </div>
          </div>
        </span>
      </div>
    );
  }
}
