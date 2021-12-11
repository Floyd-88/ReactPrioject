import React from 'react';

const MainContent = () => {
    return <div className="mainContent">
    <div className="fone">
    <img src="https://s1.1zoom.ru/b5050/975/359653-admin_2560x1440.jpg" />
    </div>

    <div className="avaProfile">
      <div className="ava">
        <img src="https://sun9-69.userapi.com/impg/7GleHWdfHiLIlV-GxPx5cyGBYAhcCywPu1_gDg/hFCPgHBGGno.jpg?size=1080x1080&quality=96&sign=a98c39460439a1f18d7a2db39ebed4d2&c_uniq_tag=o4vfwNGjSuhMphSrNgI4Vhhv1Z5RmX5q8NM0ZMj_nSI&type=album" />
      </div>

      <div className="profile">
        <p className="myName">Мое Имя</p>
        <p className="profileDate">День рождения: 27 ноября</p>
        <p className="profileDate">город: Ставрополь</p>
        <p className="profileDate">Образование: СевКавГТУ</p>
        <p className="profileDate">Веб-сайт:</p>

      </div>
    </div>
    <div className="myPost">
      <p className="posts">My post</p>
    </div>
    <div className="newPost">
      <textarea></textarea>
      <input className="input" type="submit" value="Отправить" />
    </div>
    <div className="post">
      <p>Сегодня прекрасный день!!!!</p>
    </div>
    <div className="post">
      <p>Как настроения?!!!</p>
    </div>
  </div>
}

export default MainContent;