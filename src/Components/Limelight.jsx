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


const WishRow = styled.div`
  display: flex;
  flex-wrap: wrap; 
  margin: -10px; 
  width: calc(100% + 20px); 
  justify-content: space-between;

  @media only screen and (min-width: 768px) {
    justify-content: space-around; 
  }
`;

const WishColumn = styled.div`
  flex: 0 1 calc(50% - 20px); 
  margin-top: 40px;
  padding: 5px; 
  border-radius: 10px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly; 
  cursor: pointer;
  

  &:hover {
    transform: scale(1.05);
  }

  img {
    width: 100%; 
    height: 200px; 
    border-radius: 10px;
    margin-bottom: 10px;

    @media only screen and (min-width: 450px) {
      height: 300px; 
    }
      @media only screen and (min-width: 768px) {
      height: 300px; 
    }

    @media only screen and (min-width: 1440px) {
      height: 500px; 
    }
  }

  h3 {
    font-size: 21px;
    color: #3C4242;
    margin: 5px 0;
    text-align: left;
    font-family: "Noto Sans", sans-serif;


        @media only screen and (min-width: 360px) {
      font-size: 10px;
    }

    @media only screen and (min-width: 768px) {
      font-size: 13px;
    }

     @media only screen and (min-width: 1440px) {
      font-size: 18px;
    }
  }

  p {
    font-size: 20px; 
    font-family: "Noto Sans", sans-serif;
    margin: 5px 0;
    text-align: left;
    color: #807D7E;

    @media only screen and (min-width: 360px) {
      font-size: 10px;
    }

    @media only screen and (min-width: 768px) {
      font-size: 12px;
    }

    @media only screen and (min-width: 1440px) {
      font-size: 20px;
    }
  
  }

  .dollar {
    position: absolute;
    bottom: 12px;
    right: 20px;
    color: #666;
    height:39px;
    border: none;
    background-color: #F6F6F6;
    border-radius: 6px;
    padding: 5px 15px;
    font-weight: bold;
    transition: transform 0.3s ease, color 0.3s ease;

    &:hover {
      transform: translateX(5px);
    }

        @media only screen and (min-width: 360px) {
      bottom: 6px;
      right: 6px;
       padding: 9px 3px;
      font-size: 10px;
    }

        @media only screen and (min-width: 768px) {
      bottom: -6px;
      right: 1px;
      
      padding: 9px 1px;
      font-size: 11px;
    }

        @media only screen and (min-width: 1440px) {
      bottom: 18px;
      right: 6px;
      
      font-size: 20px;
    }
  }
  .wishlist-icon {
    position: absolute;
    top: 36px;
    right: 35px;
    color:red;
    font-size: 24px;
    background-color: white;
    padding: 10px;
    cursor: pointer;
    transition: color 0.3s ease, background-color 0.3s ease;

    &:hover {
      color: #ff0000;
      background-color: rgba(0, 0, 0, 0.7);
    }

    @media only screen and (min-width: 360px) {
     width: 25px;
     height:25px;

      padding: 6px;
      font-size: 15px;
      top: 21px;  
    }

    @media only screen and (min-width: 768px) {
      width: 30px;
      height: 30px;
      padding: 6px;
      font-size: 18px;
      top: 24px;  
      right: 50px;
      
    }

    @media only screen and (min-width: 1440px) {
      width: 50px;
      height: 50px;
      padding: 13px;
      font-size: 24px;
      top: 24px;  
      
    }
  }

  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    flex: 0 1 calc(25% - 20px); 
  }

  @media only screen and (min-width: 1025px) {
    flex: 0 1 calc(25% - 40px); 
    margin-right: 30px;
  }
`;

const LimelightSection = styled.section`
  padding: 40px; 
  background-color: #ffffff;
  text-align: center;

  @media only screen and (min-width: 768px) {
    padding: 80px;
  }
`;

const WishContent = styled.div`
  span {
    font-size: 24px; 
    margin-bottom: 15px;
    display: flex;
    font-family: "Noto Sans", sans-serif;
    color: rgba(60, 66, 66, 1);
    font-weight: bold;
    gap: 20px;

    &.women {
      padding-top: 60px;

      @media only screen and (min-width: 768px) {
        padding-top: 90px;
      }
    }

    @media only screen and (min-width: 768px) {
      font-size: 33px; 
    }
  }
`;

const LineImage = styled.img`
  width: 5px;
  height: 40px;

    @media only screen and (min-width: 360px) {
      width: 6px;
      height: 33px; 
    }

   @media only screen and (min-width: 768px) {
      width: 7px;
      height: 36px; 
      margin-top: 6px;
      }
`;

export default Limelight;
