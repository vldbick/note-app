import React from 'react'
import css from "./Tab.module.css"
import { NavLink } from 'react-router-dom';

const Tab = (props) => {
    return (
        <NavLink to={props.to} className={({ isActive }) =>
            isActive ? css.contLeftActive : null}>
            <div className={css.contLeft}>
                <div>
                    <img src={props.source} alt="" />
                </div>
            </div>
        </NavLink>

    );
}

export default Tab;