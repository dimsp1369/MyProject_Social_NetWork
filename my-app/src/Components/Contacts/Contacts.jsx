import React from 'react';
import s from './Contacts.module.css'
import Messages from "./Messages/Messages";
import ContactItem from "./ContactsItem/ContactsItem";
import Message from "./Messages/Message";


const Contacts = (props) => {

    let contactsElement = props.contacts.map(contact => <ContactItem name={contact.name} id={contact.id}/>);
    let messagesElement = props.messages.map(message => <Message text={message.message}/>)

    return (
        <div className={s.contacts}>
            <div className={s.contactsList}>
                {contactsElement}
            </div>
            <div>
                <Messages message={messagesElement}
                          dispatch={props.dispatch}
                          addMessage={props.addMessage}
                          UpdateNewMessageActionCreator={props.UpdateNewMessageActionCreator}/>
            </div>

        </div>
    )

}

export default Contacts;