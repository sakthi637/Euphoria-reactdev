import React from 'react';
import styled from 'styled-components';

import lineImage from '../assets/images/line.png';
import witImage from '../assets/images/wit.png';
import peachImage from '../assets/images/peach.png';
import orangeImage from '../assets/images/orange.png';
import pinkImage from '../assets/images/pink.png';


const wishItems = [
  { imgSrc: witImage, imgAlt: 'Design 1', title: 'Black Sweatshirt', brand: "Jhanvi's Brand", link: '#', price: '$123.00' },
  { imgSrc: peachImage, imgAlt: 'Design 2', title: 'Line Pattern Black', brand: "AS's Brand", link: '#', price: '$37.00' },
  { imgSrc: orangeImage, imgAlt: 'Design 3', title: 'Black Shorts', brand: "MM's Brand", link: '#', price: '$39.00' },
  { imgSrc: pinkImage, imgAlt: 'Design 4', title: 'Lavender Hoodie', brand: "Nike's Brand", link: '#', price: '$119.00' },
];

const Limelight = () => {
  return (
    <LimelightSection id="wish">
      <WishContent>
        <span>
          <LineImage src={lineImage} alt="line" /> In The Limelight
        </span>
        <WishRow>
          {wishItems.map((item, index) => (
            <WishColumn key={index}>
              <i className="wishlist-icon fa fa-heart"></i>
              <img src={item.imgSrc} alt={item.imgAlt} />
              <h3>{item.title}</h3>
              <a href={item.link}><p>{item.brand}</p></a>
              <p className="dollar">{item.price}</p>
            </WishColumn>
          ))}
        </WishRow>
      </WishContent>
    </LimelightSection>
  );
};


const LimelightSection = styled.section`
  padding: 81px;
  background-color: #ffffff;
  text-align: center;
`;

const WishContent = styled.div`
  span {
    font-size: 33px;
    margin-bottom: 20px;
    padding: 0;
    display: flex;
    margin-top: -30px;
    font-family: "Noto Sans", sans-serif;
    color: rgba(60, 66, 66, 1);
    font-weight: bold;
    gap: 20px;
  }
`;

const WishRow = styled.div`
  display: flex;
  margin: -27px;
  width: 104%;
  justify-content: space-between;
`;

const WishColumn = styled.div`
  flex: 1;
  margin: 10px;
  padding: 20px;
  border-radius: 10px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  &:hover {
    transform: scale(1.05);
  }

  img {
    width: 90%;
    height: auto;
    // display: none;
    border-radius: 10px;
    margin-bottom: 15px;
  }

  h3 {
    font-size: 15px;
    color: rgba(60, 66, 66, 1);
    font-family: "Noto Sans", sans-serif;
    margin: 5px 0;
    text-align: left;
  }

  a {
    font-size: 14px;
    color: rgba(128, 125, 126, 1);
    text-decoration: none;
  }

  p {
    font-family: "Noto Sans", sans-serif;
    margin: 5px 0;
    text-align: left;
  }

  .dollar {
    position: absolute;
    bottom: 30px;
    right: 39px;
    color: #666;
    padding: 0 25px;
    font-weight: bold;
    transition: transform 0.3s ease, color 0.3s ease;

    &:hover {
      transform: translateX(5px);
    }
  }

  .wishlist-icon {
    position: absolute;
    top: 36px;
    right: 75px;
    font-size: 24px;
    color: #e0dfdf;
    background-color: rgb(37, 35, 35);
    border-radius: 50%;
    padding: 10px;
    cursor: pointer;
    transition: color 0.3s ease, background-color 0.3s ease;

    &:hover {
      color: #ff0000;
      background-color: rgba(0, 0, 0, 0.7);
    }
  }
`;

const LineImage = styled.img`
  width: 7px;
  height: 48px;
  display: flex;
  padding: 6px 0;
  margin-bottom: 20px;
`;


export default Limelight;
