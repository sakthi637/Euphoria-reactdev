import React from 'react';
import './Similar.css'; 


import lineImage from '../../assets/images/line.png';
import witImage from '../../assets/images/polo.png';
import peachImage from '../../assets/images/womn2.png';
import orangeImage from '../../assets/images/shirt.png';
import pinkImage from '../../assets/images/womn3.png';

const Similar = () => {
  return (
    <section id="wishsimilar">
      <div className="similar-content">
        <span>
          <img src={lineImage} alt="line" className="line3" /> Similar Products
        </span>
        <div className="similar-row">
          {wishItems.map((item, index) => (
            <div className="wish-columns" key={index}>
              <i className="wishlist-icon fa fa-heart"></i>
              <img src={item.imgSrc} alt={item.imgAlt} />
              <h3>{item.title}</h3>
              <a href={item.link}><p>{item.brand}</p></a>
              <p className="dollar">{item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


const wishItems = [
  { imgSrc: witImage, imgAlt: 'Design 1', title: 'Black Sweatshirt', brand: "Jhanvi's Brand", link: '#', price: '$123.00' },
  { imgSrc: peachImage, imgAlt: 'Design 2', title: 'Line Pattern Black', brand: "AS's Brand", link: '#', price: '$37.00' },
  { imgSrc: orangeImage, imgAlt: 'Design 3', title: 'Black Shorts', brand: "MM's Brand", link: '#', price: '$39.00' },
  { imgSrc: pinkImage, imgAlt: 'Design 4', title: 'Lavender Hoodie', brand: "Nike's Brand", link: '#', price: '$119.00' },
];

export default Similar;
