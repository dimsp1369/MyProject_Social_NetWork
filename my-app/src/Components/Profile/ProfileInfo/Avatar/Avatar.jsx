import React from 'react';

const Avatar = (props) => {
    return <div>
        <div>
            <img src={props.userAvatar.photos.large} alt="UserAvatar"/>
        </div>
    </div>

}

export default Avatar;