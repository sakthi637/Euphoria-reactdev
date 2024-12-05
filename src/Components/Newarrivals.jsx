import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import activeImage from '../assets/images/active.jpg';
import img2 from '../assets/images/img-2.jpg';
import img3 from '../assets/images/img-3.jpg';
import img4 from '../assets/images/img-4.jpg';
import lineImage from '../assets/images/line.png';

const Newarrivals = () => {
  const galleryItems = [
    { src: activeImage, alt: 'Gallery Image 1', caption: 'Knitted Joggers' },
    { src: img2, alt: 'Gallery Image 2', caption: 'Urban Shirts' },
    { src: img3, alt: 'Gallery Image 3', caption: 'Full Sleeve' },
    { src: img4, alt: 'Gallery Image 4', caption: 'Active T-Shirts' },
    { src: img4, alt: 'Gallery Image 4', caption: 'Active T-Shirts' },
    { src: img2, alt: 'Gallery Image 2', caption: 'Urban Shirts' },
    { src: img3, alt: 'Gallery Image 3', caption: 'Full Sleeve' },
    { src: img4, alt: 'Gallery Image 4', caption: 'Active T-Shirts' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const totalItems = galleryItems.length;
  const itemsPerView = 4; 

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleNext();
    }, 4000); 
    return () => clearInterval(intervalId);
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex + itemsPerView) % totalItems
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex - itemsPerView + totalItems) % totalItems
    );
  };

  const getTranslateValue = () => {
    return `translateX(-${(currentIndex / itemsPerView) * 100}%)`;
  };

  return (
    <GallerySection>
      <GalleryContent>
      <span>
          <LineImage src={lineImage} alt="line" /> New Arrivals
        </span>
        <GalleryCarousel>
          <GalleryImages
            style={{
              transform: getTranslateValue(),
              transition: 'transform 0.5s ease',
            }}
          >
            {galleryItems.map((item, index) => (
              <GalleryItem key={index}>
                <img src={item.src} alt={item.alt} />
                <p>{item.caption}</p>
              </GalleryItem>
            ))}
          </GalleryImages>
          <GalleryPrev onClick={handlePrev}>
            <i className="fas fa-arrow-left"></i>
          </GalleryPrev>
          <GalleryNext onClick={handleNext}>
            <i className="fas fa-arrow-right"></i>
          </GalleryNext>
        </GalleryCarousel>
      </GalleryContent>
    </GallerySection>
  );
};

const GallerySection = styled.section`
  padding: 10px 35px;
`;

const GalleryContent = styled.div`
  padding: 35px;
  margin-left: 10px;
  position: relative;

  span {
    font-size: 33px;
    margin-bottom: 60px;
    padding: 0;
    display: flex;
    margin-top: -90px;
    font-family: "Noto Sans", sans-serif;
    color: rgba(60, 66, 66, 1);
    font-weight: bold;
    gap: 20px;
  }
`;

const GalleryCarousel = styled.div`
  width: 98%;
  overflow: hidden;
`;

const GalleryImages = styled.div`
  display: flex;
  transition: transform 0.5s ease;
`;

const GalleryItem = styled.div`
  min-width: 25%;
  padding: 0 30px;
  border-radius: 5px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  img {
    width: 100%;
    height: 450px;
    border-radius: 10px;
  }

  p {
    font-size: 20px;
    color: rgba(60, 66, 66, 1);
    margin-top: 12px;
    margin-left: 10px;
    font-weight: bold;
    font-family: "Urbanist", sans-serif;
  }
`;

const GalleryPrev = styled.button`
  position: absolute;
  top: 50%;
  color: rgb(5, 4, 4);
  transform: translateY(-50%);
  background: none;
  border: none;
  padding: 3px;
  cursor: pointer;
  left: 30px;
`;

const LineImage = styled.img`
  width: 7px;
  height: 48px;
  display: flex;
  padding: 6px 0;
  margin-bottom: 20px;
`;

const GalleryNext = styled.button`
  position: absolute;
  top: 50%;
  color: rgb(5, 4, 4);
  transform: translateY(-50%);
  background: none;
  border: none;
  padding: 3px;
  cursor: pointer;
  right: 59px;
`;

export default Newarrivals;
