import React, { Component } from 'react';
import Recommendations from './Recommendations';
import style from '../css/Carousel.css';
import LeftArrow from './LeftArrow';
import RightArrow from './RightArrow';

export default class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      currentValue: 0,
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
    if (this.state.currentValue === this.state.products.length - 1) {
      return this.setState({
        currentValue: 0,
        translateValue: 0,
      });
    }
    this.setState(prevState => ({
      currentValue: prevState.currentValue + 1,
      translateValue: prevState.translateValue + -this.productWidth(),
    }));
  }

  previous() {
    this.setState(prevState => ({
      currentValue: this.state.currentValue - 1,
      translateValue: prevState.translateValue - -this.productWidth(),
    }));
  }

  productWidth() {
    return 976;
  }

  render() {
    console.log(this.state.currentValue);
    console.log(this.state.translateValue);
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
          <LeftArrow currentValue={this.state.currentValue} previous={this.previous} />
          <RightArrow next={this.next} />
        </div>
      </div>
    );
  }
}
