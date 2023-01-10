import React from 'react';
import { useLocation } from 'react-router-dom';

import './index.scss';

import DeliveryLocation from './DeliveryLocation';
import Logo from './Logo';
import Search from './Search';
import Account from './Account';
import Cart from './Cart';
import Orders from './Orders';

function Header() {
  const { pathname } = useLocation();
  if(pathname.includes('login')) return null;
  return (
    <header className="header">
      <div className="header__container">
        <Logo />
        <DeliveryLocation />
        <Search />
        <Account />
        <Orders />
        <Cart />
      </div>
    </header>
  );
}

export default Header;
