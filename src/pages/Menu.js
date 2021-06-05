import React from 'react';
import styled from 'styled-components';
import { PizzaMenu } from '../components';
import Footer from '../components/Footer/Footer';
import DesertMenu from '../components/Products/DesertMenu';

const Menu = () => {
  return (
    <>
      <MenuContainer>
        <PizzaMenu />
        <DesertMenu />
        <Footer />
      </MenuContainer>
    </>
  );
};

const MenuContainer = styled.main`
  overflow-x: hidden;
`;

export default Menu;
