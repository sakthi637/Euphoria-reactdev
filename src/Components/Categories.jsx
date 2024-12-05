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
        setLoading(false); // Data has finished loading
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

// Styled components
const Section = styled.section`
  padding: 80px;
  text-align: center;
`;

const LineImage = styled.span`
  display: flex;
  align-items: center;
  gap: 10px;

  .line2 {
    width: 7px;
    height: 57px;
    padding: 10px 0;
    margin-top: -1px;
  }

  img {
    width: 100%;
    height: auto;
  }
`;

const LoadingSpinner = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Content = styled.div`
  & span {
    font-size: 33px;
    margin-bottom: 20px;
    padding: 0;
    display: flex;
    margin-top: -30px;
    font-family: 'Noto Sans', sans-serif;
    color: rgba(60, 66, 66, 1);
    font-weight: bold;
    gap: 20px;

    &.women {
      padding-top: 130px;
    }
  }
`;

const Title = styled.span`
  font-size: 33px;
  margin-bottom: 20px;
  padding: 0;
  display: flex;
  font-family: 'Noto Sans', sans-serif;
  color: rgba(60, 66, 66, 1);
  font-weight: bold;
  gap: 20px;

  &.women {
    padding-top: 90px;
  }
`;

const Row = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 30px;

  @media only screen and (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

const Card = styled.div`
  flex: 1;
  padding: 9px;
  margin-right: 30px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  position: relative;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 390px;
  border-radius: 10px;
  margin-bottom: 15px;

  @media only screen and (max-width: 768px) {
    height: 180px;
  }
`;

const CardTitle = styled.h3`
  font-size: 18px;
  color: rgba(25, 25, 25, 1);
  margin: 5px 0;
  text-align: left;
  font-family: 'Noto Sans', sans-serif;
`;

const CardText = styled.p`
  font-family: 'Noto Sans', sans-serif;
  margin: 5px 0;
  text-align: left;
   font-size: 19px;
   color: gray;

`;

const ArrowIcon = styled.i`
  position: absolute;
  bottom: 18px;
  right: 60px;
  font-size: 19px;
  color: #666;
  transition: transform 0.3s ease, color 0.3s ease;

  ${Card}:hover & {
    color: #000;
    transform: translateX(5px);
  }
`;

export default Categories;
