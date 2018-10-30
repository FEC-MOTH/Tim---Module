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

  toggleActive() {
    const current = this.state.isToggle;
    this.setState({
      isToggle: !current,
    });
  }

  //to render whether or not description or spceification shows;
  renderViews() {
    let { view } = this.state;

    if (view === 'description') {
      console.log('I am the view');
    }
  }

  render() {
    //for Specs;
    const specifications = this.props.products.specification;
    const specArr = JSON.parse(specifications);

    //for image
    const images = this.props.products.image;
    const imagesArr = JSON.parse(images);

    let toggle = this.toggleItems ? style.isToggle : style.toggleItems;

    return (
      <div className="productParent">
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
          <div className="productDisplay">
            <Description products={this.props.products} />

            <Specifications specs={specArr} />
          </div>
        </div>
      </div>
    );
  }
}
