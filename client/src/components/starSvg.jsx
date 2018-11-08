import React from 'react';
import style from '../css/starSvg.css';

const SvgStar = function(props) {
  return (
    <svg className={style.star} viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg">
      <linearGradient id={props.index}>
        <stop offset={props.value} stopOpacity="1" style={{ stopColor: 'currentcolor' }} />
        <stop offset={props.value} stopOpacity="1" style={{ stopColor: 'currentcolor' }} />
        <stop offset={props.value} stopOpacity="0" style={{ stopColor: 'currentcolor' }} />
        <stop offset={props.value} stopOpacity="0" style={{ stopColor: 'currentcolor' }} />
      </linearGradient>
      <path
        fill="none"
        stroke="currentColor"
        strokeMiterlimit="10"
        d="M13.277,6.182L9.697,8.782L11.057,12.992L7.487,10.392L3.907,12.992L5.277,8.782L1.697,6.182L6.117,6.182L7.487,1.992L8.857,6.182L13.277,6.182Z"
      />
      <path
        fill={`url(${'#' + props.index})`}
        stroke="0"
        d="M13.277,6.182L9.697,8.782L11.057,12.992L7.487,10.392L3.907,12.992L5.277,8.782L1.697,6.182L6.117,6.182L7.487,1.992L8.857,6.182L13.277,6.182Z"
      />
    </svg>
  );
};

export default SvgStar;
