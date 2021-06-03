import React from 'react';
import { Navbar, PizzaOffers } from '../components';
import Hero from '../components/Home/Hero';
import NewArrivel from '../components/Home/NewArrivel';
import styled from 'styled-components';
import DesertOffers from '../components/Products/DesertOffers';
import Footer from '../components/Footer/Footer';

const Home = () => {
  return (
    <>
      <HomeContainer>
        <Hero />
        <PizzaOffers />
        <NewArrivel />
        <DesertOffers />
        <Footer />
      </HomeContainer>
    </>
  );
};

const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
`;

export default Home;
