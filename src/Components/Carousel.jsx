import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const items = [
    'src/assets/images/bg-1.png',
    'src/assets/images/new1.webp',
  ];

  const showSlide = (index) => {
    setCurrentIndex(index);
  };

  const showNextSlide = () => {
    setCurrentIndex((currentIndex + 1) % items.length);
  };

  const showPrevSlide = () => {
    setCurrentIndex((currentIndex - 1 + items.length) % items.length);
  };

  useEffect(() => {
    const interval = setInterval(showNextSlide, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <Hero>
      <Main>
        <CarouselWrapper>
          <CarouselInner style={{ transform: `translateX(${-currentIndex * 100}%)` }}>
            {items.map((item, index) => (
              <CarouselItem
                key={index}
                className={currentIndex === index ? 'active' : ''}
                style={{ backgroundImage: `url(${item})` }}
              ></CarouselItem>
            ))}
          </CarouselInner>
          <OverlayContent>
            <h3>T-Shirt / Tops</h3>
            <h1>Summer<br />Value Pack</h1>
            <h3>cool / colorful / comfy</h3>
            <ShopButton>Shop Now</ShopButton>
          </OverlayContent>
          <PrevButton onClick={showPrevSlide}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </PrevButton>
          <NextButton onClick={showNextSlide}>
            <FontAwesomeIcon icon={faChevronRight} />
          </NextButton>
          <CarouselDots>
            {items.map((_, index) => (
              <Dot
                key={index}
                className={currentIndex === index ? 'active' : ''}
                onClick={() => showSlide(index)}
              ></Dot>
            ))}
          </CarouselDots>
        </CarouselWrapper>
      </Main>
    </Hero>
  );
};

export default Carousel;


const Hero = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding-top: 6rem;
`;

const Main = styled.div`
  position: relative;
  width: 100vw;
  align-items: center;
  justify-content: left;
  padding-left: 0;
  color: #ffffff;
  text-align: left;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const CarouselWrapper = styled.div`
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    height: 55%;
  }
`;

const CarouselInner = styled.div`
  display: flex;
  transition: transform 0.5s ease;
  height: 100;
`;

const CarouselItem = styled.div`
  min-width: 100%;
  height: 880px;
  background-size: cover;
  background-position: center;

  @media (max-width: 1440px) {
    height: 790px;
  }

  @media (max-width: 1024px) {
    height: 700px;
  }

  @media (max-width: 768px) {
    height: 500px;
  }

  @media (max-width: 480px) {
    height: 420px;
  }
`;

const PrevButton = styled.button`
  position: absolute;
  top: 50%;
  left: 10px;
  color: white;
  font-size: 40px;
  transform: translateY(-50%);
  background: none;
  border: none;
  padding: 10px;
  cursor: pointer;



   @media (max-width: 768px) {
    font-size: 30px;
  }
      @media (max-width: 480px) {
    font-size: 20px;
  }
`;

const NextButton = styled.button`
  position: absolute;
  top: 50%;
  right: 10px;
  color: white;
  font-size: 40px;
  transform: translateY(-50%);
  background: none;
  border: none;
  padding: 10px;
  cursor: pointer;

  @media (max-width: 768px) {
    font-size: 30px;
  }
     @media (max-width: 480px) {
    font-size: 20px;
  }
`;

const CarouselDots = styled.div`
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;

`;

const Dot = styled.span`
  width: 45px;
  height: 6px;
  background: rgb(255, 255, 255);
  cursor: pointer;
  transition: 0.3s;

  &.active {
    background: #512da8;
  }

  @media (max-width: 480px) {
    width: 25px;
    height: 4px;
  }
`;

const OverlayContent = styled.div`
  position: absolute;
  top: 20%;
  left: 20vh;
  font-family: "Noto Sans", sans-serif;

  
      @media (max-width: 768px) {
      top: 18%;
      left: 12%;
    }

     @media (max-width: 480px) {
      top: 24%;
      left: 15%;
    }
      
  h1 {
    margin: 0;
    font-size: 98px;
    color: #FFFFFF;
    font-weight: 800:

       @media (max-width: 1440px) {
      font-size: 100px;
    }

    @media (max-width: 1024px) {
      font-size: 60px;
    }

    @media (max-width: 768px) {
      font-size: 70px;
      
    }

    @media (max-width: 480px) {
      font-size: 42px;
      
    }
  }

  h3 {
    font-size: 45px;

    @media (max-width: 1024px) {
      font-size: 30px;
    }

    @media (max-width: 768px) {
      font-size: 20px;
    }

    @media (max-width: 480px) {
      font-size: 21px;
    }
  }
`;

const ShopButton = styled.button`
  display: inline-block;
  padding: 10px 20px;
  background-color: #fafafa;
  color: #3C4242;
  text-decoration: none;
  border-radius: 5px;
  font-size: 24px;
  margin-top: 30px;
  transition: background-color 0.3s;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #512da8;
  }

  @media (max-width: 768px) {
    font-size: 18px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;
