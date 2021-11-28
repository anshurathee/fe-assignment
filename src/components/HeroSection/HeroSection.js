import React from 'react';

import style from './HeroSection.module.css';

const HeroSection = props => {
  return (
    <div
      style={{ backgroundImage: `url(${props.bgImg})` }}
      className={style.heroContainer}
    >
      <h2 className={style.heroTitle}>{props.title}</h2>
      <p className={style.heroDesc}>{props.description}</p>
    </div>
  );
}

// function isEqual(p, n) {
//   return Boolean(p.bgImg !== n.bgImg || p.title !== n.title || p.description !== n.description);
// }

export default React.memo(HeroSection);