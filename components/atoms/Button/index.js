import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

export const Button = styled.button`
    background: ${props => props.background};
    border: none;
    border-radius: 5rem;
    color: ${props => props.fontColor || 'white'};
    padding: .75rem 1.5rem;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    cursor: pointer;
    font-family: 'Montserrat', sans-serif;

    ${props => props.xLarge && css`
      font-weight: 600;
      font-size: 1.5rem;
      width: 25rem;
    `};

    ${props => props.large && css`
      font-weight: 600;
      font-size: 2rem;
    `};

    ${props => props.medium && css`
      font-weight: 500;
      font-size: 1.75rem;
    `};

    ${props => props.small && css`
      font-weight: 400;
      font-size: 1.5rem;
    `};
  `;

Button.propTypes = {
  fontColor: PropTypes.string,
};
