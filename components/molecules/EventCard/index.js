import React, { useState } from 'react';
import PropTypes from 'prop-types';

import EventCardMin from './EventCardMin';
import EventCardMax from './EventCardMax';

const EventCard = ({ el }) => {
  const [isToggled, setIsToggled] = useState(false);
  const [description, setDescription] = useState('');

  const toggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    isToggled === true ? <EventCardMax description={description} toggle={toggle} el={el} /> : <EventCardMin setDescription={setDescription} toggle={toggle} el={el} />
  );
};

EventCard.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  el: PropTypes.object.isRequired,
};

export default EventCard;
