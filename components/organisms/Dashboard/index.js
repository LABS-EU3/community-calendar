import React from 'react';

import NavBarDashboard from '../../molecules/NavbarDashboard';
import * as Styles from './index.styled';

const Dashboard = () => (
  <>
    <NavBarDashboard />
    <Styles.BorderDiv>
      <Styles.TopSectionDiv>
        <div className="imgHolder" />
        <Styles.UserBioDiv>
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
          <Styles.BioDiv>
            <h4>Bio:</h4>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
            non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </Styles.BioDiv>
        </Styles.UserBioDiv>
        <Styles.InterestDiv>
          <h4>Interests:</h4>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua.
        </Styles.InterestDiv>
      </Styles.TopSectionDiv>
      <h2>Events interested</h2>
      <Styles.MidSectionDiv>
        <p>Starting soon</p>
        <Styles.Card1Div>
          <h3>Event Title</h3>
          <h4>Accra</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <h6>evensi.com</h6>
        </Styles.Card1Div>
        <Styles.Card2Div>
          <h3>Event Title</h3>
          <h4>Accra</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <h6>evensi.com</h6>
        </Styles.Card2Div>
        <Styles.Card3Div>
          <h3>Event Title</h3>
          <h4>Accra</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <h6>evensi.com</h6>
        </Styles.Card3Div>
      </Styles.MidSectionDiv>
      <Styles.BottomSectionDiv>
        <Styles.EventsDiv>
          <h4>Future events</h4>
          <h2>No future events!</h2>
        </Styles.EventsDiv>
        <h5>Add events</h5>
      </Styles.BottomSectionDiv>
    </Styles.BorderDiv>
  </>
);

export default Dashboard;
