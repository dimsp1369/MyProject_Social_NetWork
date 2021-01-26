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
    const newMessage = [...state.posts]
    let newPost = state.newPost
    switch (action.type) {
        case ADD_POST:
            if (state.newPost !== '') {
                let newPost = {
                    id: 5,
                    message: state.newPost,
                    likeCount: 0
                };
                newMessage.push(newPost)
                newPost = '';
            }
            return {...state, posts: newMessage, newPost: newPost}
        case UPDATE_NEW_POST_TEXT:
            newPost = action.newPost;
            return {...state, newPost: newPost}
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