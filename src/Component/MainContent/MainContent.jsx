import React from 'react';
import s from "./MainContent.module.css"
import Myposts from './Myposts/Myposts';

const MainContent = () => {
  return(
  <div>
    <div className={s.fone}>
      <img src="https://s1.1zoom.ru/b5050/975/359653-admin_2560x1440.jpg" />
    </div>

    <div className={s.avaProfile}>
      <div className={s.ava}>
        <img src="https://sun9-69.userapi.com/impg/7GleHWdfHiLIlV-GxPx5cyGBYAhcCywPu1_gDg/hFCPgHBGGno.jpg?size=1080x1080&quality=96&sign=a98c39460439a1f18d7a2db39ebed4d2&c_uniq_tag=o4vfwNGjSuhMphSrNgI4Vhhv1Z5RmX5q8NM0ZMj_nSI&type=album" />
      </div>

      <div className={s.profile}>
        <p className={s.myName}>Илья</p>
        <p className={s.profileDate}>День рождения: 27 ноября</p>
        <p className={s.profileDate}>город: Ставрополь</p>
        <p className={s.profileDate}>Образование: СевКавГТУ</p>
        <p className={s.profileDate}>Веб-сайт:</p>
      </div>
    </div>

    <Myposts />
  </div>)
}

export default MainContent;