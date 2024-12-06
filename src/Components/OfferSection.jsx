import React from 'react';
import styled from 'styled-components';

const OfferSection = () => {
  return (
    <ThirdSection>
      <LeftSection>
        <Container1>
          <OverlayContent>
            <h5>Low Price</h5>
            <h1>High Coziness</h1>
            <p>UPTO 50% OFF</p>
            <a href="#">Explore Now</a>
          </OverlayContent>
        </Container1>
      </LeftSection>
      <RightSection>
        <Container2>
          <OverlayContent>
            <h5>Beyoung Presents</h5>
            <h1>Breezy Summer<br />Style</h1>
            <p>UPTO 50% OFF</p>
            <a href="#">Explore Now</a>
          </OverlayContent>
        </Container2>
      </RightSection>
    </ThirdSection>
  );
};

const ThirdSection = styled.section`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 50px 0px 60px -10px;
  padding: 75px;


  @media only screen and (max-width: 768px) {
    flex-direction: column;
    padding-left: 0.5rem;
    margin: 15px auto;
  }

  @media only screen and (max-width: 799px) {
    flex-direction: column;
    margin: 20px auto;
  }

  @media only screen and (max-width: 1024px) {
    flex-direction: row;
    padding: 20px;
    margin: 20px auto;
  }

  @media only screen and (max-width: 1440px) {
    padding: 20px;
    margin: 20px auto;
  }

    @media only screen and (max-width: 799px) {
    flex-direction: column;
    margin: 20px auto;
  }

   @media only screen and (max-width: 768px) {
    flex-direction: column;
    padding-left: 0.9rem;
    margin: 20px auto;
  }

    @media only screen and (max-width: 425px) {
    flex-direction: column;
    padding-left: 1rem;
    margin: 10px auto;
  }
`;

const LeftSection = styled.div`
  flex: 1;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  margin: 10px;
`;

const RightSection = styled.div`
  flex: 1;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  margin: 10px;
`;

const Container1 = styled.div`
  position: relative;
  height: 480px;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: #f4f7f4;
  text-align: left;
  border-radius: 40px;
  background-image: url('src/assets/images/main2.png');

  @media only screen and (max-width: 1440px) {
    height: 420px;
  }

   @media only screen and (max-width: 1024px) {
    height: 400px;
  }

    @media only screen and (max-width: 799px) {
    height: 300px;
  }

    @media only screen and (max-width: 768px) {
    height: 400px;

  }

    @media only screen and (max-width: 425px) {
    height: 320px;
    width: 320px;
    display: flex;
  }

`;

const Container2 = styled.div`
  position: relative;
  height: 480px;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: #f4f7f4;
  text-align: left;
  border-radius: 40px;
  background-image: url('src/assets/images/voilet2.png');


  @media only screen and (max-width: 1440px) {
    height: 420px;
  }


   @media only screen and (max-width: 1024px) {
    height: 400px;
  }


   @media only screen and (max-width: 799px) {
    height: 300px;
  }


    @media only screen and (max-width: 768px) {
    height: 350px;
  }

    @media only screen and (max-width: 425px) {
    height: 320px;
    width: 320px;
  }
`;

const OverlayContent = styled.div`
  position: absolute;
  left: 20px;
  padding: 20px;

  h1 {
    margin: 0;
    font-size: 54px;
  }

  h5 {
    font-size: 36px;
    margin: 10px 0;
  }

  p {
    font-size: 24px;
    margin: 10px 0;
  }

  a {
    font-size: 18px;
    margin: 10px 0;
    text-decoration: underline;
    color: white;
    font-weight: bold;
  }


  @media only screen and (max-width: 1440px) {
    h1 {
      font-size: 36px;
    }

    h5 {
      font-size: 21px;
    }

    p, a {
      font-size: 15px;
    }
  }



    @media only screen and (max-width: 1024px) {
    h1 {
      font-size: 32px;
    }

    h5 {
      font-size: 20px;
    }

    p, a {
      font-size: 14px;
    }
  }



  @media only screen and (max-width: 799px) {
    h1 {
      font-size: 32px;
    }

    h5 {
      font-size: 20px;
    }

    p, a {
      font-size: 14px;
    }
  }


    @media only screen and (max-width: 768px) {
    h1 {
      font-size: 33px;
    }

    h5 {
      font-size: 21px;
    }

    p, a {
      font-size: 15px;
    }
  }


   @media only screen and (max-width: 425px) {
    h1 {
      font-size: 24px;
    }

    h5 {
      font-size: 16px;
    }

    p, a {
      font-size: 12px;
    }
  }


  
`;

export default OfferSection;
