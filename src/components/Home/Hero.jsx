import React from 'react';
import styled from 'styled-components';
import ImgBg from '../../assets/pizza-3.jpg';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <HeroContainer>
      <HeroContent>
        <HeroItems>
          <HeroH1>Greatest Pizza Ever</HeroH1>
          <HeroP>Ready in 60 seconds</HeroP>
          <HeroBtn to='/menu'>Place Order</HeroBtn>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  );
}

const HeroContainer = styled.section`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
    url(${ImgBg});
  background-position: center;
  background-size: cover;
  height: 100vh;
  width: 100vw;
`;

const HeroContent = styled.div`
  height: calc(100vh - 80px);
  max-height: 100%;
  width: 100vw;
  padding: 0rem calc((100vw - 1300px) / 2);
`;
const HeroItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  max-height: 100%;
  padding: 0 2rem;
  width: 650px;
  color: var(--white-color);
  text-transform: uppercase;
  line-height: 1;

  @media screen and (max-width: 650px) {
    width: 100%;
  }
`;
const HeroH1 = styled.h1`
  font-size: clamp(2.5rem, 10vw, 5rem);
  margin-bottom: 1rem;
  box-shadow: 5px 5px #f3a735;
  letter-spacing: 3px;
`;
const HeroP = styled.p`
  font-size: clamp(1.6rem, 2.5vw, 2.2rem);
  margin-bottom: 2rem;
`;
const HeroBtn = styled(Link)`
  font-size: var(--p-fontSize);
  border: none;
  padding: 1rem 4rem;
  border-radius: 10px;
  background: #fe2903;
  color: var(--white-color);
  transition: all 0.2s ease-out;
  text-decoration: none;
  &:hover {
    background: #ffc500;
  }
`;
export default Hero;
