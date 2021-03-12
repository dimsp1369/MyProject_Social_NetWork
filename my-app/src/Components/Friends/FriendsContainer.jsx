import React from 'react';
import {connect} from "react-redux";
import Friends from "./Friends";
import {
    followedStatus,
    setCurrentPageAC,
    setCurrentPageButtonAC,
    setFriendsAC,
    setTotalCountPAgesAC
} from "../../Redux/friendsReducer";
import FriendsC from "./FriendsC";


const mapStateToProps = (state) => {
    return {
        friends: state.friendsPage.friends,
        pageSize: state.friendsPage.pageSize,
        totalFriendsCount: state.friendsPage.totalFriendsCount,
        currentPage: state.friendsPage.currentPage,
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        updateFollowedStatus: (FriendId) => dispatch(followedStatus(FriendId)),
        setFriends: (friendsData) => dispatch(setFriendsAC(friendsData)),
        setCurrentPage: (currentPage) => dispatch(setCurrentPageAC(currentPage)),
        setTotalPages: (pagesData) => dispatch(setTotalCountPAgesAC(pagesData)),
        setCurrentPageButton: (pagesData, move) => dispatch(setCurrentPageButtonAC(pagesData, move))
    }
}


const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(FriendsC)

export default FriendsContainer;