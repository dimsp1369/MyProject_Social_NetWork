import React from 'react'
import gitHubIcon from '../../../assets/icon/github.png'
import faceBookIcon from '../../../assets/icon/facebook-512.webp'
import twitterIcon from '../../../assets/icon/769px-Twitter_icon.svg.png'

const ContactNavigation = (props) => {
    return (<>
            <div>
                <a href={props.userContactInfo.facebook}><img src={faceBookIcon} alt="facebook"/></a>
                <a href={props.userContactInfo.twitter}><img src={twitterIcon} alt="twitter"/></a>
                <a href={props.userContactInfo.github}><img src={gitHubIcon} alt="github"/></a>
            </div>
        </>
    )
}

export default ContactNavigation