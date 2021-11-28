import React from 'react';
import { Link } from 'react-router-dom';

import hamIc from 'assets/images/hamIc.svg';
import logo from 'assets/images/smarkets-logo.svg';

import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <header className={styles.navContainer}>
      <div className={styles.navLeft}>
        <img src={hamIc} alt="ham icon" />
        <Link to="/">
          <img className={styles.logo} src={logo} alt="smarkets logo" />
        </Link>
      </div>
      <div>
        <button className={styles.btnLogin}>LOG IN</button>
        <button className={styles.btnSignup}>CREATE ACCOUNT</button>
      </div>
    </header>
  )
}
