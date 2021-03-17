import React from 'react';
import s from '../Profile.module.css'
import Avatar from "./Avatar/Avatar";
import Description from "./Description/Description";
import ContactNavigation from "./ContactNavigation";


const ProfileInfo = (props) => {
    return <div>
        <div>
            <div>
                <Avatar userAvatar={props.userProfile}/>
            </div>
            <div className={s.prof_contacts}>
                <ContactNavigation userContactInfo={props.userProfile.contacts}/>
            </div>
            <div>
                <Description userProfile={props.userProfile}/>
            </div>
        </div>
    </div>
}

export default ProfileInfo;