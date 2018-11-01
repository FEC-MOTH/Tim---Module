import React, { Component } from 'react';
import Recommendations from './Recommendations';
import style from '../css/Carousel.css';
import LeftArrow from './LeftArrow';
import RightArrow from './RightArrow';

export default class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      something: 'hello',
    };
  }

  render() {
    return (
      <div className="carousel">
        {this.props.products.map((value, index) => (
          <Recommendations products={value} />
        ))}

        <LeftArrow />
        <RightArrow />
      </div>
    );
  }
}
