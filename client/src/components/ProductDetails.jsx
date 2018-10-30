import React, { Component } from 'react';
import Description from './Description';
import Specifications from './Specifications';

//css
import style from './css/ProductDetails.css';

// this is contructor;
// it will handle login for rendering Description and Specifications;

export default class ProductDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: '',
      products: [],
    };
  }
  //figure this out after;
  // componentDidMount() {
  //   this.setProps();
  // }

  // setProps() {
  //   this.setState({
  //     products: this.props.products,
  //   });
  // }

  render() {
    const specifications = this.props.products.specification;
    const specArr = JSON.parse(specifications);

    const images = this.props.products.image;
    const imagesArr = JSON.parse(images);

    return (
      <div>
        <h1 style={style.h1}>Product Details</h1>
        <div className="wrapper" style={style.wrapper}>
          <ul className="toggleList" style={style.toggleList}>
            <li className="toggleItems" style={style.toggleItems}>
              Description
            </li>
            {/* Button renders another Div to show either description */}
            <li className="toggleItems" style={style.toggleItems}>
              Specification
            </li>
            {/* Button to render another Div to show Specifications */}
          </ul>
        </div>
        <div>
          <Description products={this.props.products} />
          <div>
            <img
              className="productImg"
              src={`http://demandware.edgesuite.net/sits_pod20-adidas/dw/image/v2/aaqx_prd/on/demandware.static/-/Sites-adidas-products/en_US/${
                imagesArr[0].id
              }/zoom/${imagesArr[0].fileName}?sh=1024`}
            />
          </div>
          <Specifications specs={specArr} />
        </div>
      </div>
    );
  }
}

// const ProductDetails = props => (
//   <div>
//     <div>
//       {console.log(props.products)}
//       <button>Description</button>
//       {/* Button renders another Div to show either description*/}
//       <button>Specifications</button>
//       {/* Button to render another Div to show Specifications */}
//     </div>
//     <div>
//       <Description products={props.products} />
//     </div>
//     <div>
//       <div>
//         {/* <img
//           className="productImg"
//           src={`http://demandware.edgesuite.net/sits_pod20-adidas/dw/image/v2/aaqx_prd/on/demandware.static/-/Sites-adidas-products/en_US/{id}/zoom/{fileName}?sh=1024`}
//         /> */}
//         <img className="productImg" src={require('file-loader!./images/doge.png')} />
//       </div>
//       {/* {props.JSON.parse(products).map((specArr, key) => (
//         <Specifications products={specArr} />
//       ))} */}
//     </div>
//   </div>
// );

// export default ProductDetails;
