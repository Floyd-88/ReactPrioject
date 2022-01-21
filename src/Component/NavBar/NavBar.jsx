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
    <div className={s.navLinkFrends}>
      <NavLink to="/users" className={navFrends => navFrends.isActive ? s.activeFrends :s.navLinkFrends}>Frends</NavLink>
      <img src='https://sun9-69.userapi.com/impg/7GleHWdfHiLIlV-GxPx5cyGBYAhcCywPu1_gDg/hFCPgHBGGno.jpg?size=1080x1080&quality=96&sign=a98c39460439a1f18d7a2db39ebed4d2&c_uniq_tag=o4vfwNGjSuhMphSrNgI4Vhhv1Z5RmX5q8NM0ZMj_nSI&type=album' />
      <img src='https://sun9-69.userapi.com/impg/7GleHWdfHiLIlV-GxPx5cyGBYAhcCywPu1_gDg/hFCPgHBGGno.jpg?size=1080x1080&quality=96&sign=a98c39460439a1f18d7a2db39ebed4d2&c_uniq_tag=o4vfwNGjSuhMphSrNgI4Vhhv1Z5RmX5q8NM0ZMj_nSI&type=album' />
      <img src='https://sun9-69.userapi.com/impg/7GleHWdfHiLIlV-GxPx5cyGBYAhcCywPu1_gDg/hFCPgHBGGno.jpg?size=1080x1080&quality=96&sign=a98c39460439a1f18d7a2db39ebed4d2&c_uniq_tag=o4vfwNGjSuhMphSrNgI4Vhhv1Z5RmX5q8NM0ZMj_nSI&type=album' />    
    </div>
  </nav>
}

export default NavBar;