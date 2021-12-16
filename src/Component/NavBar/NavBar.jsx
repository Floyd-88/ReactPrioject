import React from 'react';
import { NavLink } from 'react-router-dom';
import s from "./NavBar.module.css";

const NavBar = () => {
    return <nav className={s.nav}>
    <div className={s.navLink}>
      <NavLink to="/mainContent" className={nav => nav.isActive ? s.active : s.navLink}>Profile</NavLink>
    </div>
    <div className={s.navLink}>
      <NavLink to="/dialogs" className={nav => nav.isActive ? s.active : s.navLink}>Message</NavLink>
    </div>
    <div className={s.navLink}>
      <NavLink to="/news" className={nav => nav.isActive ? s.active : s.navLink}>News</NavLink>
    </div>
    <div className={s.navLink}>
      <NavLink to="/music" className={nav => nav.isActive ? s.active : s.navLink}>Music</NavLink>
    </div>
    <div className={s.navLink}>
      <NavLink to="/settings" className={nav => nav.isActive ? s.active : s.navLink}>Settings</NavLink>
    </div>
  </nav>
}

export default NavBar;