import React from 'react';
import image from './unnamed-23.jpg';
const NameBanner = () => {
  return ( 
    <div className="mainImageBG" style={{
      background: `url(${image})`
    }}>
      <div className="ptext">
        <span className="border">
          Sayeed Joseph's Portfolio
        </span>
      </div>
    </div>
  );
}

export default NameBanner;