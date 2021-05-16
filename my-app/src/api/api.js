import * as axios from "axios";

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {"API-KEY": "85f508ba-b508-44e8-90de-35f299b3bd39"}
})

export const getUsers = (currentPage, pageSize) => {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
}

export const userFollow = (friendsId) => {
    return instance.post(`follow/${friendsId}`).then(response => response.data)
}

export const userUnfollow = (friendsId) => {
    return instance.delete(`follow/${friendsId}`).then(response => response.data)
}

export const userAuth = () => {
    return instance.get(`auth/me`).then(res => res.data)
}

export const userData = (id) => {
    return instance.get(`profile/${id}`)
}