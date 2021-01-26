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
            if (state.newPost !== '') {
                let newPost = {
                    id: 5,
                    message: state.newPost,
                    likeCount: 0
                };
                state.posts.push(newPost)
                state.newPost = '';
            }
            return state
        case UPDATE_NEW_POST_TEXT:
            state.newPost = action.newPost;
            return state
        default:
            return state
    }
}

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}
export const updateNewPostActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newPost: text
    }
}
export default profileReducer