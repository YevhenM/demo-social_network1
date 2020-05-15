import React from 'react';
import s from "./users.module.css";
import userPhoto from "../assets/images/maleUser.jpg";
import {NavLink} from "react-router-dom";
import Pagenator from "./Pagenator/Pagenator";

let Users = (props) => {

        function pagesList(numberOfPages, currentPage, listLenght) {
            let array = []
            let centerPage = currentPage
                if (centerPage<listLenght + 1) {centerPage = listLenght + 1}
                if (centerPage>numberOfPages - listLenght) {centerPage = numberOfPages - listLenght}
            let startPageBlock = centerPage - listLenght
            let finishPageBlock = centerPage + listLenght

            if (startPageBlock>1) {array.push(1)}
            if (startPageBlock>2)  {array.push('...')}
            for (let i=startPageBlock; i<=finishPageBlock; i++) {array.push(i)}
            if (finishPageBlock<numberOfPages-1)  {array.push('...')}
            if (finishPageBlock<numberOfPages)  {array.push(numberOfPages)}

            return array
        }

        let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);


    let arr = pagesList(pagesCount, props.currentPage, 8)


    return <div>

        <Pagenator currentPage={props.currentPage}
                   onPageChanged={props.onPageChanged}
                   totalUsersCount={props.totalUsersCount}
                   pageSize={props.pageSize}
                    />

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
        <Pagenator currentPage={props.currentPage}
                   onPageChanged={props.onPageChanged}
                   totalUsersCount={props.totalUsersCount}
                   pageSize={props.pageSize}
        />
    </div>
}

export default Users;