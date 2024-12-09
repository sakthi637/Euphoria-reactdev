import React from 'react';
import styled from 'styled-components';

import lineImage from '../assets/images/line.png';
import pro1Image from '../assets/images/pro1.svg';
import pro2Image from '../assets/images/pro2.png';
import pro3Image from '../assets/images/pro3.png';



const Feedback = () => {
  const feedbackItems = [
    {
      profileImgSrc: pro1Image,
      name: 'Floyd Miles',
      feedback: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. 
        Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. 
        Exercitation veniam consequat sunt nostrud amet. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. 
        Exercitation veniam consequat sunt nostrud amet.`,
      rating: 5,
    },
    {
      profileImgSrc: pro2Image,
      name: 'Ronald Richards',
      feedback: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. 
        Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. 
        Exercitation veniam consequat sunt nostrud amet. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. 
        Exercitation veniam consequat sunt nostrud amet.`,
      rating: 4,
    },
    {
      profileImgSrc: pro3Image,
      name: 'Savannah Nguyen',
      feedback: `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. 
        Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. 
        Exercitation veniam consequat sunt nostrud amet. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. 
        Exercitation veniam consequat sunt nostrud amet.`,
      rating: 3,
    },
  ];

  return (
    <FeedbackSection>
      <FeedContent>
        <span>
          <LineImage src={lineImage} alt="line" /> Feedback
        </span>
        <FeedRow>
          {feedbackItems.map((item, index) => (
            <FeedColumn key={index}>
              <ProfileImage>
                <img src={item.profileImgSrc} alt={`Profile ${index + 1}`} />
              </ProfileImage>
              <Ratings>
                {Array.from({ length: item.rating }, (_, i) => (
                  <i key={i} className="fas fa-star"></i>
                ))}
              </Ratings>
              <h2>{item.name}</h2>
              <p>{item.feedback}</p>
            </FeedColumn>
          ))}
        </FeedRow>
      </FeedContent>
    </FeedbackSection>
  );
};


const FeedbackSection = styled.section`
  padding: 85px;
  text-align: center;
`;

const FeedContent = styled.div`
  margin-top: -85px;

  span {
    font-size: 33px;
    margin-bottom: 20px;
    display: flex;
    margin-top: -30px;
    font-family: "Noto Sans", sans-serif;
    color: rgba(60, 66, 66, 1);
    font-weight: bold;
    gap: 20px;
  }
`;

const LineImage = styled.img`
  width: 7px;
  height: 48px;
  display: flex;
  padding: 6px 0;
  margin-bottom: 20px;
`;

const FeedRow = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 30px;
  width: 99%;
`;

const FeedColumn = styled.div`
  flex: 1;
  margin: 10px;
  background-color: rgba(255, 255, 255, 1);
  padding: 20px;
  border-radius: 10px;
  border: 1px solid rgb(107, 103, 103);
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  text-align: left;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 20px rgba(49, 42, 42, 0.377);
  }

  h2 {
    font-family: "Noto Sans", sans-serif;
    font-size: 20px;
    color: rgba(60, 66, 66, 1);
    margin: 80px 0 5px;
  }

  p {
    font-family: "Noto Sans", sans-serif;
    font-size: 16px;
    color: rgba(128, 125, 126, 1);
    margin: 5px 0;
  }
`;

const ProfileImage = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  width: 50px;
  height: 50px;

  img {
    width: 100%;
    height: auto;
    border-radius: 12px;
  }
`;

const Ratings = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  display: flex;
  gap: 2px;
  color: rgba(255, 217, 0, 0.863);
`;

export default Feedback;
