import React from 'react';
import styled from 'styled-components';


import nikImage from '../assets/images/nik.png';
import hmImage from '../assets/images/hm.png';
import usImage from '../assets/images/us.png';
import lvsImage from '../assets/images/lvs.png';
import pumImage from '../assets/images/pum.png';

const BrandDeal = () => {
  return (
    <Back>
      <BackContent>
        <h1>Top Brand Deal</h1>
        <p className="in">Up To <span className="int">60%</span> off on brands</p>
        <BackImages>
          {brandImages.map((image, index) => (
            <BackImage key={index}>
              <img src={image.src} alt={image.alt} />
            </BackImage>
          ))}
        </BackImages>
      </BackContent>
    </Back>
  );
};


const brandImages = [
  { src: nikImage, alt: 'Image 1' },
  { src: hmImage, alt: 'Image 2' },
  { src: usImage, alt: 'Image 3' },
  { src: lvsImage, alt: 'Image 4' },
  { src: pumImage, alt: 'Image 5' },
];



const Back = styled.section`
  background-color: rgba(60, 66, 66, 1);
  padding: 50px 20px;
  text-align: center;
  border-radius: 20px;
  width: 91%;
  margin-left: 4%;
  margin-bottom: 40px;
  height: 433px;
  
  @media only screen and (min-width: 360px) and (max-width: 425px) {
    padding: 40px 15px;
  }

  @media only screen and (min-width: 426px) and (max-width: 768px) {
    padding: 45px 18px;
  }
`;

const BackContent = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 27px;
  
  h1 {
    font-size: 51px;
    font-family: "Noto Sans", sans-serif;
    margin-bottom: 20px;
    color: #ffffff;
    font-weight: bold;
  }

  p {
    font-size: 21px;
    color: rgba(255, 255, 255, 1);
    margin-bottom: 20px;
    font-family: "Noto Sans", sans-serif;
  }

  .in .int {
    font-weight: bold;
    color: rgba(251, 209, 3, 1);
  }

  @media only screen and (min-width: 360px) and (max-width: 425px) {
    h1 {
      font-size: 28px;
    }

    p {
      font-size: 16px;
    }
  }

  @media only screen and (min-width: 426px) and (max-width: 768px) {
    h1 {
      font-size: 32px;
    }

    p {
      font-size: 18px;
    }
  }

  @media only screen and (min-width: 769px) and (max-width: 1024px) {
    h1 {
      font-size: 36px;
    }

    p {
      font-size: 20px;
    }
  }

  @media only screen and (min-width: 1025px) and (max-width: 1440px) {
    h1 {
      font-size: 48px;
    }

    p {
      font-size: 22px;
    }
  }
`;

const BackImages = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
`;

const BackImage = styled.div`
  flex: 1 1 20%;
  max-width: 240px;

  img {
    width: 100%;
    height: auto;
    border-radius: 9px;
    margin-top: 20px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  @media only screen and (min-width: 360px) and (max-width: 425px) {
    flex: 1 1 45%;
    max-width: 45%;
  }

  @media only screen and (min-width: 426px) and (max-width: 768px) {
    flex: 1 1 45%;
    max-width: 45%;
  }

  @media only screen and (min-width: 769px) and (max-width: 1024px) {
    flex: 1 1 20%;
    max-width: 20%;
  }

  @media only screen and (min-width: 1025px) and (max-width: 1440px) {
    flex: 1 1 15%;
    max-width: 15%;
  }
`;

export default BrandDeal;
