import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator, deletePostAC } from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext"
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        postsData: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => dispatch(updateNewPostTextActionCreator(text)),
        addPost: (newPostText) => dispatch(addPostActionCreator(newPostText)),
        deletePost: (idToRemove) => dispatch(deletePostAC(idToRemove))
    }
}


const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;


