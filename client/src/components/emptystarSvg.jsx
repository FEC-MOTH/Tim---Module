import React from 'react';
import style from '../css/starSvg.css';

const EmptySvgStar = function(props) {
  return (
    <svg class="gl-star-rating__star" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg">
      <linearGradient id="11502f28-920e-4706-abbb-914b0eafcdb8">
        <stop offset="0%" stopOpacity="1" style={{ stopColor: 'currentcolor' }} />
        <stop offset="0%" stopOpacity="1" style={{ stopColor: 'currentcolor' }} />
        <stop offset="0%" stopOpacity="0" style={{ stopColor: 'currentcolor' }} />
        <stop offset="0%" stopOpacity="0" style={{ stopColor: 'currentcolor' }} />
      </linearGradient>
      <path
        fill="none"
        stroke="currentColor"
        stroke-miterlimit="10"
        d="M13.277,6.182L9.697,8.782L11.057,12.992L7.487,10.392L3.907,12.992L5.277,8.782L1.697,6.182L6.117,6.182L7.487,1.992L8.857,6.182L13.277,6.182Z"
      />
      <path
        fill="url(#11502f28-920e-4706-abbb-914b0eafcdb8)"
        stroke="0"
        d="M13.277,6.182L9.697,8.782L11.057,12.992L7.487,10.392L3.907,12.992L5.277,8.782L1.697,6.182L6.117,6.182L7.487,1.992L8.857,6.182L13.277,6.182Z"
      />
    </svg>
  );
};

export default EmptySvgStar;
