import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {setAuthUser, setCurrentAuthUser} from "../../Redux/authReducer";
import {userAuth, userData} from "../../api/api";

class HeaderContainer extends React.Component {

    componentDidMount() {
        userAuth().then(data => {
            const {id, email, login} = data.data
            this.props.setAuthUser(id, email, login)
            userData(id).then(res => {
                console.log(res.data)
                this.props.setCurrentAuthUser(res.data)
            })
        })
    }

    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state) => ({
    login: state.auth.login,
    isAuth: state.auth.isAuth,
    currentAuthUser: state.auth.currentAuthUser,
})

export default connect(mapStateToProps, {setAuthUser, setCurrentAuthUser})(HeaderContainer);