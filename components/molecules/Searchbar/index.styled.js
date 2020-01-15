import styled from 'styled-components';

import { colors } from '../../~reusables';

export const SearchBarDiv = styled.div`
  width: 63rem;
  height: 6rem;
  margin: 0 auto;
  padding: .5rem 1.25rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  position: absolute;
  top: -3rem;
  left: 20%;
  right: 20%;
  transition: box-shadow 2s;
  border: .05rem solid ${colors.tertiary};
  border-radius: 7rem;
  input::placeholder {
    font-size: 1.6rem;
  }
  :hover {
    box-shadow: .5rem .5rem 1rem .3rem rgba(167, 167, 167, 1);
    border: none;
  }
  div {
    display: flex;
    align-items: center;
    i {
    font-size: 1.6rem;
    }
  }
`;
