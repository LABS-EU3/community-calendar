/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';

import { NavBarDiv } from './index.styled';
import { Logo } from '../../atoms/Logo';
import { Button } from '../../atoms/Button';
import { colors } from '../../~reusables';

const NavBar = ({ alt, notLoggedIn, notSignedIn }) => (
  <NavBarDiv>
    <Logo />
    <nav>
      {alt && (
        <Link href="/create-event">
          <a>
            <Button medium background={colors.primary}>
              Create Event
            </Button>
          </a>
        </Link>
      )}
      {(notLoggedIn || notSignedIn) && (
        <Link href="/">
          <a>
            <Button medium background={colors.primary}>
              Home
            </Button>
          </a>
        </Link>
      )}
      {(alt || notSignedIn) && (
        <Link href="/signin">
          <a>
            <Button medium background="inherit" fontColor={alt ? colors.white : colors.primary}>
              Sign in
            </Button>
          </a>
        </Link>
      )}
      {(alt || notLoggedIn) && (
        <Link href="/signup">
          <a>
            <Button medium background="inherit" fontColor={alt ? colors.white : colors.primary}>
              Sign up
            </Button>
          </a>
        </Link>
      )}
    </nav>
  </NavBarDiv>
);

NavBar.defaultProps = {
  alt: false,
  notLoggedIn: false,
  notSignedIn: false,
};

NavBar.propTypes = {
  alt: PropTypes.bool,
  notLoggedIn: PropTypes.bool,
  notSignedIn: PropTypes.bool,
};

export default NavBar;
