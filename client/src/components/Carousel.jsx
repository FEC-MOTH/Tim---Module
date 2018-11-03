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
    this.home = this.home.bind(this);
    this.second = this.second.bind(this);
    this.third = this.third.bind(this);
    this.fourth = this.fourth.bind(this);
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
      activateBar: prevState.activateBar + 1,
      translateValue: prevState.translateValue + -976,
    }));
  }

  previous() {
    this.setState(prevState => ({
      activateBar: prevState.activateBar - 1,
      translateValue: prevState.translateValue - -976,
    }));
  }

  home() {
    this.setState(prevState => ({
      activateBar: prevState.activateBar * 0,
      translateValue: prevState.translateValue * 0,
    }));
  }

  second() {
    if (this.state.translateValue === -2928) {
      this.setState(prevState => ({
        activateBar: prevState.activateBar - 2,
        translateValue: prevState.translateValue - -1952,
      }));
    } else if (this.state.translateValue === -1952) {
      this.setState(prevState => ({
        activateBar: prevState.activateBar - 1,
        translateValue: prevState.translateValue - -976,
      }));
    } else if (this.state.translateValue === 0) {
      this.setState(prevState => ({
        activateBar: prevState.activateBar + 1,
        translateValue: prevState.translateValue + -976,
      }));
    }
  }

  third() {
    if (this.state.translateValue === -2928) {
      this.setState(prevState => ({
        activateBar: prevState.activateBar - 1,
        translateValue: prevState.translateValue - -976,
      }));
      //handle for second.
    } else if (this.state.translateValue === -976) {
      this.setState(prevState => ({
        activateBar: prevState.activateBar + 1,
        translateValue: prevState.translateValue + -976,
      }));
    } else if (this.state.translateValue === 0) {
      this.setState(prevState => ({
        activateBar: prevState.activateBar + 2,
        translateValue: prevState.translateValue + -(976 * 2),
      }));
    }
  }

  fourth() {
    //from third
    if (this.state.translateValue === -1952) {
      this.setState(prevState => ({
        activateBar: prevState.activateBar + 1,
        translateValue: prevState.translateValue + -976,
      }));
    } else if (this.state.translateValue === -976) {
      this.setState(prevState => ({
        activateBar: prevState.activateBar + 2,
        translateValue: prevState.translateValue + -(976 * 2),
      }));
    } else if (this.state.translateValue === 0) {
      this.setState(prevState => ({
        activateBar: prevState.activateBar + 3,
        translateValue: prevState.translateValue + -(976 * 3),
      }));
    }
  }

  render() {
    console.log(this.state.translateValue);
    console.log(this.state.activateBar);
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
              onClick={this.home}
            />
            <li
              className={this.state.activateBar === 1 ? 'active' : 'nonActiveBars'}
              onClick={this.second}
            />

            <li
              className={this.state.activateBar === 2 ? 'active' : 'nonActiveBars'}
              onClick={this.third}
            />
            <li
              className={this.state.activateBar === 3 ? 'active' : 'nonActiveBars'}
              onClick={this.fourth}
            />
          </ul>
        </div>
      </div>
    );
  }
}
