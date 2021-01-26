import React from 'react';
import s from './../Contacts.module.css'


const Message = (props) => {
    return <div className={s.message} key={Math.random()}>
        <img src="http://cdn.onlinewebfonts.com/svg/img_199837.png" alt=""/>
        {props.text}
    </div>
}

export default Message;