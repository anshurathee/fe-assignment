import React from 'react';
import { Link } from "react-router-dom";

import style from './NotFound.module.css';

export default function NotFound () {
  return (
    <div className={style.notFound}>
      <h1>404</h1>
      <span>You seem lost. Click <Link to="/">here</Link></span>
    </div>
  )
}
