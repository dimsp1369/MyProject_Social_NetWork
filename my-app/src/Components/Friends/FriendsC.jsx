import React from 'react';
import s from './Friends.module.css'
import Friend from "./Friend/Friend";
import * as axios from 'axios'
import PaginationBar from "./PaginationBar";


class FriendsC extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setFriends(response.data.items)
                this.props.setTotalPages(response.data.totalCount)
            })
    }

    // onPageChanged = (pageNumber) => {
    //     this.props.setCurrentPage(pageNumber)
    //     axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
    //         .then(response => {
    //             this.props.setFriends(response.data.items)
    //         })
    // }

    render() {

        // let pagesCount = Math.ceil(this.props.totalFriendsCount / this.props.pageSize)
        //
        // let pages = []
        // for (let i = 1; i <= pagesCount; i++) {
        //     pages.push(i)
        // }

        return (
            <div className={s.frList}>
                {/*<div >*/}
                {/*    {pages.map(p => <span className={this.props.currentPage === p ? s.selectedPage : s.pages} onClick={(e) => this.onPageChanged(p)}>{p}</span>)}*/}
                {/*</div>*/}
                {this.props.friends.map(friends => <Friend key={Math.random()} friends={friends}
                                                           updateFollowedStatus={this.props.updateFollowedStatus}/>)}
                <PaginationBar totalFriendsCount={this.props.totalFriendsCount} pageSize={this.props.pageSize}
                               currentPage={this.props.currentPage} onPageChanged={this.onPageChanged}
                               setCurrentPage={this.props.setCurrentPage} setFriends={this.props.setFriends}
                               setCurrentPageButton={this.props.setCurrentPageButton}/>
            </div>
        )
    }
}

export default FriendsC;