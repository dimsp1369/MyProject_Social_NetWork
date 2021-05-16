import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile} from "../../Redux/profileReducer";
import {withRouter} from "react-router-dom";
import {userData} from "../../api/api";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = 15775
        }
        userData(userId).then(response => {
                this.props.getUserProfile(response.data)
            })
    }

    render() {
        return (
            <Profile {...this.props} userProfile={this.props.userProfile}/>
        )
    }
}

const mapStateToProps = (state) => ({
    userProfile: state.profilePage.userProfile,
})

const withURLDataProfileContainer = withRouter(ProfileContainer)


export default connect(mapStateToProps, {getUserProfile})(withURLDataProfileContainer);