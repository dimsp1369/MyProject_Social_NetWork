const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';

let initialState = {
    contacts: [
        {id: 1, name: 'Carl'},
        {id: 2, name: 'Allan'},
        {id: 3, name: 'Nuddle'},
        {id: 4, name: 'Batman'},
        {id: 5, name: 'BamBamBigelou'}
    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Yo'},
        {id: 3, message: 'I\'m Batman'},
        {id: 4, message: 'Where is the fish?'}
    ],
    newMessage: ''
}

const contactReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let text = state.newMessage
            return {
                ...state,
                newMessage: '',
                messages: [...state.messages, {id: 5, message: text}]
            }
        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessage: action.newMessage
            }
        default:
            return state
    }
}

export const addMessageActionCreator = () => ({
    type: ADD_MESSAGE
})

export const UpdateNewMessageActionCreator = (message) => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    newMessage: message
})

export default contactReducer