import React from 'react';
import s from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./Myposts/MyPostsContainer";

const Profile = () => {

    return (
        <div className={s.content}>
            <div className={s.profileArea}>
                <div className={s.image}>
                    <img
                        src='https://s3.amazonaws.com/american-rivers-website/wp-content/uploads/2016/03/24215437/SmithRiver-MT-Credit-Scott-Bosse-header.jpg'
                        alt=''/>
                </div>
                <div>
                    <ProfileInfo/>
                </div>
                <div>
                    <MyPostsContainer />
                </div>
            </div>
        </div>
    )
}

export default Profile;