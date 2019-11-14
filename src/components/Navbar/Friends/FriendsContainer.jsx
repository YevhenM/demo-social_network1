import React from 'react';
import s from './Friends.module.css';
import Friend from './Friend/Friend';
import {NavLink} from "react-router-dom";
import Post from "../../Profile/MyPosts/Post/Post";
import {connect} from "react-redux";
import Friends from "./Friends";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../../redux/dialogs-reducer";


let mapStateToProps = (state) => {
    return {
        friends: state.navbarPage.friends
    }
}
let mapDispathToProps = (dispatch) => {
    return {
    }
}


const FriendsContainer = connect(mapStateToProps, mapDispathToProps)(Friends)



export default FriendsContainer;