import React from 'react';
import {
  Container,
  HomeTitle,
  ImgContainer,
  ImgHome,
  Welcome,
} from './Home.styled';
import backCar from 'img/home.jpg'

export const Home = () => {
  return (
    <Container>
      <HomeTitle>Find your drive</HomeTitle>
      <Welcome>
      Explore the world's largest car sharing marketplace
      </Welcome>
      <ImgContainer>
        <ImgHome
          src={backCar}
          alt="cars"
          width={600}
          height={300}
        />
      </ImgContainer>
    </Container>
  );
};
