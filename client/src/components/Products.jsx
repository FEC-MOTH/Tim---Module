import React, { Component } from 'react';
import style from '../css/Products.css';
import SvgStar from '../components/starSvg.jsx';
import EmptySvgStar from '../components/emptystarSvg.jsx';
import ReactSVG from 'react-svg';
import Favorite from './Favorite';
import { ratingToStarTranslation } from '../../../helpers/helperFuncs.js';

const Products = function(props) {
  const images = props.products.image;
  const imagesArr = JSON.parse(images);

  const price = props.products.price.toString();

  const correctPrice = function(str) {
    return str.length === 5 ? '$' + str.slice(0, 3) : '$' + str.slice(0, 2);
  };

  const randomRating = () => Math.floor(Math.random() * 100);
  const randomId = () => Math.random() * 0.9999;
  const randomStars = () => Math.random() * (5 - 3) + 3;

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
                <Favorite id={props.id} favClick={props.favClick} fav={props.fav} />
              </div>
            </div>
            <div className="productDetails">
              <div className="productName">{props.products.item_name}</div>
              <div className="productPrice">{correctPrice(price)}</div>
            </div>
            <div className="rating">
              {ratingToStarTranslation(randomStars()).map((value, index) => (
                <SvgStar index={randomId()} value={value} />
              ))}
              <div className="numbersOfRaters">{randomRating()}</div>
            </div>
          </div>
        </div>
      </span>
    </div>
  );
};

export default Products;
