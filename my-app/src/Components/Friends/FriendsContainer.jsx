import React from 'react';
import {connect} from "react-redux";
import Friends from "./Friends";
import {
    followedStatus,
    setCurrentPage,
    setCurrentPageButton,
    setFriends,
    setToggleIsFollowing,
    setToggleIsLoading,
    setTotalCountPages
} from "../../Redux/friendsReducer";
import Preloader from "../common/Preloader/Preloader";
import {getUsers} from "../../api/api";

class FriendsContainer extends React.Component {

    componentDidMount() {
        this.props.setToggleIsLoading(true)

        getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.setToggleIsLoading(false)
            this.props.setFriends(data.items)
            this.props.setTotalCountPages(data.totalCount)
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
                             setToggleIsLoading={this.props.setToggleIsLoading}
                             setToggleIsFollowing={this.props.setToggleIsFollowing}
                             isFollowing={this.props.isFollowing}/>}
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
        isFollowing: state.friendsPage.isFollowing
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
        setToggleIsLoading,
        setToggleIsFollowing
    })(FriendsContainer)
