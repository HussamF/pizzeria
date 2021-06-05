import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  MenuItem,
  Menu,
  Typography,
} from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { Link, useLocation } from 'react-router-dom';
import { useGlobalContext } from '../../context';
import logo from '../../assets/logo.png';
import menu from '../../assets/pizza-1.svg';
import useStyles from './styles';

const PrimarySearchAppBar = () => {
  const { cart } = useGlobalContext();
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const classes = useStyles();
  const location = useLocation();

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => setMobileMoreAnchorEl(null);

  const mobileMenuId = 'primary-search-account-menu-mobile';

  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton
          component={Link}
          to='/cart'
          aria-label='Show cart items'
          color='inherit'
        >
          <Badge badgeContent={cart.total_items} color='secondary'>
            <ShoppingCart />
          </Badge>
        </IconButton>
        <p>Cart</p>
      </MenuItem>
    </Menu>
  );

  return (
    <>
      <AppBar position='fixed' className={classes.appBar} color='inherit'>
        <Toolbar>
          <Typography
            component={Link}
            to='/'
            variant='h6'
            className={classes.title}
            color='inherit'
          >
            <img
              src={logo}
              alt='commerce.js'
              height='25px'
              className={classes.image}
            />
            Home
          </Typography>

          <div className={classes.grow} />
          <Typography
            to='/menu'
            component={Link}
            style={{
              display: 'flex',
              alignItems: 'center',
              padding: '12px',
              textDecoration: 'none',
              gap: '5px',
              color: 'black',
            }}
          >
            Menu
            <img
              src={menu}
              alt='menu'
              height='24px'
              className={classes.image}
              style={{ marginBottom: '5px' }}
            />
          </Typography>
          {/* {location.pathname === '/' && ( */}
          <div className={classes.button}>
            <IconButton
              component={Link}
              to='/cart'
              aria-label='Show cart items'
              color='inherit'
            >
              <Badge badgeContent={cart.total_items} color='secondary'>
                <ShoppingCart />
              </Badge>
            </IconButton>
          </div>
          {/* )} */}
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </>
  );
};

export default PrimarySearchAppBar;
