import React, { Component } from 'react';
import Description from './Description';
import Specifications from './Specifications';

//css
import style from '../css/ProductDetails.css';

// this is contructor;
// it will handle login for rendering Description and Specifications;

export default class ProductDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggle: 'Description',
      products: [],
      // displayComp: true,
    };
    this.toggleActive = this.toggleActive.bind(this);
  }

  toggleActive(e) {
    const current = e.target.textContent;
    this.setState({
      isToggle: current,
    });
  }

  render() {
    //for Specs;
    const specifications = this.props.products.specification;
    const specArr = JSON.parse(specifications);

    //for image
    const images = this.props.products.image;
    const imagesArr = JSON.parse(images);

    return (
      <div className="productParent">
        <div>
          <h1>Product Details</h1>
          <div>
            <ul className="toggleList">
              {/* Button renders another Div to show either description */}
              <li
                className={this.state.isToggle === 'Description' ? 'isToggle' : ' toggleItems'}
                onClick={this.toggleActive}
              >
                Description
              </li>
              {/* Button to render another Div to show Specifications */}
              <li
                className={this.state.isToggle === 'Specifications' ? 'isToggle' : ' toggleItems'}
                onClick={this.toggleActive}
              >
                Specifications
              </li>
            </ul>
          </div>

          <div className={this.state.isToggle === 'Description' ? 'productDisplay' : 'hide'}>
            <Description products={this.props.products} />
          </div>

          <div className={this.state.isToggle === 'Specifications' ? 'specifications' : 'hide'}>
            <Specifications specs={specArr} />
          </div>
        </div>
      </div>
    );
  }
}
