const SET_AUTH_USER = 'SET_AUTH_USER';
const SET_CURRENT_AUTH_USER = 'SET_CURRENT_AUTH_USER';


let initialState = {
    id: null,
    email: null,
    login: null,
    currentAuthUser: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        case SET_CURRENT_AUTH_USER:
            return {
                ...state, currentAuthUser: action.currentUserData
            }
        default:
            return state
    }
}

export const setAuthUser = (userId, email, login) => ({type: SET_AUTH_USER, data: {userId, email, login}})
export const setCurrentAuthUser = (currentUserData) => ({type: SET_CURRENT_AUTH_USER, currentUserData})

export default authReducer