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
}

  @media only screen and (min-width: 1025px) and (max-width: 1440px) {
    padding: 30px;
  }

  @media only screen and (min-width: 600px) and (max-width: 767px) {
    flex-direction: column;
    }

      @media only screen and (min-width: 480px) and (max-width: 599px) {
    flex-direction: column;
    margin-left: 0.5rem;
  }

        @media only screen and (min-width: 360px) and (max-width: 479px) {
    flex-direction: column;
    margin-left: 2rem;
  }
  
`;

const SectionContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin: 0 auto;
  padding-left:-30px;


    @media only screen and (min-width: 1025px) and (max-width: 1440px) {
    flex-direction: row;
    margin-right: 1.5rem;
  }

  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    flex-direction: row;
    margin-right: 3rem;
  }

    @media only screen and (min-width: 600px) and (max-width: 767px) {
    flex-direction: column;
    margin-left: 0.5rem;
  }

    @media only screen and (min-width: 480px) and (max-width: 599px) {
    flex-direction: column;
  }

      @media only screen and (min-width: 360px) and (max-width: 479px) {
    flex-direction: column;
    margin-top: -4rem;
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


  @media only screen and (min-width: 1025px) and (max-width: 1440px) {
    height: 670px;
    padding: 50px;
    text-align: left;
    border-radius: 15px 0 0 15px;
  }

   @media only screen and (min-width: 768px) and (max-width: 1024px) {
    height: 500px;
    width: 100%;
    border-radius: 15px 0 0 15px;
  }

    @media only screen and (min-width: 600px) and (max-width: 767px) {
    height: 400px;
    width: 89vw;
    margin-left:-60px;
    padding: 95px;
    text-align: center;
    border-radius: 15px 15px 0 0;
  }

    @media only screen and (min-width: 480px) and (max-width: 599px) {
      width: 80vw;
      padding: 50px;
      margin-left:-40px;
      text-align: center;
      border-radius: 15px 15px 0 0;
    }

      @media only screen and (min-width: 360px) and (max-width: 479px) {
      height: 300px;
      width: 80vw;
      padding: 50px;
      text-align: center;
      margin-left: -3.5rem;
      border-radius: 15px 15px 0 0;
    }
`;

const BackgroundContent = styled.div`
  position: relative;

  h1 {
    font-size: 40px;
    color: rgba(255, 255, 255, 1);
    margin: 0 0 20px 0;
    font-family: "Noto Sans", sans-serif;

    @media only screen and (min-width: 1025px) and (max-width: 1440px) {
      font-size: 30px;
    }

    @media only screen and (min-width: 768px) and (max-width: 1024px) {
      font-size: 25px;
      margin-top: 2rem;
    }

      @media only screen and (min-width: 600px) and (max-width: 767px) {
      font-size: 21px;
    }

        @media only screen and (min-width: 480px) and (max-width: 599px) {
      font-size: 25px;
    }

        @media only screen and (min-width: 360px) and (max-width: 479px) {
      font-size: 15px;
    }

     
  }

  p {
    font-size: 21px;
    line-height: 40px;
    align-items: center;
    justify-content: center;
    margin: 0 0 20px 0;
    margin-top:30px;
    font-family: "Noto Sans", sans-serif;
    color:#FFFFFF ;
    

    @media only screen and (min-width: 1025px) and (max-width: 1440px) {
      font-size: 15px;
      line-height: 1.8;
    }

    @media only screen and (min-width: 768px) and (max-width: 1024px) {
      font-size: 15px;
      line-height: 1.6;
    }

    @media only screen and (min-width: 600px) and (max-width: 767px) {
      font-size: 13px;
      line-height: 1.4;
    }

    @media only screen and (min-width: 480px) and (max-width: 599px) {
      line-height: 1.4;
      font-size: 15px;
    
  }

    @media only screen and (min-width: 360px) and (max-width: 479px) {
       line-height: 1;
      font-size: 9px;
    
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
    margin-top:30px;
    transition: background-color 0.3s;

    &:hover {
      background-color: #14331091;
    }

    @media only screen and (min-width: 1025px) and (max-width: 1440px) {
      padding: 20px 50px;
      font-size: 21px;
    }

     @media only screen and (min-width: 768px) and (max-width: 1024px) {
      padding: 15px 30px;
      font-size: 15px;
    }

       @media only screen and (min-width: 600px) and (max-width: 767px) {
      padding: 15px 30px;
      font-size: 12px;
    
  }

        @media only screen and (min-width: 480px) and (max-width: 599px) {
      padding: 15px 30px;
      font-size: 15px;
    
  }

    @media only screen and (min-width: 360px) and (max-width: 479px) {
      padding: 15px 30px;
      font-size: 12px;
    
  }

 }
    @media only screen and (min-width: 1025px) and (max-width: 1440px) {
      padding: 20px 50px;
      font-size: 21px;
    }

     @media only screen and (min-width: 768px) and (max-width: 1024px) {
      padding: 15px 30px;
      font-size: 15px;
    }

       @media only screen and (min-width: 600px) and (max-width: 767px) {
      padding: 15px 30px;
      font-size: 15px;
    
  }

        @media only screen and (min-width: 480px) and (max-width: 599px) {
      padding: 15px 30px;
      font-size: 15px;
    
  }

         @media only screen and (min-width: 360px) and (max-width: 479px) {
      padding: 15px 30px;
      font-size: 15px;
    
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


    @media only screen and (min-width: 1025px) and (max-width: 1440px) {
      width: 110%;
      height: 670px;
      border-radius: 0 15px 15px 0;
    }

    @media only screen and (min-width: 768px) and (max-width: 1024px) {
      width: 120%;
      height: 500px;
      border-radius: 0 15px 15px 0;
    }

      @media only screen and (min-width: 600px) and (max-width: 767px) {
      width: 89vw;
      height: 510px;
      margin-left: -60px;
      border-radius: 0 0 10px 10px;
    }

      @media only screen and (min-width: 480px) and (max-width: 599px) {
      width: 80vw;
      height: 420px;
      margin-left: -40px;
      border-radius: 0 0 10px 10px;
    }

         @media only screen and (min-width: 360px) and (max-width: 479px) {
      width: 80vw;
      height: 330px;
      margin-left: -3.5rem;
      border-radius: 0 0 10px 10px;
    }
  }
`;



export default Fashion;
