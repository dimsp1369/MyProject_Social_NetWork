import MyPosts from "./MyPosts";
import {addPost, updateNewPost} from "../../../Redux/profileReducer";
import {connect} from "react-redux";


const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPost: state.profilePage.newPost
    }
}

const MyPostsContainer = connect(mapStateToProps, {addPost, updateNewPost})(MyPosts)

export default MyPostsContainer;