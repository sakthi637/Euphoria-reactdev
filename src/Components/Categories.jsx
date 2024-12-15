import React, { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { AuthContext } from '../App'; 
import lineImage from '../assets/images/line.png';

const Categories = () => {
  const [menCategories, setMenCategories] = useState([]);
  const [womenCategories, setWomenCategories] = useState([]);
  const [loading, setLoading] = useState(true); 
  const navigate = useNavigate();
  const { user, setIsAuthModalOpen } = useContext(AuthContext);

  const menIds = [2, 3, 4, 10, 1, 11, 6, 8];
  const womenIds = [15, 16, 17, 20];

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => {
        setMenCategories(data.filter((product) => menIds.includes(product.id)));
        setWomenCategories(data.filter((product) => womenIds.includes(product.id)));
        setLoading(false); 
      });
  }, []);

  const handleCardClick = (id) => {
    if (user) {
      window.scrollTo(0, 0);
      navigate(`/product/${id}`);
    } else {
      setIsAuthModalOpen(true);
    }
  };

  const firstRowMenCategories = menCategories.slice(0, 4);
  const secondRowMenCategories = menCategories.slice(4);

  return (
    <Section>
      {loading ? (
        <LoadingSpinner>Loading...</LoadingSpinner> 
      ) : (
        <Content>
          <Title>
            <LineImage>
              <img src={lineImage} alt="line" className="line2" />
              Categories For Mens
            </LineImage>
          </Title>
          <Row>
            {firstRowMenCategories.map((category) => (
              <CategoryCard
                key={category.id}
                imgSrc={category.image}
                title={category.title}
                onClick={() => handleCardClick(category.id)}
              />
            ))}
          </Row>
          <Row>
            {secondRowMenCategories.map((category) => (
              <CategoryCard
                key={category.id}
                imgSrc={category.image}
                title={category.title}
                onClick={() => handleCardClick(category.id)}
              />
            ))}
          </Row>
          <Title className="women">
            <LineImage>
              <img src={lineImage} alt="line" className="line2" />
              Categories For Women
            </LineImage>
          </Title>
          <Row>
            {womenCategories.map((category) => (
              <CategoryCard
                key={category.id}
                imgSrc={category.image}
                title={category.title}
                onClick={() => handleCardClick(category.id)}
              />
            ))}
          </Row>
        </Content>
      )}
    </Section>
  );
};

const CategoryCard = ({ imgSrc, title, onClick }) => (
  <Card onClick={onClick}>
    <Image src={imgSrc} alt={title} />
    <CardTitle>{title}</CardTitle>
    <CardText>Explore Now!</CardText>
    <ArrowIcon className="fas fa-arrow-right" />
  </Card>
);


const Section = styled.section`
  padding: 40px; 
  text-align: center;

  @media only screen and (min-width: 768px) {
    padding: 80px;
  }
`;

const LineImage = styled.span`
  display: flex;
  align-items: center;
  gap: 10px;

  .line2 {
    width: 5px;
    height: 40px;
    padding: 5px 0;
    margin-top: 0;

    @media only screen and (min-width: 768px) {
      width: 7px;
      height: 57px;
      padding: 10px 0;
    }
  }

  img {
    width: 80%; /* Adjust image width for smaller screens */
    height: auto;

    @media only screen and (min-width: 768px) {
      width: 100%;
    }
  }
`;

const LoadingSpinner = styled.div`
  font-size: 18px; 
  font-weight: bold;
  color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  @media only screen and (min-width: 768px) {
    font-size: 24px;
  }
`;

const Content = styled.div`
  & span {
    font-size: 24px; 
    margin-bottom: 15px;
    display: flex;
    margin-top: -20px;
    font-family: 'Noto Sans', sans-serif;
    color: r#3C4242;
    font-weight: bold;
    gap: 10px;

    &.women {
      padding-top: 50px;
    }

    @media only screen and (min-width: 768px) {
      font-size: 27px;
      gap: 20px;
    }
    @media only screen and (min-width: 360px) {
      font-size: 21px;
  }

  @media only screen and (min-width: 768px) {
    font-size: 27px;
  }

  @media only screen and (min-width: 1440px) {
    font-size: 33px;
  }
  }
`;

const Title = styled.span`
  font-size: 24px;
  margin-bottom: 15px;
  font-family: 'Noto Sans', sans-serif;
  color: rgba(60, 66, 66, 1);
  font-weight: bold;

  &.women {
    padding-top: 60px;

    @media only screen and (min-width: 768px) {
      padding-top: 90px;
    }
  }

  @media only screen and (min-width: 768px) {
    font-size: 33px;
  }

  
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  flex-wrap: wrap; 
  @media only screen and (min-width: 768px) {
    justify-content: space-around; 
  }

  @media only screen and (min-width: 769px) and (max-width: 1024px) {
    justify-content: space-around;
  }
`;

const Card = styled.div`
  flex: 0 1 calc(50% - 20px);
  padding: 5px; /* Adjusted padding for smaller screens */
  margin: 10px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  position: relative;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }

  @media only screen and (min-width: 769px) and (max-width: 1024px) {
    flex: 0 1 calc(25% - 20px); 
  }

  @media only screen and (min-width: 1025px) {
    flex: 0 1 calc(25% - 40px); 
    margin-right: 30px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 200px; 
  border-radius: 10px;
  margin-bottom: 10px;

  @media only screen and (min-width: 768px) {
    height: 300px; 
  }

  @media only screen and (min-width: 1025px) {
    height: 390px; 
    margin-bottom: 15px;
  }
`;

const CardTitle = styled.h3`
  font-size: 16px; 
  color: #3C4242;
  margin: 5px 0;
  text-align: left;
 

  @media only screen and (min-width: 360px) {
    font-size: 12px;
  }

  @media only screen and (min-width: 768px) {
    font-size: 13px;
  }

    @media only screen and (min-width: 1150px) {
    font-size: 21px;
  }
`;

const CardText = styled.p`
  font-size: 15px; 
  font-family: 'Noto Sans', sans-serif;
  margin: 5px 0;
  text-align: left;
  color: #807D7E;

  @media only screen and (min-width: 360px) {
    font-size: 12px;
  }

  @media only screen and (min-width: 768px) {
    font-size:12px;
  }

   @media only screen and (min-width: 1150px) {
    font-size:18px;
  }
`;

const ArrowIcon = styled.i`
  position: absolute;
  bottom: 12px; 
  right: 20px;
  font-size: 16px; 
  color: #666;
  transition: transform 0.3s ease, color 0.3s ease;

  ${Card}:hover & {
    color: #000;
    transform: translateX(5px);
  }

  @media only screen and (min-width: 360px) {
    font-size: 12px;
  }

  @media only screen and (min-width: 768px) {
    bottom: 15px;
    right: 40px;
    font-size: 12px;
  }

    @media only screen and (min-width: 1150px) {
    bottom: 18px;
    right: 60px;
    font-size: 18px;
  }
`;


export default Categories;
