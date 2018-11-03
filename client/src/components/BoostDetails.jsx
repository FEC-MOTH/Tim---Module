import React, { Component } from 'react';
import Description from './Description';
import Specifications from './Specifications';
import HighLights from './HighLights';

//css
import style from '../css/BoostDetails.css';

// this is contructor;
// it will handle login for rendering Description and Specifications;

export default class ProductDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      highlight: false,
      description: true,
      specification: false,
      products: [],
    };

    this.highlight = this.highlight.bind(this);
    this.description = this.description.bind(this);
    this.specification = this.specification.bind(this);
  }

  highlight() {
    const highlight = this.state.highlight;
    const description = this.state.description;
    const specification = this.state.specification;
    this.setState({
      highlight: !highlight,
    });
    if (description) {
      this.setState({
        description: !description,
      });
    }
    if (specification) {
      this.setState({
        specification: !specification,
      });
    }
  }

  description() {
    const highlight = this.state.highlight;
    const description = this.state.description;
    const specification = this.state.specification;
    this.setState({
      description: !description,
    });
    if (highlight) {
      this.setState({
        highlight: !highlight,
      });
    }
    if (specification) {
      this.setState({
        specification: !specification,
      });
    }
  }

  specification() {
    const highlight = this.state.highlight;
    const description = this.state.description;
    const specification = this.state.specification;

    this.setState({
      specification: !specification,
      description: !description,
    });
    if (highlight) {
      this.setState({
        highlight: !highlight,
      });
    }
    if (description) {
      this.setState({
        description: !description,
      });
    }
  }

  render() {
    console.log('this is highlight', this.state.highlight);
    console.log('this is descrition', this.state.description);
    console.log('this is specification', this.state.specification);
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
              <li
                className={this.state.highlight ? 'highlightsToggle' : ' boostToggleItems'}
                onClick={this.highlight}
              >
                Highlights
              </li>

              {/* Button renders another Div to show either description */}
              <li
                className={this.state.description ? 'descriptionToggle' : 'boostToggleItems'}
                onClick={this.description}
              >
                Description
              </li>
              {/* Button to render another Div to show Specifications */}
              <li
                className={this.state.specification ? 'specificationToggle' : ' boostToggleItems'}
                onClick={this.specification}
              >
                Specification
              </li>
              {/* to handle hightlight */}
            </ul>
          </div>

          <div className={this.state.description ? 'productDisplay' : 'hide'}>
            <Description products={this.props.products} />
          </div>

          <div className={this.state.specification ? 'specifications' : 'hide'}>
            <Specifications specs={specArr} />
          </div>

          <div className={this.state.highlight ? 'highlights' : 'hide'}>{/* <HighLights /> */}</div>
          <div />
        </div>
      </div>
    );
  }
}
