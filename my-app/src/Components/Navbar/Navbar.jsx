import React from 'react';
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";




const Navbar = (props) => {

    return <nav className={s.nav}>
        <div className={s.item}>
            <NavLink to='/profile' activeClassName={s.active}>Profile</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to='/contact' activeClassName={s.active}>Contacts</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to='/news' activeClassName={s.active}>News</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to='/music' activeClassName={s.active}>Music</NavLink>
        </div>
        <div className={s.item}>
            <NavLink to='/settings' activeClassName={s.active}>Settings</NavLink>
        </div>
        <div className={s.item}>
            <div className={s.itemF}>
                <NavLink to='/friends' activeClassName={s.active}>Friends</NavLink>
                <div>

                </div>
            </div>
        </div>
    </nav>

}

export default Navbar;