import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./Myposts/MyPostsContainer";
import profileHeadIMG from '../../assets/imges/Profile_Head.jpg'
import s from './Profile.module.css'
import Preloader from "../common/Preloader/Preloader";

const Profile = (props) => {

    return <>
        {!props.userProfile ? <Preloader/> :
            <div className={s.wrapper}>
                <img className={s.prof_head_img} src={profileHeadIMG} alt='Profile_Head'/>
                <h3 style={{textTransform: "capitalize"}}>{props.userProfile.fullName}</h3>
                <hr/>
                <div className={s.profile_Container}>
                    <div className={s.prof_Info}>
                        <ProfileInfo userProfile={props.userProfile}/>
                    </div>
                    <div className={s.prof_Posts}>
                        <MyPostsContainer/> {/*MyPost_Component*/}
                    </div>
                </div>
            </div>
        }
    </>
}

export default Profile;