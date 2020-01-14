import styled from 'styled-components';

import { colors } from '../../~reusables';

export const EventCardDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 0 0 1rem;
  padding: 1.5rem 3rem 1rem;
  border: .05rem solid ${colors.tertiary};
  border-radius: 1.5rem;
  div#parent1 {
    display: flex;
  }
  div#sibling1 {
    margin-left: 1rem;
  }
  p {
    margin: .3rem 0;
  }
  span#toggle {
    width: 7.5%;
    height: auto;
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    i {
      color: ${colors.primary};
    }
  }
`;

export const EventCardAltDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 0 1rem;
  padding: 1.5rem 3rem 1rem;
  border: .05rem solid ${colors.tertiary};
  border-radius: 1.5rem;
  div#topbar {
    width: 100%;
    display: flex;
    justify-content: space-between;
    div#datetime {
      width: 40%;
      display: flex;
      justify-content: space-between;
    }
    span#toggle {
      width: 7.5%;
      height: auto;
      display: flex;
      justify-content: space-between;
      cursor: pointer;
      i {
        color: ${colors.primary};
      }
    }
  }
  div#host {
    display: flex;
    align-items: center;
    margin-top: 1rem;
    div#imgHolder {
      width: 5rem;
      height: 5rem;
      border-radius: 50%;
      background-color: gray;
    }
    div#details {
      margin-left: .5rem;
      display: flex;
      flex-direction: column;
      span:nth-child(2) {
        font-weight: bold;
      }
    }
  }
  div#actionIcons {
    width: 90%;
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
    span {
      display: flex;
      align-items: center;
      p {
        margin-left: .5rem;
      }
    }
  }
  div#description {
    margin-top: 1rem;
    word-wrap: break-word;
    p {
      margin: .8rem 0;
    }
    button {
      margin: 0 auto;
    }
  }
  div#button {
    margin: 0 auto;
    button {
      font-size: 1.6rem;
    }
  }
`;
