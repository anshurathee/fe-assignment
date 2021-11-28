import React from 'react'

import style from "./Loader.module.css";
import loaderImg from "assets/images/loader.svg";

function Loader(props) {
  return (
    <div className={style.loaderContainer} style={props.style}>
      <img src={loaderImg} alt="loader" className={style.loaderImg} />
    </div>
  )
}

export default Loader
