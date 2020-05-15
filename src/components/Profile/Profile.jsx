import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts.jsx'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import store from "../../redux/redux-store";

const Profile = (props) => {

    return (
      <div>
        <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
        <MyPostsContainer
                 store={store}
                    />
      </div>
    );    
}

export default Profile;


//postsData={props.postsData}
//newPostText={props.newPostText}
//dispatch={props.dispatch}