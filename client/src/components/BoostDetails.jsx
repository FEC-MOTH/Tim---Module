import React, { Component } from 'react';
import Description from './Description';
import Specifications from './Specifications';
import HighLights from './HighLights';
import { highlights } from '../../../helpers/helperFunctions';

//css
import style from '../css/BoostDetails.css';

// this is contructor;
// it will handle login for rendering Description and Specifications;
//TODO: refactor the click function to take in the eventhandler name
//set the name if not, change it to null.

export default class ProductDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewChange: 'Description',
      products: [],
    };

    this.views = this.views.bind(this);
    this.highlight = this.highlight.bind(this);
    this.description = this.description.bind(this);
    this.specification = this.specification.bind(this);
  }

  views(e) {
    const divBar = e.target.textContent;
    this.setState({
      viewChange: divBar,
    });
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
    //for Specs;
    const specifications = this.props.products.specification;
    const specArr = JSON.parse(specifications);

    //for image
    const images = this.props.products.image;
    const imagesArr = JSON.parse(images);
    return (
      <div className="boostParent">
        <div>
          <h1>Product Details</h1>
          <div>
            <ul className="boostList">
              <li
                className={
                  this.state.viewChange === 'Highlights' ? 'highlightsToggle' : ' boostToggleItems'
                }
                onClick={this.views}
              >
                Highlights
              </li>

              {/* Button renders another Div to show either description */}
              <li
                className={
                  this.state.viewChange === 'Description' ? 'descriptionToggle' : 'boostToggleItems'
                }
                onClick={this.views}
              >
                Description
              </li>
              {/* Button to render another Div to show Specifications */}
              <li
                className={
                  this.state.viewChange === 'Specification'
                    ? 'specificationToggle'
                    : ' boostToggleItems'
                }
                onClick={this.views}
              >
                Specification
              </li>
              {/* to handle hightlight */}
            </ul>
          </div>

          <div className={this.state.viewChange === 'Description' ? 'productDisplay' : 'hide'}>
            <Description products={this.props.products} />
          </div>

          <div className={this.state.viewChange === 'Specification' ? 'specifications' : 'hide'}>
            <Specifications specs={specArr} />
          </div>

          <div className={this.state.viewChange === 'Highlights' ? 'highlights' : 'hide'}>
            <HighLights highlights={highlights} />
          </div>
          <div />
        </div>
      </div>
    );
  }
}
