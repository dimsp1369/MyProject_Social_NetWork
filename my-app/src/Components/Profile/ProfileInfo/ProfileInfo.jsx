import React from 'react';
import s from './ProfileInfo.module.css'
import Avatar from "./Avatar/Avatar";
import Discription from "./Discription/Discription";
import Preloader from "../../common/Preloader/Preloader";


const ProfileInfo = (props) => {
    return <>
        {!props.userProfile ? <Preloader/> : <div className={s.infoArea}>
            <h3 style={{textTransform: "capitalize"}}>{props.userProfile.fullName}</h3>
            <div>
                <div>
                    <Avatar userAvatar={props.userProfile}/>
                </div>
                <div>
                    <Discription userProfile={props.userProfile}/>
                </div>
            </div>
        </div>
        }
    </>
}

export default ProfileInfo;