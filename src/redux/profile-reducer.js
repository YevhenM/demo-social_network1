import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = 'profile/ADD-POST';
const UPDATE_NEW_POST_TEXT = 'profile/UPDATE-NEW-POST-TEXT';
const DELETE_POST = 'profile/DELETE-POST';
const SET_USER_PROFILE = 'profile/SET-USER-PROFILE';
const SET_STATUS = 'profile/SET_STATUS';

let initialState = {
    postsData: [
        {id: 5, text: "Hello world!", likes: "5", comments: "17"},
        {
            id: 4,
            text: "It's my first post here. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit molestias pariatur architecto, ea voluptas nulla modi ut nesciunt adipisci error debitis odit velit a alias omnis. Veniam et placeat voluptatum?",
            likes: "9",
            comments: "16"
        },
        {id: 3, text: 'Anybody hear me?', likes: "6", comments: "0"},
        {id: 2, text: 'Anybody hear me??', likes: "13", comments: "1"},
        {id: 1, text: 'London isn`t the Capital of Great Britain - is the Capital of United Kingdoom', likes: "716", comments: "123"}
    ],
    newPostText: "new post",
    profile: {
        aboutMe: "I lern React!",
        contacts: {
            facebook: 'facebook.com',
            website: null,
            vk: null,
            twitter: null,
            instagram: 'instagram.com',
            youtube: 'youtube.com',
            github: 'github.com',
            mainLink: null
        },
        lookingForAJob: true,
        LookingForAJobDescription: "Looking for a cool job!",
        fullName: 'John Smith',
        userId: 5555,
        photos: {
            small: 'https://s23527.pcdn.co/wp-content/uploads/2017/01/85.png',
            large: 'https://s23527.pcdn.co/wp-content/uploads/2017/01/85.png'
        },
    status: 'Hello friends!!!'
    }
};

const profileReducer = (state = initialState, action) => {

    switch(action.type) {
        case ADD_POST:
            let lastId = state.postsData.length>0? parseInt((state.postsData[0].id)):0
            let newId = lastId+1
            let newPost = {
                id: newId,
                text: action.newPostText,
                likes: 0,
                comments: 0
            };
            return {...state,
                         newPostText: "",
                         postsData: [newPost, ...state.postsData]
            };


        case UPDATE_NEW_POST_TEXT:
            return {...state, newPostText: action.message };

        case DELETE_POST:
            return {...state, postsData: [...state.postsData.filter((item) => item.id !== action.idToRemove) ]}

        case SET_USER_PROFILE:
            return {...state, profile: action.profile}

        case SET_STATUS:
            return {...state, status: action.status}


        default:
            return state;
    }

}

export const addPostActionCreator = (newPostText) => ({ type: ADD_POST, newPostText });

export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    message: text
});

export const deletePostAC = (idToRemove) => ({
    type: DELETE_POST,
    idToRemove: idToRemove
});

const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})

const setStatus = (status) => ({type: SET_STATUS, status})


export const getUserProfile = (userId) => async (dispatch) => {
        const response = await profileAPI.getUserProfile(userId)
                dispatch(setUserProfile(response.data));
    }


export const getStatus = (userId) => async (dispatch) => {
        const response = await profileAPI.getStatus(userId)
                dispatch(setStatus(response.data));
    }

export const updateStatus = (status) => async (dispatch) => {
    const response = await profileAPI.updateStatus(status)
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status));
            }
}



export default profileReducer