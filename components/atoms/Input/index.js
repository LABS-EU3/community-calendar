import styled, { css } from 'styled-components';

const Input = styled.input`
  background: #F1EDED;
  border: 0.5px solid #716969;
  outline: none;
  padding: 0 1.5rem;
  height: 3.3rem;
  font-size: 1.6rem;

  ${props => props.search
    && css`
      outline: 0;
      border: 0;
      border-bottom: 0.5px solid #716969;
      border-radius: 0;
      background: none;
      height: 1.5rem;

      &:hover {
        box-shadow: none;
      }
    `}

  &[type=checkbox], &[type=radio] {
    display: inline-block;
    border-radius: 0;
    width: auto;
    height: auto;
    cursor: pointer;
    height: 1.2rem;
    width: 1.2rem;
    border: 1px solid black;

    :disabled {
      background-color: darkgrey;
    }
  }

  ${props => props.small
    && css`
      width: 6rem;
    `}

  ${props => props.medium
    && css`
      width: 14rem;
    `}

  ${props => props.large
    && css`
      width: 20rem;
    `}

  ${props => props.xLarge
  && css`
    width: 25rem;
    border-radius: 20px;
  `}

  ${props => props.disabled
    && css`
      background: #dddddd;
      cursor: not-allowed;
    `}
`;

export default Input;
