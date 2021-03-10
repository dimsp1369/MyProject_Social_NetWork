import React from 'react';
import {connect} from "react-redux";
import Friends from "./Friends";
import {followedStatus, setFriendsAC} from "../../Redux/friendsReducer";


const mapStateToProps = (state) => {
    return {
        friends: state.friendsPage.friends
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateFollowedStatus: (FriendId) => dispatch(followedStatus(FriendId)),
        setFriends: (friendsData) => dispatch(setFriendsAC(friendsData))
    }
}


const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends)

export default FriendsContainer;