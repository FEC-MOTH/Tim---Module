import React from 'react';
import { render } from 'react-dom';
import App from './components/App.jsx';
import style from './css/App.css';

render(<App style={style.body} view="productDetails" />, document.getElementById('productDetails'));
render(<App style={style.body} view="recommended" />, document.getElementById('recommended'));
render(
  <App style={style.body} view="othersAlsoBought" />,
  document.getElementById('othersAlsoBought'),
);
render(<App style={style.body} view="recentlyViewed" />, document.getElementById('recentlyViewed'));
