import React, { Component } from 'react';
import Recommendations from './Recommendations';
import style from '../css/Carousel.css';
import LeftArrow from './LeftArrow';
import RightArrow from './RightArrow';
import { timingSafeEqual } from 'crypto';

export default class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      currentIndex: 0,
      translateValue: 0,
    };

    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.products !== this.props.products) {
      this.setState({
        products: this.props.products,
      });
    }
  }

  next() {
    if (this.state.currentIndex === this.state.products.length - 1) {
      return this.setState({
        currentIndex: 0,
        translateValue: 0,
      });
    }
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex + 1,
      translateValue: prevState.translateValue + -this.productWidth(),
    }));
  }

  previous() {
    this.setState({
      currentIndex: (this.state.currentIndex -= 1),
    });
  }

  productWidth() {
    return 976;
  }

  render() {
    console.log(this.state.products);
    console.log(this.state.currentIndex);
    console.log(this.productWidth());
    return (
      <div className="carousel">
        <div className="recCarousel">
          <div
            className="transformers"
            style={{
              transform: `translate(${this.state.translateValue}px)`,
              transition: 'transform ease-out 0.45s',
            }}
          >
            {this.props.products.map((value, index) => (
              <Recommendations products={value} />
            ))}
          </div>
          <LeftArrow previous={this.previous} />
          <RightArrow next={this.next} />
        </div>
      </div>
    );
  }
}
