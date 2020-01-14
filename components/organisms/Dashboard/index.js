import React from 'react';
import styled from 'styled-components';
// import { useSelector } from 'react-redux';
// import GlobalStyle from '../../../styles/GlobalStyles';

import NavBarDashboard from '../../molecules/NavbarDashboard';

const Dashboard = () => {
  // const user = useSelector(state => state);
  // const userInfo = user.login.user;

  return (
    <>
      <NavBarDashboard />
      <BorderDiv>
        <TopSectionDiv>
          <div className="imgHolder" />
          <UserBioDiv>
            <h2>
              {/* {`${userInfo.user.first_name} ${userInfo.user.last_name}`} */}
            </h2>
            <div className="datelocation">
              <p>
                <strong>Location:</strong>
                {' '}
                <br />
                            Accra, Ghana
              </p>
              <date>
                <strong>Member since:</strong>
                {' '}
                <br />
                            Jan 20, 2020
              </date>
            </div>
            <BioDiv>
              <h4>Bio:</h4>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                            non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </BioDiv>
          </UserBioDiv>
          <InterestDiv>
            <h4>Interests:</h4>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                        ut labore et dolore magna aliqua.
          </InterestDiv>
        </TopSectionDiv>
        <h2>Events interested</h2>
        <MidSectionDiv>
          <p>Starting soon</p>
          <Card1Div>
            <h3>Event Title</h3>
            <h4>Accra</h4>
            <p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua.
            </p>
            <h6>evensi.com</h6>
          </Card1Div>
          <Card2Div>
            <h3>Event Title</h3>
            <h4>Accra</h4>
            <p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua.
            </p>
            <h6>evensi.com</h6>
          </Card2Div>
          <Card3Div>
            <h3>Event Title</h3>
            <h4>Accra</h4>
            <p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua.
            </p>
            <h6>evensi.com</h6>
          </Card3Div>
        </MidSectionDiv>
        <BottomSectionDiv>
          <EventsDiv>
            <h4>Future events</h4>
            <h2>No future events!</h2>
          </EventsDiv>
          <h5>Add events</h5>
        </BottomSectionDiv>
      </BorderDiv>
    </>
  );
};

export default Dashboard;

const BorderDiv = styled.div`
  width: 60vw;
  /* height: 90vh; */
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
const TopSectionDiv = styled.div`
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
const UserBioDiv = styled.div`
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
const BioDiv = styled.div`
  margin: 0 auto;
  margin-top: .5rem;
`;
const InterestDiv = styled.div`
  margin: 0 auto;
  margin-top: .5rem;
  width: 25%;
`;
const MidSectionDiv = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  p {
      padding: 6rem 2rem 0 2rem;
  }
`;
const Card1Div = styled.div`
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
const Card2Div = styled.div`
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
const Card3Div = styled.div`
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
const BottomSectionDiv = styled.div`
  margin: 0 auto;
  margin-top: 1rem;
  padding: 2rem;
  h5 {
      text-align: center;
      color: #CE5374;
  }
`;
const EventsDiv = styled.div`
  display: flex;
  flex-direction: row;
  h2{
      padding-left: 14rem;
      color: #888888;
  }
`;
