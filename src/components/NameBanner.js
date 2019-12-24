import React from 'react';
import image from './image.jpg';
const NameBanner = () => {
  return ( 
    <div className="mainImageBG" style={{
      backgroundImage: `url(${image})`
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