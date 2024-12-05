import React from 'react';
import styled from 'styled-components';
import yellImage from '../assets/images/yell.png';



const Fashion = () => {
  return (
    <Section id="new-section">
      <SectionContent>
        <LeftSide>
          <BackgroundContent>
            <h1>
              WE MADE YOUR EVERYDAY
              <br /> FASHION BETTER!
            </h1>
            <p>
              In our journey to improve everyday fashion, <br />
              euphoria presents EVERYDAY wear range - <br />
              Comfortable & Affordable fashion 24/7
            </p>
            <button className="cta-button">Shop Now</button>
          </BackgroundContent>
        </LeftSide>
        <RightSide>
          <img src={yellImage} alt="Right Side" />
        </RightSide>
      </SectionContent>
    </Section>
  );
};


const Section = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 90px;
  width: 100%;

  @media only screen and (min-width: 360px) and (max-width: 425px) {
    flex-direction: row;
    padding: 30px;
  }
`;

const SectionContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin: 0 auto;

  @media only screen and (min-width: 360px) and (max-width: 425px),
    (min-width: 426px) and (max-width: 767px) {
    flex-direction: column;
    margin-left: 0.5rem;
  }
`;

const LeftSide = styled.div`
  flex: 1;
  position: relative;
  background-image: url('src/assets/images/leaf.png');
  background-size: cover;
  background-position: center;
  padding-left: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  text-align: left;
  height: 800px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;

  @media only screen and (min-width: 360px) and (max-width: 425px) {
    height: 350px;
    width: 98%;
    padding: 18px;
    text-align: center;
    border-radius: 15px 15px 0 0;
  }
  @media only screen and (min-width: 426px) and (max-width: 767px) {
    height: 400px;
    width: 100%;
    padding: 18px;
    text-align: center;
    border-radius: 15px 15px 0 0;
  }
`;

const BackgroundContent = styled.div`
  position: relative;

  h1 {
    font-size: 50px;
    color: rgba(255, 255, 255, 1);
    margin: 0 0 20px 0;
    font-family: "Noto Sans", sans-serif;

    @media only screen and (min-width: 360px) and (max-width: 425px) {
      font-size: 21px;
    }
    @media only screen and (min-width: 426px) and (max-width: 767px) {
      font-size: 25px;
    }
  }

  p {
    font-size: 20px;
    line-height: 20px;
    margin: 0 0 20px 0;
    font-family: "Noto Sans", sans-serif;
    color: rgb(184, 179, 179);

    @media only screen and (min-width: 360px) and (max-width: 425px),
      (min-width: 426px) and (max-width: 767px) {
      font-size: 15px;
      line-height: 1.4;
    }
  }

  .cta-button {
    padding: 20px 70px;
    background-color: #ffffff;
    font-family: "Noto Sans", sans-serif;
    color: rgba(60, 66, 66, 1);
    text-decoration: none;
    border-radius: 12px;
    font-size: 21px;
    border: none;
    cursor: pointer;
    font-weight: bold;
    transition: background-color 0.3s;

    &:hover {
      background-color: #14331091;
    }

    @media only screen and (min-width: 360px) and (max-width: 425px),
      (min-width: 426px) and (max-width: 767px) {
      padding: 15px 30px;
      font-size: 15px;
    }
  }
`;

const RightSide = styled.div`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding-right: 20px;

  img {
    width: 850px;
    height: 800px;
    display: block;

    @media only screen and (min-width: 360px) and (max-width: 425px) {
      width: 104.5%;
      height: 350px;
      border-radius: 0 0 10px 10px;
    }
    @media only screen and (min-width: 426px) and (max-width: 767px) {
      width: 106%;
      height: 400px;
      border-radius: 0 0 10px 10px;
    }
  }
`;



export default Fashion;
