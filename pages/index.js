import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Head from 'next/head';
import PropTypes from 'prop-types';
import axios from 'axios';

import GlobalStyle from '../styles/GlobalStyles';
import App from '../components/layout/App';

import { doSignUp } from '../redux/actions/signUp';
import { doFetchEvent } from '../redux/actions/events';

// eslint-disable-next-line no-shadow
const Home = ({ city, country, doFetchEvent }) => {
  useEffect(() => {
    if (city !== undefined) {
      localStorage.setItem('user_city', city);
    }
    if (country !== undefined) {
      localStorage.setItem('user_country', country);
    }
    const scity = city === undefined ? localStorage.getItem('user_city') : city;
    const scountry = country === undefined ? localStorage.getItem('user_country') : country;
    doFetchEvent(scountry, scity, 'all');
  }, []);

  return (
    <>
      <GlobalStyle />
      <Head>
        {/* Stylesheet links */}
        <link href="https://fonts.googleapis.com/css?family=Montserrat|Playfair+Display&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css" integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay" crossOrigin="anonymous" />
      </Head>
      <App />
    </>
  );
};

// eslint-disable-next-line no-unused-vars
Home.getInitialProps = async ctx => {
  let city;
  let country;
  await axios.get('https://ipapi.co/json/')
    .then(({ data }) => {
      if (data) {
        city = data.city.toLowerCase().replace(' ', '-');
        country = data.country_name.toLowerCase().replace(' ', '-');
      } else throw new Error('an error occurred');
    })
    // eslint-disable-next-line no-console
    .catch(error => console.log(error));
  return { city, country };
};

Home.propTypes = {
  city: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  doFetchEvent: PropTypes.func.isRequired,
};

export default connect(
  state => state,
  { doSignUp, doFetchEvent },
)(Home);
