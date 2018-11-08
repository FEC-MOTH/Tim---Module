import React from 'react';

const Favorite = function(props) {
  return (
    <svg
      id={props.id}
      viewBox="0 0 20 24"
      // id="wishlist-inactive"
      width="100%"
      height="100%"
      style={{ width: '23px' }}
    >
      <path
        fill={props.fav === props.id ? '100%' : 'none'}
        stroke="currentColor"
        strokeMiterlimit="10"
        strokeWidth="2"
        d="M7.38 6H4.42L2 10l8 8 8-8-2.41-4h-2.98L10 9 7.38 6z"
        onClick={props.favClick}
      />
    </svg>
  );
};

export default Favorite;
