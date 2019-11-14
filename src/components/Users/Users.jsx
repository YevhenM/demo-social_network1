import React from 'react';
import s from "./users.module.css";
import userPhoto from "../assets/images/maleUser.jpg";
import {NavLink} from "react-router-dom";

let Users = (props) => {

        let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
        let pages = [];
        let startPageInList = props.currentPage - 3
        startPageInList<1 ? startPageInList=1 : startPageInList=startPageInList
        startPageInList+6>pagesCount ? startPageInList = pagesCount-6 : startPageInList=startPageInList
        for (let i=startPageInList; i<=startPageInList+6; i++) {
            pages.push(i);
        }

    return <div>
        <div className={s.pageSelector}>
            <span>Page:</span>
            {pages.map(p=>{
                return <span className={props.currentPage === p && s.selectedPage}
                             onClick={(e) =>{props.onPageChanged(p)}}>{" "}{ p }{" "}</span>
            })}
        </div>

        {   props.users.map( u => <div className={s.userBox} key={u.id}>
                <span className={s.userPicAndButton}>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                            <img className={s.userpic} src={u.photos.small? u.photos.small: userPhoto}/>
                        </NavLink>
                    </div>
                    <div>
                        {u.followed
                            ? <button disabled={props.followingInProgress.some(id => id === u.id)} className={s.butFolow} onClick={() =>{
                                props.unfollowThunk(u.id)

                                } }>Unfollow</button>

                            : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() =>{
                                props.followThunk(u.id)

                                } }>Follow</button>}
                    </div>
                </span>

            <span>
                    <span>
                        <div className={s.userName}>{u.name}</div>
                        <div className={s.status}>{u.status}</div>
                    </span>

                    <span>
                        <span className={s.location}>{"u.location.country"}</span>
                        <span className={s.location}>{"u.location.city"}</span>
                    </span>

                </span>
        </div>)
        }
    </div>
}

export default Users;