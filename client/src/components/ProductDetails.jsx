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
      isToggle: false,
      products: [],
    };
    this.toggleActive = this.toggleActive.bind(this);
  }

  toggleActive(e) {
    const current = this.state.isToggle;
    this.setState({
      isToggle: !current,
    });
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

    let toggle = this.toggleItems ? style.isToggle : style.toggleItems;
    console.log(toggle);
    return (
      <div>
        <h1 style={style.h1}>Product Details</h1>
        <div className="wrapper" style={style.wrapper}>
          <ul className="toggleList" style={style.toggleList}>
            <li
              className={this.state.isToggle ? 'toggleItems' : 'isToggle'}
              style={this.state.isToggle ? style.isToggle : style.toggleItems}
              onClick={this.toggleActive}
            >
              Description
            </li>
            {/* Button renders another Div to show either description */}
            <li
              className={this.state.isToggle ? 'isToggle toggleItems' : ' toggleItems'}
              style={this.state.isToggle ? style.isToggle : style.toggleItems}
              onClick={this.toggleActive}
            >
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
