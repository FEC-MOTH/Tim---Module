// import React, { Component } from 'react';
// import style from '../css/Recommendations.css';
// import SvgStar from '../components/starSvg.jsx';
// import EmptySvgStar from '../components/emptystarSvg.jsx';
// import ReactSVG from 'react-svg';
// import { ratingToStarTranslation } from '../../../helpers/helperFunctions.js';

// const Recommendations = function(props) {
//   const images = props.products.image;
//   const imagesArr = JSON.parse(images);

//   const price = props.products.price.toString();

//   const correctPrice = function(str) {
//     return str.length === 5 ? '$' + str.slice(0, 3) : '$' + str.slice(0, 2);
//   };

//   const randomRating = () => Math.floor(Math.random() * 100);
//   const randomId = () => Math.random() * 0.9999;
//   const randomStars = () => Math.random() * (5 - 3) + 3;

//   return (
//     <div className="hockeyCard">
//       <span className="productContainer">
//         <div className="productCard">
//           <div className="productInfo">
//             <img
//               className="img"
//               src={`http://demandware.edgesuite.net/sits_pod20-adidas/dw/image/v2/aaqx_prd/on/demandware.static/-/Sites-adidas-products/en_US/${
//                 imagesArr[0].id
//               }/zoom/${imagesArr[0].fileName}?sh=1024`}
//             />
//             <div className="favorite">
//               <div className="toggleWishList">
//                 <img
//                   className="icon"
//                   src={
//                     props.boolean
//                       ? 'https://png.icons8.com/metro/1600/hearts.png'
//                       : 'https://cdn3.iconfinder.com/data/icons/pyconic-icons-1-2/512/heart-outline-512.png'
//                   }
//                   onClick={props.toggle}
//                 />
//               </div>
//             </div>
//             <div className="productDetails">
//               <div className="productName">{props.products.item_name}</div>
//               <div className="productPrice">{correctPrice(price)}</div>
//             </div>
//             <div className="rating">
//               {ratingToStarTranslation(randomStars()).map((value, index) => (
//                 <SvgStar index={randomId()} value={value} />
//               ))}
//               <div className="numbersOfRaters">{randomRating()}</div>
//             </div>
//           </div>
//         </div>
//       </span>
//     </div>
//   );
// };

// export default Recommendations;

// {
//   /* <SvgStar />
// <SvgStar />
// <SvgStar />
// <SvgStar />
// <svg
//   className="gl-star-rating__star"
//   viewBox="0 0 15 15"
//   xmlns="http://www.w3.org/2000/svg"
// >
//   <linearGradient id="11502f28-920e-4706-abbb-914b0eafcdb8">
//     <stop offset="0%" stopOpacity="1" style={{ stopColor: 'currentcolor' }} />
//     <stop offset={random()} stopOpacity="1" style={{ stopColor: 'currentcolor' }} />
//     <stop offset={random()} stopOpacity="0" style={{ stopColor: 'currentcolor' }} />
//     <stop offset={random()} stopOpacity="0" style={{ stopColor: 'currentcolor' }} />
//   </linearGradient>
//   <path
//     fill="none"
//     stroke="currentColor"
//     strokeMiterlimit="10"
//     d="M13.277,6.182L9.697,8.782L11.057,12.992L7.487,10.392L3.907,12.992L5.277,8.782L1.697,6.182L6.117,6.182L7.487,1.992L8.857,6.182L13.277,6.182Z"
//   />
//   <path
//     fill="url(#11502f28-920e-4706-abbb-914b0eafcdb8)"
//     stroke="0"
//     d="M13.277,6.182L9.697,8.782L11.057,12.992L7.487,10.392L3.907,12.992L5.277,8.782L1.697,6.182L6.117,6.182L7.487,1.992L8.857,6.182L13.277,6.182Z"
//   />
// </svg> */
// }
