import React from 'react';


const Description = (props) => {
    return <div>
        <div>
            <span>{props.userProfile.lookingForAJobDescription}</span>
        </div>
        <div>
            <span>{props.userProfile.aboutMe}</span>
        </div>

    </div>

}

export default Description;