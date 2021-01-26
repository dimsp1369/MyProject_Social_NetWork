import React from 'react';
import s from './../Contacts.module.css'


const Messages = (props) => {

    let addMessage = () => {
        props.addMessage()
    }

    let onMessageChange = (e) => {
        let message = e.target.value;
        props.UpdateNewMessageActionCreator(message)
    }
    return <div className={s.messages}>
        <div>{props.message}</div>
        <div className={s.itemPost}>
            <div>
                <textarea cols='60' rows="5" value={props.newMessage} onChange={onMessageChange}/>
            </div>
            <div>
                <button onClick={addMessage}>Add message</button>
            </div>
        </div>
    </div>
}

export default Messages;