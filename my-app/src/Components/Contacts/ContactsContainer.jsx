import React from 'react';
import Contacts from "./Contacts";
import {addMessageActionCreator, UpdateNewMessageActionCreator} from "../../Redux/contactReducer";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        contacts: state.contactsPage.contacts,
        messages: state.contactsPage.messages
    }
}

let mapDispatchToProps = (dispatch) => {
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