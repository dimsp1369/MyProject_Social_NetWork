import React from 'react';
import s from './Friends.module.css'
import Friend from "./Friend/Friend";
import * as axios from 'axios'


const Friends = (props) => {

    if (props.friends.length === 0) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                props.setFriends(response.data.items)
            })
    }

    const friendsElement = props.friends.map(friends => <Friend key={Math.random()} friends={friends}
                                                                updateFollowedStatus={props.updateFollowedStatus}/>);


    return (
        <div className={s.frList}>
            {friendsElement}
        </div>
    )

}

export default Friends;