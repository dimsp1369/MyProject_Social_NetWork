import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";


const MyPosts = (props) => {

    let posts = props.posts.map(post => <Post text={post.message} count={post.likeCount}/>)

    let addPost = () => {
        props.addPost()
    }

    let onPostChange = (e) => {
        let text = e.target.value;
        props.updateNewPostText(text)
    }

    return (
        <div className={s.post}>
            My notice
            <div>
                {posts}
            </div>
            <div>
                <textarea className={s.fill} cols="60" rows="3" onChange={onPostChange}
                          value={props.newPost}/>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
        </div>
    )
}

export default MyPosts;