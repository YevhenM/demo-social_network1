import React from 'react';
import s from './Friends.module.css';
import Friend from './Friend/Friend';
import {NavLink} from "react-router-dom";
import Post from "../../Profile/MyPosts/Post/Post";


const Friends = (props) => {


    let friendsList = props.friends.map(p => <Friend name={p.name} userpic={p.userpic} key={p.id}/>);

    return (

          <div className={s.friends}>
            <h4>Friends</h4>
              <div className={s.friendsField}>
                  {friendsList}

              </div>
          </div>

    );    
}

export default Friends;