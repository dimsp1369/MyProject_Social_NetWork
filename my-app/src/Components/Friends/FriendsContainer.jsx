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
import * as axios from "axios";


class FriendsContainer extends React.Component {


    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setFriends(response.data.items)
                this.props.setTotalPages(response.data.totalCount)
            })
    }

    // onPageChanged(pageNumber) {
    //     console.log(pageNumber)
    //     this.props.setCurrentPage(pageNumber)
    //     axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
    //         .then(response => {
    //             this.props.setFriends(response.data.items)
    //         })
    // }
    //
    // changePage(pageNumber, move) {
    //     // console.log(pageNumber)
    //     // console.log(move)
    //     this.props.setCurrentPageButton(pageNumber, move)
    //     axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber + move}&count=${this.props.pageSize}`)
    //         .then(response => {
    //             this.props.setFriends(response.data.items)
    //         })
    // }

    // onPageChanged = (pageNumber) => {
    //     this.props.setCurrentPage(pageNumber)
    //     axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
    //         .then(response => {
    //             this.props.setFriends(response.data.items)
    //         })
    // }

    render() {
        return (
            <Friends friends={this.props.friends} updateFollowedStatus={this.props.updateFollowedStatus}
                     totalFriendsCount={this.props.totalFriendsCount} pageSize={this.props.pageSize}
                     currentPage={this.props.currentPage} setFriends={this.props.setFriends}
                     onPageChanged={this.onPageChanged} changePage={this.changePage}
                     setCurrentPage={this.props.setCurrentPage} setCurrentPageButton={this.props.setCurrentPageButton}/>

        )
    }
}

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
        setCurrentPage: (pageNumber) => dispatch(setCurrentPageAC(pageNumber)),
        setTotalPages: (pagesData) => dispatch(setTotalCountPAgesAC(pagesData)),
        setCurrentPageButton: (pagesData, move) => dispatch(setCurrentPageButtonAC(pagesData, move))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(FriendsContainer)
