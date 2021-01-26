import React from 'react';
import s from './ProfileInfo.module.css'
import Avatar from "./Avatar/Avatar";
import Discription from "./Discription/Discription";


const ProfileInfo = () => {
    return <div className={s.infoArea}>
        <div>
            <Avatar/>
        </div>
        <div>
            <Discription/>
        </div>
    </div>

}

export default ProfileInfo;