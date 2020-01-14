/* eslint-disable consistent-return */
import React from 'react';
import PropTypes from 'prop-types';

import Icon from '../../atoms/Icon';
import { EventCardDiv } from './index.styled';
import { colors } from '../../~reusables';

const EventCardMin = ({ toggle, el, setDescription }) => {
  // eslint-disable-next-line no-param-reassign
  const getDescription = async (link, id) => {
    try {
      const config = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          link,
          eventId: id,
        }),
      };

      fetch('https://comcalstaging.herokuapp.com/api/v1/event/fetch-description', config)
        .then(res => res.json())
        .then(data => {
          setDescription(data);
        })
        .catch(() => 'Description unavailable');
    } catch (error) {
      return ('Description unavailable');
    }
  };

  const source = el.source === 'eventbrite' ? 'EventBrite' : 'ComCal';
  const dateTimeArr = el.eventDate.split('+')[0].split(',');
  return (
    <EventCardDiv>
      <div id="parent1">
        <div><p>{dateTimeArr[2]}</p></div>
        <div id="sibling1">
          <h6>{el.name.includes('-') ? el.name.split('-')[0] : el.name}</h6>
          <p>{`Source: ${source}`}</p>
          {el.location && <p>{el.location.split('•')[1]}</p>}
        </div>
      </div>
      <span id="toggle">
        <i onClick={() => { toggle(); getDescription(el.scrapedEventLink, el.scrapedEventId); }} className=" fas fa-chevron-down" />
        <Icon type="star" color={colors.primary} />
      </span>
    </EventCardDiv>
  );
};

EventCardMin.propTypes = {
  toggle: PropTypes.func.isRequired,
  setDescription: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  el: PropTypes.object.isRequired,
};

export default EventCardMin;
