import React from 'react';
import { Container, HomeTitle, ImgContainer, ImgHome,} from './Home.styled';
import backCar from 'img/home.jpg'

export const Home = () => {
  return (
    <Container>
      <HomeTitle>Find your drive</HomeTitle>
      <ImgContainer>
         <ImgHome
         src={backCar}
         alt="cars"
         width={1000}
         height={650}
        />
      </ImgContainer>
    </Container>
  );
};
