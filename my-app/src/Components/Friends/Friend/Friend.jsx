import React from 'react';
import s from './Friend.module.css'
import {NavLink} from "react-router-dom";


const Friend = (props) => {
    let path = '/friends/' + props.id
    return (
        <div className={s.item}>
            <NavLink to={path} activeClassName={s.active}> <img
                src="http://icons.iconarchive.com/icons/diversity-avatars/avatars/1024/batman-icon.png"
                alt=""/> {props.name}</NavLink>
        </div>
    )

}

export default Friend;