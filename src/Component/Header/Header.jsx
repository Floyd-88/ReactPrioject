import React from 'react';
import s from "./Header.module.css";

const Header = () => {
    return <header className={s.header}>
    <div className={s.headerLogo}>
        <img className={s.imgLogo} src="https://sklad.freeimg.ru/rsynced_images/animal-2028258_1280.png" />
    </div>
    <div className={s.nameNet}>
    <p className={s.nameNetText}>racconnet</p>
    </div>
  </header>
}


export default Header;