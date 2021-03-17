import React from 'react';
import Post from "./Post/Post";



const MyPosts = (props) => {

    const posts = props.posts.map(post => <Post key={Math.random()} text={post.message} count={post.likeCount}/>)

    const addPost = () => {
        props.addPost()
    }

    const onPostChange = (e) => {
        const text = e.target.value;
        props.updateNewPost(text)
    }

    return (
        <div>
            <h3>My notice</h3>
            <div>
                {posts}
            </div>
            <div>
                <textarea cols="60" rows="3" onChange={onPostChange}
                          value={props.newPost}/>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
        </div>
    )
}

export default MyPosts;