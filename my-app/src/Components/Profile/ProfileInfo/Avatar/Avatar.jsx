import React from 'react';
import s from './Avatar.module.css'

const Avatar = (props) => {
    return <div className={s.avatar}>
        <div>
            <img src={props.userAvatar.photos.large} alt="UserAvatar"/>
        </div>
    </div>

}

export default Avatar;