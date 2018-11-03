import React, { Component } from 'react';
import Recommendations from './Recommendations';
import style from '../css/Carousel.css';
import LeftArrow from './LeftArrow';
import RightArrow from './RightArrow';
import indicatorStyle from '../css/Indicators.css';

export default class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      translateValue: 0,
      activateBar: 0,
    };

    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.testClick = this.testClick.bind(this);
    this.testClick2 = this.testClick2.bind(this);
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
      // currentValue: (prevState.currentValue + 1) * 3,
      activateBar: prevState.activateBar + 1,
      translateValue: prevState.translateValue + -this.productWidth(),
    }));
  }

  previous() {
    this.setState(prevState => ({
      // currentValue: this.state.currentValue / 3 - 1,
      activateBar: prevState.activateBar - 1,
      translateValue: prevState.translateValue - -this.productWidth(),
    }));
  }

  testClick2() {
    this.setState(prevState => ({
      // currentValue: this.state.currentValue * 0,
      activateBar: prevState.activateBar * 0,
      translateValue: prevState.translateValue * 0,
    }));
  }

  testClick() {
    this.setState(prevState => ({
      // currentValue: (this.state.currentValue + 4) * 3,
      activateBar: prevState.activateBar + 2,
      translateValue: prevState.translateValue + -(this.productWidth() * 2),
    }));
  }

  productWidth() {
    return 976;
  }

  render() {
    // console.log('this is currentValue', this.state.currentValue);
    console.log('this is translateValue', this.state.translateValue);
    console.log('this is activeBar', this.state.activateBar);
    const length = this.state.products.length;
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
          <div>
            <LeftArrow currentValue={this.state.activateBar} previous={this.previous} />
            <RightArrow length={length} next={this.next} currentValue={this.state.activateBar} />
          </div>
          <ul className="indicators">
            <li
              className={this.state.activateBar === 0 ? 'active' : 'nonActiveBars'}
              onClick={this.testClick2}
            />
            <li className={this.state.activateBar === 1 ? 'active' : 'nonActiveBars'} />
            <li
              className={this.state.activateBar === 2 ? 'active' : 'nonActiveBars'}
              onClick={this.testClick}
            />
            <li className={this.state.activateBar === 3 ? 'active' : 'nonActiveBars'} />
          </ul>
        </div>
      </div>
    );
  }
}
