import React from 'react';
import s from './Navbar.module.css';
import Friends from './Friends/Friends';
import {NavLink} from "react-router-dom";
import FriendsContainer from "./Friends/FriendsContainer";


const Navbar = () => {

    return (
        <div className={s.nav}>
          <nav className={s.list}>
            <div className={s.item}>
            <NavLink to="/profile" activeClassName={s.active}><span>> </span>Profile</NavLink>
            </div>
            <div className={s.item}>
            <NavLink to="/dialogs" activeClassName={s.active}><span>> </span>Messages</NavLink>
            </div>
            <div className={s.item}>
            <NavLink to="/news" activeClassName={s.active}><span>> </span>News</NavLink>
            </div>
            <div className={s.item}>
            <NavLink to="/music" activeClassName={s.active}><span>> </span>Music</NavLink>
            </div>
            <div className={s.item}>
            <NavLink to="/users" activeClassName={s.active}><span>> </span>Users</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/settings" activeClassName={s.active}><span>> </span>Settings</NavLink>
            </div>
          </nav>
          {/*<FriendsContainer />*/}
        </div>
    );    
}

export default Navbar;