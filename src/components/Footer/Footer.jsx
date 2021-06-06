import React from 'react';
import styled from 'styled-components';
import GoogleMapComponent from '../GoogleMap/GoogleMapComponent';
const Footer = () => {
  return (
    <>
      <FooterContainer>
        <FooterContent>
          <Col1>
            <ColH3>Locations</ColH3>

            <ColP>Location1:</ColP>
            <ColP>Via Giunio Silano / 18</ColP>
            <ColP>Location2:</ColP>
            <ColP>Via Spartaco Luigi / 24</ColP>
          </Col1>
          <Col2>
            <ColH3>Opening Hours</ColH3>

            <ColP>Monday --- 9:00 - 22:00</ColP>
            <ColP>Tuesday --- 9:00 - 22:00</ColP>
            <ColP>Wednesday --- 9:00 - 22:00</ColP>
            <ColP>Thursday --- 9:00 - 22:00</ColP>
            <ColP>Friday --- 9:00 - 22:00</ColP>
            <ColP>Saturday --- 9:00 - 22:00</ColP>
            <ColP>Sunday --- 9:00 - 22:00</ColP>
          </Col2>
          <Col3>
            <ColH3>Contacts</ColH3>
            <ColP>Phone:</ColP>
            <ColP>327 354 6668</ColP>
            <ColH3>Follow Us</ColH3>
            <ColP>327 354 6668</ColP>
          </Col3>
        </FooterContent>
      </FooterContainer>
      <GoogleMapComponent />
    </>
  );
};

const FooterContainer = styled.section`
  width: 100vw;
  background: black;
  padding: 6rem 0;
`;

const FooterContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 3rem;
  color: white;
  width: 1170px;
  max-width: 90%;
  margin: 0 auto;
  text-align: center;
  @media screen and (max-width: 820px) {
    text-align: center;
    flex-direction: column;
  }
`;

const Col1 = styled.div``;
const Col2 = styled.div``;
const Col3 = styled.div``;
const ColH3 = styled.h3`
  font-size: clamp(1.3rem, 2.5vw, 2rem);
  margin-bottom: 1rem;
  color: #f3a735;
`;
const ColP = styled.p`
  font-size: clamp(1.3rem, 2.5vw, 1.5rem);
`;

export default Footer;
