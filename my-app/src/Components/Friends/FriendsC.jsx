import React, {useEffect} from 'react';
import s from './Friends.module.css'
import Friend from "./Friend/Friend";
import * as axios from 'axios'


class FriendsC extends React.Component {

    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                this.props.setFriends(response.data.items)
            })
    }

    render() {
        return (
            <div className={s.frList}>
                {this.props.friends.map(friends => <Friend key={Math.random()} friends={friends}
                                                           updateFollowedStatus={this.props.updateFollowedStatus}/>)}
            </div>
        )
    }
}

export default FriendsC;