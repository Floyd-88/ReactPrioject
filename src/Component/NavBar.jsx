import React from 'react';
import s from "./NavBar.module.css";

const NavBar = () => {
    return <nav className={s.nav}>
    <div className={s.navLink}>
      <a href="#">Profile</a>
    </div>
    <div className={s.navLink}>
      <a href="#">Message</a>
    </div>
    <div className={s.navLink}>
      <a href="#">Newa</a>
    </div>
    <div className={s.navLink}>
      <a href="#">Music</a>
    </div>
    <div className={s.navLink}>
      <a href="#">Settings</a>
    </div>
  </nav>
}

export default NavBar;