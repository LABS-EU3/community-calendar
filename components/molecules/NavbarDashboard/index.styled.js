import styled from 'styled-components';

export const NavBarDiv = styled.div`
  width: 70%;
  margin: 0 auto;
  padding: 1rem 2.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  nav {
    display: flex;
    justify-content: space-between;
    padding: 2 rem;
    a{
      padding-right: 2rem;
      Button{
        background-color: #9c0d38;
      }
    }
    .imgHolder {
      width: 3rem;
      height: 3rem;
      border-radius: 50%;
      background-color: gray;
    }
    .bell {
    font-size: 1.6rem;
    padding: .5rem  1rem 0 0;
    }
    .down{
    font-size: .5rem;
    padding: 1.5rem 0 0 .5rem;
    }
  }
`;
