import style from './css/ProductDetails.css';
import React, { Component } from 'react';
import Description from './Description';
import Specifications from './Specifications';

//css

// this is contructor;
// it will handle login for rendering Description and Specifications;

export default class ProductDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggle: false,
      products: [],
      // displayComp: true,
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

    return (
      <div className="productParent">
        <div>
          <h1>Product Details</h1>
          <div>
            <ul className="toggleList" style={style.toggleList}>
              <li
                className={this.state.isToggle ? 'toggleItems' : 'isToggle'}
                onClick={this.toggleActive}
              >
                Description
              </li>
              {/* Button renders another Div to show either description */}
              <li
                className={this.state.isToggle ? 'isToggle' : ' toggleItems'}
                onClick={this.toggleActive}
              >
                Specification
              </li>
              {/* Button to render another Div to show Specifications */}
            </ul>
          </div>

          <div className={this.state.isToggle ? 'hide' : 'productDisplay'}>
            <Description products={this.props.products} />
          </div>

          <div className={this.state.isToggle ? 'specifications' : 'hide'}>
            <Specifications specs={specArr} />
          </div>
        </div>
      </div>
    );
  }
}
