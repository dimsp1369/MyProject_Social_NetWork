import React from 'react';
import {connect} from "react-redux";
import Friends from "./Friends";
import {
    followedStatus, setCurrentPage, setCurrentPageButton, setFriends, setToggleIsLoading, setTotalCountPages
} from "../../Redux/friendsReducer";
import * as axios from "axios";
import Preloader from "../common/Preloader/Preloader";

class FriendsContainer extends React.Component {

    componentDidMount() {
        this.props.setToggleIsLoading(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setToggleIsLoading(false)
                this.props.setFriends(response.data.items)
                this.props.setTotalCountPages(response.data.totalCount)
            })
    }

    render() {
        return (<>
                {this.props.isLoading ? <Preloader/> :
                    <Friends friends={this.props.friends} followedStatus={this.props.followedStatus}
                             totalFriendsCount={this.props.totalFriendsCount} pageSize={this.props.pageSize}
                             currentPage={this.props.currentPage} setFriends={this.props.setFriends}
                             onPageChanged={this.onPageChanged} changePage={this.changePage}
                             setCurrentPage={this.props.setCurrentPage}
                             setCurrentPageButton={this.props.setCurrentPageButton}
                             setToggleIsLoading={this.props.setToggleIsLoading}/>}
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        friends: state.friendsPage.friends,
        pageSize: state.friendsPage.pageSize,
        totalFriendsCount: state.friendsPage.totalFriendsCount,
        currentPage: state.friendsPage.currentPage,
        isLoading: state.friendsPage.isLoading,
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         followedStatus: (FriendId) => dispatch(followedStatus(FriendId)),
//         setFriends: (friendsData) => dispatch(setFriends(friendsData)),
//         setCurrentPage: (pageNumber) => dispatch(setCurrentPage(pageNumber)),
//         setTotalCountPages: (pagesData) => dispatch(setTotalCountPages(pagesData)),
//         setCurrentPageButton: (pagesData, move) => dispatch(setCurrentPageButton(pagesData, move)),
//         setToggleIsLoading: (isLoading) => dispatch(setToggleIsLoading(isLoading))
//     }
// }

export default connect(mapStateToProps,
    {
        followedStatus,
        setFriends,
        setCurrentPage,
        setTotalCountPages,
        setCurrentPageButton,
        setToggleIsLoading
    })(FriendsContainer)
