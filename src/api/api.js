import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "78963147-1c68-4781-a049-62497da2d131"
    }
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 6) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    },
    followUserRequest(userId) {
        return instance.post(`follow/${userId}`)
            /*.then(response => response.data)*/
    },
    unfollowUserRequest (userId) {
        return instance.delete(`follow/${userId}`)
            /*.then(response => response.data);*/
    },
    getUserProfile (userId) {
        console.warn('Obsolete method. Please use profileAPI object')
        return profileAPI.getUserProfile(userId);
    }
}

export const profileAPI = {

    getUserProfile (userId) {
        return instance.get(`profile/${userId}`)
            /*.then(response => response.data);*/
    },
    getStatus (userId) {
        return instance.get(`profile/status/${userId}`)
            /*.then(response => response.data);*/
    },
    updateStatus (status) {
        return instance.put(`profile/status`, { status: status})
            /*.then(response => response.data);*/
    }

}



export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    },
    login(email, password, rememberMe = false) {
        return instance.post(`auth/login`, { email, password, rememberMe})
    },
    logout() {
        return instance.delete(`auth/login`)
    }
}



























/*export const getUsers = (currentPage = 1, pageSize = 6) => {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => response.data);
}


export const followUserRequest = (id) => {
    return instance.post(`follow/${id}`)
        .then(response => response.data);
}

export const unfollowUserRequest = (id) => {
    return instance.delete(`follow/${id}`)
        .then(response => response.data);
}

export const getUserProfile = (id) => {
    return instance.get(`profile/` + id)
        .then(response => response.data);
}*/
