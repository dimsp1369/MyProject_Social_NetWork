import React from 'react';
import s from './Post.module.css'

const Post = (props) => {
    return (
        <div>
            <div className={s.item}>
                <div key={Math.random()}>
                    <img
                        src="https://store.playstation.com/store/api/chihiro/00_09_000/container/US/en/99/UP1655-CUSA05209_00-AV00000000000002/0/image?_version=00_09_000&platform=chihiro&bg_color=000000&opacity=100&w=720&h=720"
                        alt="Avatar"/>
                    {props.text}
                </div>
                <span className={s.itemLike} key={Math.random()}>{props.count} like</span>
            </div>
        </div>
    )
}

export default Post;