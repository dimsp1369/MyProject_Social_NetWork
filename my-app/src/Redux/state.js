import profileReducer from "./profileReducer";
import contactReducer from "./contactReducer";
import friendsReducer from "./friendsReducer";


let store = {
    _state: {
        profilePage: {
            status: [],
            posts: [
                {id: 1, message: 'Hello, this is my first post', likeCount: 335},
                {id: 2, message: 'Hi, i\'m trying to learn React', likeCount: 4},
                {id: 3, message: 'Is somebody here?', likeCount: 23},
                {id: 4, message: 'I am Batman!', likeCount: 101},
            ],
            newPost: ''
        },
        contactsPage: {
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
        },
        friendsPage: {
            friends: [
                {id: 1, name: 'Carl'},
                {id: 2, name: 'Allan'},
                {id: 3, name: 'Nuddle'},
                {id: 4, name: 'Batman'},
                {id: 5, name: 'BamBamBigelou'},
                {id: 6, name: 'Polly'},
                {id: 7, name: 'Frank'},
                {id: 8, name: 'Pablo'},
                {id: 9, name: 'Den Marino'}
            ],
        }
    },
    _callSubscriber() {
        console.log()
    },

    getState() {
        return this._state
    },
    subscriber(observer) {
        this._callSubscriber = observer
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.contactsPage = contactReducer(this._state.contactsPage, action)
        this._state.friendsPage = friendsReducer(this._state.friendsPage, action)

        this._callSubscriber(this._state)
    }

}


export default store





