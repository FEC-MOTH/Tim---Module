import React, { Component } from 'react';
import Description from './Description';
import Specifications from './Specifications';
import HighLights from './HighLights';

//css
import style from '../css/BoostDetails.css';

// this is contructor;
// it will handle login for rendering Description and Specifications;
//TODO: refactor the click function to take in the eventhandler name
//set the name if not, change it to null.

const highlights = [
  [
    ['runner type', 'Neutral shoes for the ultimate running experience'],
    [
      'lightweight comfort',
      'adidas Primeknit upper wraps the foot in adaptive support and ultralight comfort',
    ],
    [
      'enrgize cushioning',
      'Boost is our most responsive cushioning ever: The more energy you give, the more you get',
    ],
    [
      'natural movement',
      'Fitcounter molded heel counter provides a natural fit that allows optimal movement of the Achilles',
    ],
    [
      'reliable traction',
      'Stretchweb outsole flexes naturally for an energized ride, while Continental™ Rubber gives you superior traction',
    ],
  ],
];

export default class ProductDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      highlight: true,
      description: false,
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

          <div className={this.state.highlight ? 'highlights' : 'hide'}>
            {highlights.map(highlight =>
              highlight.map(value => <HighLights title={value[0]} detail={value[1]} />),
            )}
          </div>
          <div />
        </div>
      </div>
    );
  }
}
