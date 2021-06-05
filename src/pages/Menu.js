import React from 'react';
import styled from 'styled-components';
import { PizzaMenu } from '../components';
import DesertMenu from '../components/Products/DesertMenu';

const Menu = () => {
  return (
    <>
      <MenuContainer>
        <PizzaMenu />
        <DesertMenu />
      </MenuContainer>
    </>
  );
};

const MenuContainer = styled.main``;

export default Menu;
