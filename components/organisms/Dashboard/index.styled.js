import styled from 'styled-components';

export const BorderDiv = styled.div`
  width: 60vw;
  margin: 0 auto;
  background: #ffffff;
  border: 1px solid #cec8c8;
  box-sizing: border-box;
  border-radius: 0.5rem;
  padding-top: 2rem;
  line-height: 1rem;
  font-family: -apple-system, BlinkMacSystemFont, 'Montserrat', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  h2{
      padding-left: 2rem;
  }
`;
export const TopSectionDiv = styled.div`
  margin: 0 auto;
  margin-top: .1rem;
  padding-left: 2rem;
  display: flex;
  flex-direction: row;
  .imgHolder {
      width: 5rem;
      height: 5rem;
      border-radius: 50%;
      background-color: gray;
    }
`;
export const UserBioDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  padding-left: 5rem;
  .datelocation{
      display: flex;
      flex-direction: row;
      align-items: baseline;
      p{
          padding-right: 3rem;
      }
  }
`;
export const BioDiv = styled.div`
  margin: 0 auto;
  margin-top: .5rem;
`;
export const InterestDiv = styled.div`
  margin: 0 auto;
  margin-top: .5rem;
  width: 25%;
`;
export const MidSectionDiv = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  p {
      padding: 6rem 2rem 0 2rem;
  }
`;
export const Card1Div = styled.div`
  margin: 0 auto;
  margin-top: 1rem;
  border: 1px solid #cec8c8;
  margin-right: 1rem;
  box-sizing: border-box;
  border-radius: 0.5rem;
  h3, h4, p{
      padding: 0.5rem;
  }
  h6{
    padding-right: .5rem;
    text-align: right;
  }
`;
export const Card2Div = styled.div`
  margin: 0 auto;
  margin-top: 1rem;
  margin-right: 1rem;
  border: 1px solid #cec8c8;
  box-sizing: border-box;
  border-radius: 0.5rem;
  h3, h4, p{
      padding: 0.5rem;
  }
  h6{
    padding-right: .5rem;
    text-align: right;
  }
`;
export const Card3Div = styled.div`
  margin: 0 auto;
  margin-top: 1rem;
  margin-right: 1rem;
  border: 1px solid #cec8c8;
  box-sizing: border-box;
  border-radius: 0.5rem;
  h3, h4, p{
      padding: 0.5rem;
  }
  h6{
    padding-right: .5rem;
    text-align: right;
  }
`;
export const BottomSectionDiv = styled.div`
  margin: 0 auto;
  margin-top: 1rem;
  padding: 2rem;
  h5 {
      text-align: center;
      color: #CE5374;
  }
`;
export const EventsDiv = styled.div`
  display: flex;
  flex-direction: row;
  h2{
      padding-left: 14rem;
      color: #888888;
  }
`;
