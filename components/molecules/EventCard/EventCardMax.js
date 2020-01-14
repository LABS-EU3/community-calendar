/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import fetch from 'isomorphic-fetch';

import { Button } from '../../atoms/Button';
import Icon from '../../atoms/Icon';
import { EventCardAltDiv } from './index.styled';
import { colors } from '../../~reusables';

const EventCardMax = ({ toggle, el, description }) => {
  const dateTimeArr = el.eventDate.split('+')[0].split(',');

  function pushLink(e, link) {
    e.preventDefault();
    window.location.href = link;
  }

  return (
    <EventCardAltDiv>
      <div id="topbar">
        <div id="datetime">
          <span>{dateTimeArr[2]}</span>
          <span>{`${dateTimeArr[0]}, ${dateTimeArr[1]}, ${new Date().getFullYear()}`}</span>
        </div>
        <span id="toggle">
          <i onClick={() => { toggle(); }} className=" fas fa-chevron-up" />
          <Icon type="star" color={colors.primary} />
        </span>
      </div>
      <h6>{el.name.includes('-') ? el.name.split('-')[1] : el.name}</h6>
      <div id="host">
        <div id="imgHolder">
          {/* <img src={el.imageUrl} alt="star" /> */}
        </div>
        <div id="details">
          <span>Host</span>
          <span>Josemaria and 3 others</span>
        </div>
      </div>
      <div id="actionIcons">
        <span>
          <Icon type="environment" color={colors.primary} />
          {el.location && <p>{el.location.split('•')[1]}</p>}
        </span>
        <span>
          <Icon type="idcard" color={colors.primary} />
          <p>2.3k going</p>
        </span>
        <span>
          <Icon type="idcard" color={colors.primary} />
          <p>{el.price ? el.price : 'Not stated'}</p>
        </span>
        <span>
          <Icon type="idcard" color={colors.primary} />
          <p>Share</p>
        </span>
      </div>
      <div id="description">
        <p><strong>Description</strong></p>
        <p>
          {description}
        </p>
      </div>
      <div onClick={(e) => pushLink(e, el.scrapedEventLink)} id="button">
        <Button medium background={colors.primary}>Attend Event</Button>
      </div>
    </EventCardAltDiv>
  );
};

EventCardMax.propTypes = {
  toggle: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  el: PropTypes.object.isRequired,
  description: PropTypes.string.isRequired,
};

export default EventCardMax;
