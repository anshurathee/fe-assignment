import React from 'react';
import { useNavigate } from 'react-router-dom';

import style from './EventCard.module.css';

export default function EventCard(props) {
  const navigate = useNavigate();

  const openDetail = () => {
    navigate(`/football/${props.id}/${props.slug}`,{state: props})
  }

  const isLive = Boolean(props?.state === 'live');
  return (
      <section className={style.eventCard} onClick={openDetail}>
        <div className={style.leftData}>
          <div className={style.shortNameCol}>
            <span className={style.shortName}>{props?.short_name}</span>
            <span className={isLive ? style.live : style.ended}>
              {isLive ? 'LIVE' : 'EVENT ENDED'}
            </span>
          </div>
          <div className={style.nameCol}>
            <div className={style.name}>{props.name}</div>
            <p>{props.description}</p>
          </div>
        </div>
        <div>Started: {props.start_date}</div>
      </section>
  );
}
