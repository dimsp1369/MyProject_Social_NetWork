import Contacts from "./Contacts";
import {addMessage, UpdateNewMessage} from "../../Redux/contactReducer";
import {connect} from "react-redux";


const mapStateToProps = (state) => {
    return {
        contacts: state.contactsPage.contacts,
        messages: state.contactsPage.messages,
        newMessage: state.contactsPage.newMessage
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         addMessage: () => {
//             dispatch(addMessage())
//         },
//         UpdateNewMessage: (message) => {
//             dispatch(UpdateNewMessage(message))
//         }
//     }
// }

const ContactsContainer = connect(mapStateToProps, {addMessage, UpdateNewMessage})(Contacts)

export default ContactsContainer;