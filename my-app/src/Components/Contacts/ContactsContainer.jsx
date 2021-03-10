import React from 'react';
import Contacts from "./Contacts";
import {addMessageActionCreator, UpdateNewMessageActionCreator} from "../../Redux/contactReducer";
import {connect} from "react-redux";


const mapStateToProps = (state) => {
    return {
        contacts: state.contactsPage.contacts,
        messages: state.contactsPage.messages,
        newMessage: state.contactsPage.newMessage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {
            dispatch(addMessageActionCreator())
        },
        UpdateNewMessageActionCreator: (message) => {
            dispatch(UpdateNewMessageActionCreator(message))
        }
    }
}

const ContactsContainer = connect(mapStateToProps, mapDispatchToProps)(Contacts)

export default ContactsContainer;