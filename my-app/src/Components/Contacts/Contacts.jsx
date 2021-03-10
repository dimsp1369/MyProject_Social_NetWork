import React from 'react';
import s from './Contacts.module.css'
import Messages from "./Messages/Messages";
import ContactItem from "./ContactsItem/ContactsItem";
import Message from "./Messages/Message";


const Contacts = (props) => {

    const contactsElement = props.contacts.map(contact => <ContactItem key={Math.random()} name={contact.name} id={contact.id}/>);
    const messagesElement = props.messages.map(message => <Message key={Math.random()} text={message.message}/>)

    return (
        <div className={s.contacts}>
            <div className={s.contactsList}>
                {contactsElement}
            </div>
            <div>
                <Messages message={messagesElement}
                          dispatch={props.dispatch}
                          addMessage={props.addMessage}
                          newMessage={props.newMessage}
                          UpdateNewMessageActionCreator={props.UpdateNewMessageActionCreator}/>
            </div>

        </div>
    )

}

export default Contacts;