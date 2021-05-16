import React from 'react';
import s from "./Header.module.css"
import logo from '../../assets/LOGO.jpg'
import {NavLink} from "react-router-dom";
import Preloader from "../common/Preloader/Preloader";
import userNoPhoto from '../../assets/imges/user_no_photo_300x300.png'

const Header = (props) => {
    return <>
        {!props.currentAuthUser ? <Preloader/> :
            <header>
                <div className={s.wrapper}>
                    <div>
                        <img src={logo} alt='Logo'/>
                    </div>
                    <div className={s.head_title}>
                        <h1>FishingManLife</h1>
                    </div>
                    <div className={s.head_Login}>
                        {props.isAuth ?
                            <div className={s.inLog}>
                                <NavLink to='/profile'>
                                    <img
                                        src={props.currentAuthUser.photos.small !== null ? props.currentAuthUser.photos.small : userNoPhoto}
                                        alt="CurrentUserAvatar"/>
                                </NavLink>
                                <NavLink to='/settings'> <span>{props.login}</span> </NavLink>
                                <span>Log Out</span>

                            </div>
                            : <NavLink to='/login'>Log in</NavLink>}
                    </div>
                </div>
            </header>
        }
    </>
}

export default Header;