import React from 'react';
import s from './Friend.module.css'
import {NavLink} from "react-router-dom";
import userPhoto from '../../../assets/imges/user_no_photo_300x300.png'


const Friend = ({friends, updateFollowedStatus}) => {
    // setFriends([])
    let path = '/friends/' + friends.id
    return (
        <div className={s.usersWrap}>
            <div className={s.user}>
                <div>
                    <NavLink to={path} activeClassName={s.active}>
                        <img src={friends.photos.small !== null ? friends.photos.small : userPhoto} alt="avatar"/>
                    </NavLink>
                    <div>
                        <button
                            onClick={() => updateFollowedStatus(friends.id)}>{friends.followed ? 'follow' : 'unfollow'}</button>
                    </div>
                </div>
                <div className={s.userDescription}>
                    <div>
                        <span className={s.userName}>{friends.name}</span>
                        <span>{friends.status}</span>
                        <span>{"friends.city"}</span>
                        <span>{"friends.country"}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Friend;