import React from 'react';
import s from './Contacts.module.css'
import Messages from "./Messages/Messages";


const Contacts = (props) => {

    return (
        <div className={s.contacts}>
            <div className={s.contactsList} >
                {props.contactsElement}
            </div>
            <div>
                <Messages message={props.messagesElement}
                          dispatch={props.dispatch}
                          addMessage={props.addMessage}
                          UpdateNewMessageActionCreator={props.UpdateNewMessageActionCreator}/>
            </div>

        </div>
    )

}

export default Contacts;