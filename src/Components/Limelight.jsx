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
  flex-wrap: wrap; /* Allow wrapping to next row */
  margin: -10px; /* Adjust spacing between cards */
  width: calc(100% + 20px); /* Compensate for negative margin */

  justify-content: space-between;

  @media only screen and (min-width: 768px) {
    justify-content: space-around; /* Space cards evenly for larger screens */
  }
`;

const WishColumn = styled.div`
  flex: 0 1 calc(50% - 20px); /* Default: 2 cards per row */
  margin-top: 40px;
  padding: 5px; /* Reduced padding */
  border-radius: 10px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly; /* Align content evenly */
  cursor: pointer;
  

  &:hover {
    transform: scale(1.05);
  }

  img {
    width: 100%; /* Full width for images */
    height: 200px; /* Adjusted height for small screens */
    border-radius: 10px;
    margin-bottom: 10px;

    @media only screen and (min-width: 1025px) {
      height: 390px; /* Larger screen adjustments */
      margin-bottom: 15px;
    }

      @media only screen and (min-width: 768px) {
      height: 300px; /* Medium screen adjustments */
    }

      @media only screen and (min-width: 1440px) {
      height: 500px; /* Medium screen adjustments */
    }
  }

  h3 {
    font-size: 21px; /* Adjust font size */
    color: rgba(25, 25, 25, 1);
    margin: 5px 0;
    text-align: left;
    font-family: "Noto Sans", sans-serif;


        @media only screen and (min-width: 400px) {
      font-size: 12px;
    }

    @media only screen and (min-width: 768px) {
      font-size: 13px;
    }

     @media only screen and (min-width: 1440px) {
      font-size: 18px;
    }
  }

  p {
    font-size: 20px; /* Adjust font size */
    font-family: "Noto Sans", sans-serif;
    margin: 5px 0;
    text-align: left;
    color: gray;
    // display: none;


 

      @media only screen and (min-width: 400px) {
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
    padding: 0 25px;
    font-weight: bold;
    transition: transform 0.3s ease, color 0.3s ease;

    &:hover {
      transform: translateX(5px);
    }

        @media only screen and (min-width: 400px) {
      bottom: 6px;
      right: -10px;
      font-size: 12px;
    }

        @media only screen and (min-width: 768px) {
      bottom: 18px;
      right: 6px;
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

          @media only screen and (min-width: 400px) {
      // bottom: 18px;
      width: 30px;
      height: 30px;
      padding: 6px;
      font-size: 18px;
      top: 24px;  
      right: 20px;
      
    }

        @media only screen and (min-width: 768px) {
      // bottom: 18px;
      width: 30px;
      height: 30px;
      padding: 6px;
      font-size: 18px;
      top: 24px;  
      
      
    }

        @media only screen and (min-width: 1440px) {
      // bottom: 18px;
      width: 50px;
      height: 50px;
      padding: 13px;
      font-size: 24px;
      top: 24px;  
      
    }
  }

  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    flex: 0 1 calc(25% - 20px); /* 3 cards per row for tablets */
  }

  @media only screen and (min-width: 1025px) {
    flex: 0 1 calc(25% - 40px); /* 3 cards per row for larger screens */
    margin-right: 30px;
  }
`;

const LimelightSection = styled.section`
  padding: 40px; /* Adjust padding for small screens */
  background-color: #ffffff;
  text-align: center;

  @media only screen and (min-width: 768px) {
    padding: 80px; /* Larger padding for medium and large screens */
  }
`;

const WishContent = styled.div`
  span {
    font-size: 24px; /* Adjust font size for smaller screens */
    margin-bottom: 15px;
    display: flex;
    font-family: "Noto Sans", sans-serif;
    color: rgba(60, 66, 66, 1);
    font-weight: bold;
    gap: 10px;

    &.women {
      padding-top: 60px;

      @media only screen and (min-width: 768px) {
        padding-top: 90px;
      }
    }

    @media only screen and (min-width: 768px) {
      font-size: 33px; /* Larger font size for tablets and desktops */
    }
  }
`;

const LineImage = styled.img`
  width: 5px; /* Reduced width for small screens */
  height: 40px;
   /* Adjust height for small screens */

    @media only screen and (min-width: 400px) {
      width: 6px;
      height: 33px; /* Larger adjustments for tablets and desktops */
      margin-top: 3px;
      }

   @media only screen and (min-width: 768px) {
      width: 7px;
      height: 36px; /* Larger adjustments for tablets and desktops */
      margin-top: 6px;
      }

 

`;

export default Limelight;
