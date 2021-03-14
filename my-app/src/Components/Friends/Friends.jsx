import React from 'react';
import s from './Friends.module.css'
import Friend from "./Friend/Friend";
import PaginationBar from "./PaginationBar";


const Friends = (props) => {


    return (
        <div className={s.frList}>
            {props.friends.map(friends => <Friend key={Math.random()} friends={friends}
                                                  updateFollowedStatus={props.updateFollowedStatus}/>)}
            <PaginationBar totalFriendsCount={props.totalFriendsCount} pageSize={props.pageSize}
                           currentPage={props.currentPage} setFriends={props.setFriends}
                           onPageChanged={props.onPageChanged} changePage={props.changePage}
                           setCurrentPage={props.setCurrentPage} setCurrentPageButton={props.setCurrentPageButton}/>
        </div>
    )

}

export default Friends;