import React from 'react'
import css from './LeftMenu.module.css'
import Tab from './tab/Tab';

const LeftMenu = () => {
    return (
        <div className={css.menu}>
            <div className={css.burger}><button><img src="/img/menu-burger.png" alt="" /></button></div>
            <Tab source="/img/home.png" to="/"></Tab>
            <Tab source="/img/download.png" to="/archive"></Tab>
        </div>
    );
}

export default LeftMenu;