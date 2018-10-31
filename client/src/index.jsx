import React from 'react';
import { render } from 'react-dom';
import App from './components/App.jsx';
import style from './css/App.css';

render(<App style={style.body} />, document.getElementById('app'));
