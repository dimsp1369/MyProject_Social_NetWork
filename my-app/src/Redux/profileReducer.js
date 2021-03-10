const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    status: [],
    posts: [
        {id: 1, message: 'Hello, this is my first post', likeCount: 335},
        {id: 2, message: 'Hi, i\'m trying to learn React', likeCount: 4},
        {id: 3, message: 'Is somebody here?', likeCount: 23},
        {id: 4, message: 'I am Batman!', likeCount: 101},
    ],
    newPost: ''
}

const profileReducer = (state = initialState, action) => {
     switch (action.type) {
        case ADD_POST:
            let text = state.newPost
            return {
                ...state,
                newPost: '',
                posts: [...state.posts, {id: 5, message: text, likeCount: 0}]
            }
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPost: action.newPost
            }
        default:
            return state
    }
}

export const addPostActionCreator = () => ({
    type: ADD_POST
})
export const updateNewPostActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newPost: text
})
export default profileReducer