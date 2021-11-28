import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';

import HeroSection from 'components/HeroSection';
import HeroImg from 'assets/images/hero.webp';
import Loader from 'components/Loader';
import { getRequest } from 'utils/network';
import { getReadableDate, getWelcomeText } from 'utils/date';
import { formatGameType } from 'utils/string';
import style from './GameDetail.module.css';

const heroData = {
  description: `Trade and bet on a variety of football betting markets, including those on the
  Premier League, Champions League, La Liga, Bundesliga and MLS.`,
  bgImg: HeroImg
};

export default function GameDetail() {
  const { id } = useParams();
  const location = useLocation();
  let state = location.state || {};
  const [eventData, setEventData] = useState(state);

  useEffect(() => {
    if (!eventData.name) {
      getDetails(id);
    }
  }, []);

  function getDetails(id) {
    getRequest(`events/${id}`)
      .then((result) => {
        setEventData(result.events[0]);
      })
      .catch((error) => console.log('error', error));
  }
  return (
    <React.Fragment>
      <HeroSection {...heroData} title={eventData?.name} />
      {eventData.name ? (
        <div className={style.gameDetails}>
          <h2>Event Data is</h2>
          <p>Name: {eventData?.name}</p>
          <p>Created: {getReadableDate(eventData?.created)}</p>
          <p>Modified: {getReadableDate(eventData?.modified)}</p>
          <p>Started: {getReadableDate(eventData?.start_datetime)}</p>
          <p>Type: {formatGameType(eventData.type)}</p>
        </div>
      ) : (
        <Loader style={{ padding: '60px 0' }} />
      )}
      <p>Have a Good {getWelcomeText()} :) </p>
    </React.Fragment>
  );
}
