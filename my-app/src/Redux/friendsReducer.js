const FOLLOW = 'FOLLOW'
const SET_FRIENDS = 'SET_FRIENDS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_CURRENT_PAGE_BUTTON = 'SET_CURRENT_PAGE_BUTTON'
const TOTAL_COUNT_PAGES = 'TOTAL_COUNT_PAGES'

let initialState = {
    friends: [],
    pageSize: 10,
    totalFriendsCount: 0,
    currentPage: 1
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
        default:
            return state
    }
}

export const followedStatus = (friendId) => ({
    type: FOLLOW, friendId
})

export const setFriendsAC = (friendsData) => ({
    type: SET_FRIENDS, friendsData
})
export const setCurrentPageAC = (pageNumber) => ({
    type: SET_CURRENT_PAGE, pageNumber: pageNumber
})
export const setCurrentPageButtonAC = (currentPage, move) => ({
    type: SET_CURRENT_PAGE_BUTTON, currentPage: currentPage, move: move
})
export const setTotalCountPAgesAC = (pagesData) => ({
    type: TOTAL_COUNT_PAGES, pagesData
})

export default friendsReducer