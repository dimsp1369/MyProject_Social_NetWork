const FOLLOW = 'FOLLOW'
const SET_FRIENDS = 'SET_FRIENDS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_CURRENT_PAGE_BUTTON = 'SET_CURRENT_PAGE_BUTTON'
const TOTAL_COUNT_PAGES = 'TOTAL_COUNT_PAGES'
const TOGGLE_IS_LOADING = 'TOGGLE_IS_LOADING'
const TOGGLE_IS_FOLLOWING = 'TOGGLE_IS_FOLLOWING'

let initialState = {
    friends: [],
    pageSize: 10,
    totalFriendsCount: 0,
    currentPage: 1,
    isLoading: false,
    isFollowing: []
}

const friendsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                friends: state.friends.map(el => el.id === action.friendId ? {...el, followed: !el.followed} : {...el})
            }
        case SET_FRIENDS:
            return {...state, friends: action.friendsData}
        case SET_CURRENT_PAGE:
            console.log(action.pageNumber)
            return {...state, currentPage: action.pageNumber}
        case TOTAL_COUNT_PAGES:
            return {...state, totalFriendsCount: action.pagesData}
        case SET_CURRENT_PAGE_BUTTON:
            return {...state, currentPage: action.currentPage + action.move}
        case TOGGLE_IS_LOADING:
            return {...state, isLoading: action.isLoading}
        case TOGGLE_IS_FOLLOWING:
            return {
                ...state,
                isFollowing: action.isFetch ? [...state.isFollowing, action.userId] : state.isFollowing.filter(id => id !== action.userId)
            }
        default:
            return state
    }
}

export const followedStatus = (friendId) => ({type: FOLLOW, friendId})
export const setFriends = (friendsData) => ({type: SET_FRIENDS, friendsData})
export const setCurrentPage = (pageNumber) => ({type: SET_CURRENT_PAGE, pageNumber: pageNumber})
export const setCurrentPageButton = (currentPage, move) => ({
    type: SET_CURRENT_PAGE_BUTTON,
    currentPage: currentPage,
    move: move
})
export const setTotalCountPages = (pagesData) => ({type: TOTAL_COUNT_PAGES, pagesData})
export const setToggleIsLoading = (isLoading) => ({type: TOGGLE_IS_LOADING, isLoading})
export const setToggleIsFollowing = (isFetch, userId) => ({type: TOGGLE_IS_FOLLOWING, isFetch, userId})

export default friendsReducer