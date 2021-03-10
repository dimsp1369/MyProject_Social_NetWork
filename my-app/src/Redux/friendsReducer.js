const FOLLOW = 'FOLLOW'
const SET_FRIENDS = 'SET_FRIENDS'

let initialState = {
    friends: [
    //     {
    //     id: 1,
    //     avatarURL: 'https://tse1.mm.bing.net/th/id/OIP.R_zG7xo9MGYSzYr2E2BxDQHaJQ?pid=ImgDet&rs=1',
    //     followed: true,
    //     statusText: '12314',
    //     country: 'Russia',
    //     city: 'Moscow',
    //     name: 'Carl'
    // },
    //     {
    //         id: 2,
    //         avatarURL: 'https://tse1.mm.bing.net/th/id/OIP.R_zG7xo9MGYSzYr2E2BxDQHaJQ?pid=ImgDet&rs=1',
    //         followed: false,
    //         statusText: 'ewrr',
    //         country: 'Ukraine',
    //         city: 'Kiev',
    //         name: 'Allan'
    //     },
    //     {
    //         id: 3,
    //         avatarURL: 'https://tse1.mm.bing.net/th/id/OIP.R_zG7xo9MGYSzYr2E2BxDQHaJQ?pid=ImgDet&rs=1',
    //         followed: true,
    //         statusText: '21312',
    //         country: 'Russia',
    //         city: 'Nizhny NOvgorod',
    //         name: 'Nuddle'
    //     },
    //     {
    //         id: 4,
    //         avatarURL: 'https://tse1.mm.bing.net/th/id/OIP.R_zG7xo9MGYSzYr2E2BxDQHaJQ?pid=ImgDet&rs=1',
    //         followed: true,
    //         statusText: 'erterte',
    //         country: 'Ukraine',
    //         city: 'Kiev',
    //         name: 'Batman'
    //     },
    //     {
    //         id: 5,
    //         avatarURL: 'https://tse1.mm.bing.net/th/id/OIP.R_zG7xo9MGYSzYr2E2BxDQHaJQ?pid=ImgDet&rs=1',
    //         followed: false,
    //         statusText: 'qweqweq werwr',
    //         country: 'Russia',
    //         city: 'Moscow',
    //         name: 'BamBamBigelou'
    //     },
    //     {
    //         id: 6,
    //         avatarURL: 'https://tse1.mm.bing.net/th/id/OIP.R_zG7xo9MGYSzYr2E2BxDQHaJQ?pid=ImgDet&rs=1',
    //         followed: true,
    //         statusText: 'erterte',
    //         country: 'U.S.',
    //         city: 'Chicago',
    //         name: 'Polly'
    //     },
    //     {
    //         id: 7,
    //         avatarURL: 'https://tse1.mm.bing.net/th/id/OIP.R_zG7xo9MGYSzYr2E2BxDQHaJQ?pid=ImgDet&rs=1',
    //         followed: true,
    //         statusText: 'qweqweqw',
    //         country: 'UK',
    //         city: 'London',
    //         name: 'Frank'
    //     },
    //     {
    //         id: 8,
    //         avatarURL: 'https://tse1.mm.bing.net/th/id/OIP.R_zG7xo9MGYSzYr2E2BxDQHaJQ?pid=ImgDet&rs=1',
    //         followed: true,
    //         statusText: 'erte rtert',
    //         country: 'Japan',
    //         city: 'Tokyo',
    //         name: 'Pablo'
    //     },
    //     {
    //         id: 9,
    //         avatarURL: 'https://tse1.mm.bing.net/th/id/OIP.R_zG7xo9MGYSzYr2E2BxDQHaJQ?pid=ImgDet&rs=1',
    //         followed: true,
    //         statusText: 'qwewer etue',
    //         country: 'Russia',
    //         city: 'Moscow',
    //         name: 'Den Marino'
    //     }
        ],
}

const friendsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                friends: state.friends.map(el => el.id === action.friendId ? {...el, followed: !el.followed} : {...el})
            }
        case SET_FRIENDS:
            return {...state, friends: [...state.friends, ...action.friendsData]}
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

export default friendsReducer