import React from 'react';
import s from '../../Profile.module.css'
import userNoPhoto from '../../../../assets/imges/user_no_photo_300x300.png'

const Avatar = (props) => {
    return <div>
        <div className={s.avatar}>
            <img src={props.userAvatar.photos.large !== null ? props.userAvatar.photos.large : userNoPhoto} alt="UserAvatar"/>
        </div>
    </div>

}

export default Avatar;