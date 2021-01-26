import React from 'react';
import ContactItem from "./ContactsItem/ContactsItem";
import Message from "./Messages/Message";
import Contacts from "./Contacts";
import {addMessageActionCreator, UpdateNewMessageActionCreator} from "../../Redux/contactReducer";


const ContactsContainer = (props) => {
    let state = props.store.getState()
    let contactsElement = state.contactsPage.contacts.map(contact => <ContactItem name={contact.name}
                                                                                  id={contact.id}/>);
    let messagesElement = state.contactsPage.messages.map(message => <Message text={message.message}/>)

    let addMessage = () => {
         props.store.dispatch(addMessageActionCreator());
    }

    let onMessageChange = (message) => {
        let action = UpdateNewMessageActionCreator(message)
        props.store.dispatch(action);
    }


    return (<Contacts contactsElement={contactsElement}
                      messagesElement={messagesElement}
                      addMessage={addMessage}
                      UpdateNewMessageActionCreator={onMessageChange}/>)

}

export default ContactsContainer;