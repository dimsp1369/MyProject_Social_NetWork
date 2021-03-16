import React from 'react';
import s from './Discription.module.css'


const Discription = (props) => {
    return <div className={s.discription}>
        <div>
            {JSON.stringify(props.userProfile.lookingForAJobDescription)}
        </div>
        {JSON.stringify(props.userProfile.aboutMe)}
        {/*<span>{props.userProfile.aboutMe}</span>*/}
    </div>

}

export default Discription;