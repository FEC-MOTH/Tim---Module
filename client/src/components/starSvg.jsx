import React from 'react';
import style from '../css/starSvg.css';

const SvgStar = function(props) {
  const random = () => Math.floor(Math.random() * 100).toString() + '%';

  return (
    <svg className="gl-star-rating__star" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg">
      <linearGradient id="05d80a5f-9258-49d4-b43b-b4ca7883263b">
        <stop offset="0%" stopOpacity="1" style={{ stopColor: 'currentcolor' }} />
        <stop offset="100%" stopOpacity="1" style={{ stopColor: 'currentcolor' }} />
        <stop offset="100%" stopOpacity="0" style={{ stopColor: 'currentcolor' }} />
        <stop offset="100%" stopOpacity="0" style={{ stopColor: 'currentcolor' }} />
      </linearGradient>
      <path
        fill="none"
        stroke="currentColor"
        strokeMiterlimit="10"
        d="M13.277,6.182L9.697,8.782L11.057,12.992L7.487,10.392L3.907,12.992L5.277,8.782L1.697,6.182L6.117,6.182L7.487,1.992L8.857,6.182L13.277,6.182Z"
      />
      <path
        fill="url(#05d80a5f-9258-49d4-b43b-b4ca7883263b)"
        stroke="0"
        d="M13.277,6.182L9.697,8.782L11.057,12.992L7.487,10.392L3.907,12.992L5.277,8.782L1.697,6.182L6.117,6.182L7.487,1.992L8.857,6.182L13.277,6.182Z"
      />
    </svg>
  );
};

export default SvgStar;
