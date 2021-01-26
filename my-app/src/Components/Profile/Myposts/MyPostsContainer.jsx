import React from 'react';
import MyPosts from "./MyPosts";
import {addPostActionCreator, updateNewPostActionCreator} from "../../../Redux/profileReducer";
import Post from "./Post/Post";


const MyPostsContainer = (props) => {
    let state = props.store.getState();
    let posts = state.profilePage.posts.map(post => <Post text={post.message} count={post.likeCount}/>)

    let addPost = () => {
        props.store.dispatch(addPostActionCreator())
    }

    let onPostChange = (text) => {
        let action = updateNewPostActionCreator(text)
        props.store.dispatch(action)
    }

    return (<MyPosts updateNewPostText={onPostChange}
                     addPost={addPost}
                     posts={posts}
                     newPost={state.profilePage.newPost}/>)
}

export default MyPostsContainer;