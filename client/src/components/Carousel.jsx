import React, { Component } from 'react';
import Products from './Products';
import style from '../css/Carousel.css';
import LeftArrow from './LeftArrow';
import RightArrow from './RightArrow';

export default class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      translateValue: 0,
      activateBar: 0,
      favorite: '',
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
    this.setState(prevState => ({
      activateBar: prevState.activateBar + 1,
      translateValue: prevState.translateValue + -1140,
    }));
  }

  previous() {
    this.setState(prevState => ({
      activateBar: prevState.activateBar - 1,
      translateValue: prevState.translateValue - -1140,
    }));
  }

  home() {
    this.setState(prevState => ({
      activateBar: prevState.activateBar * 0,
      translateValue: prevState.translateValue * 0,
    }));
  }

  second() {
    if (this.state.translateValue === -3420) {
      this.setState(prevState => ({
        activateBar: prevState.activateBar - 2,
        translateValue: prevState.translateValue - -2280,
      }));
    } else if (this.state.translateValue === -2280) {
      this.setState(prevState => ({
        activateBar: prevState.activateBar - 1,
        translateValue: prevState.translateValue - -1140,
      }));
    } else if (this.state.translateValue === 0) {
      this.setState(prevState => ({
        activateBar: prevState.activateBar + 1,
        translateValue: prevState.translateValue + -1140,
      }));
    }
  }

  third() {
    if (this.state.translateValue === -3420) {
      this.setState(prevState => ({
        activateBar: prevState.activateBar - 1,
        translateValue: prevState.translateValue - -1140,
      }));
      //handle for second.
    } else if (this.state.translateValue === -1140) {
      this.setState(prevState => ({
        activateBar: prevState.activateBar + 1,
        translateValue: prevState.translateValue + -1140,
      }));
    } else if (this.state.translateValue === 0) {
      this.setState(prevState => ({
        activateBar: prevState.activateBar + 2,
        translateValue: prevState.translateValue + -(1140 * 2),
      }));
    }
  }

  fourth() {
    //from third
    if (this.state.translateValue === -2280) {
      this.setState(prevState => ({
        activateBar: prevState.activateBar + 1,
        translateValue: prevState.translateValue + -1140,
      }));
    } else if (this.state.translateValue === -1140) {
      this.setState(prevState => ({
        activateBar: prevState.activateBar + 2,
        translateValue: prevState.translateValue + -(1140 * 2),
      }));
    } else if (this.state.translateValue === 0) {
      this.setState(prevState => ({
        activateBar: prevState.activateBar + 3,
        translateValue: prevState.translateValue + -(1140 * 3),
      }));
    }
  }

  favClick(e) {
    this.setState({
      favorite: e.target.id,
    });
  }
  render() {
    const length = this.state.products.length;

    return (
      <div className={style.carousel}>
        <div className={style.recCarousel}>
          <div
            className={style.transformers}
            style={{
              transform: `translate(${this.state.translateValue}px)`,
              transition: 'transform ease-out 0.45s',
            }}
          >
            {this.props.products.map((value, index) => (
              <Products
                products={value}
                id={Math.random()}
                favClick={this.favClick.bind(this)}
                fav={this.state.favorite}
              />
            ))}
          </div>
          <div>
            <LeftArrow currentValue={this.state.activateBar} previous={this.previous} />
            <RightArrow length={length} next={this.next} currentValue={this.state.activateBar} />
          </div>
          <ul className={style.indicators}>
            <li
              className={this.state.activateBar === 0 ? style.active : style.nonActiveBars}
              onClick={this.home}
            />
            <li
              className={this.state.activateBar === 1 ? style.active : style.nonActiveBars}
              onClick={this.second}
            />

            <li
              className={this.state.activateBar === 2 ? style.active : style.nonActiveBars}
              onClick={this.third}
            />
            <li
              className={this.state.activateBar === 3 ? style.active : style.nonActiveBars}
              onClick={this.fourth}
            />
          </ul>
        </div>
      </div>
    );
  }
}
