import React from 'react';
import s from './MyPosts.module.css'


const MyPosts = (props) => {

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
                {props.posts}
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