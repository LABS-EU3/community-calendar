import React from 'react';
import Link from 'next/link';

import { Icon } from 'antd';
import { NavBarDiv } from './index.styled';
import { Logo } from '../../atoms/Logo';
import { Button } from '../../atoms/Button';

const NavBarDashboard = () => (
  <NavBarDiv>
    <Logo />
    <nav>
      <Link href="/">
        <a>
          <Button>
              Home
          </Button>
        </a>
      </Link>
      <Icon type="bell" className="bell" />
      <div className="imgHolder" />
      <Icon type="down" className="down" />
    </nav>
  </NavBarDiv>
);

export default NavBarDashboard;
