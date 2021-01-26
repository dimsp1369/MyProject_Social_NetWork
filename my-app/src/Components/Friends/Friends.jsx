import React from 'react';
import s from './Friends.module.css'
import Friend from "./Friend/Friend";


const Friends = (props) => {

    let friendsElement = props.state.friends.map(friends => <Friend name={friends.name} id={friends.id}/>);
    return (
        <div className={s.frList}>
            {friendsElement}
        </div>
    )

}

export default Friends;