import React, { useState, useEffect } from 'react';

import HeroSection from 'components/HeroSection';
import EventCard from 'components/EventCard';
import Loader from 'components/Loader';
import { getRequest } from 'utils/network';
import HeroImg from 'assets/images/hero.webp';

const heroData = {
  title: 'Football',
  description: `Trade and bet on a variety of football betting markets, including those on the
  Premier League, Champions League, La Liga, Bundesliga and MLS.`,
  bgImg: HeroImg
};

export default function Home() {
  const [eventList, setEventList] = useState([]);

  function getDetails(idArray) {
    if (Array.isArray(idArray) && idArray.length > 0) {
      getRequest(`events/${idArray.join(',')}`)
        .then((result) => setEventList(result.events))
        .catch((error) => console.log('error', error));
    }
  }
  useEffect(() => {
    getRequest('popular/event_ids/sport/football')
      .then((result) => getDetails(result.popular_event_ids))
      .catch((error) => console.log('error', error));
  }, []);
  return (
    <React.Fragment>
      <HeroSection {...heroData} />
      {eventList.length > 0 ? (
        eventList.map((e) => <EventCard key={e.id} {...e} />)
      ) : (
        <Loader style={{ padding: '60px 0' }} />
      )}
    </React.Fragment>
  );
}
