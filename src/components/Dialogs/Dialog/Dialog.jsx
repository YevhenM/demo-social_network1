import React from 'react';
import s from './Dialog.module.css';
import {NavLink} from "react-router-dom";

const Dialog = (props) => {
    return (        
                <div className={s.dialog}>
                    <img src={props.userpic}/>
                    <NavLink to={"/dialogs/"+props.id} activeClassName={s.active}><span>> </span>{props.userName}</NavLink>
                </div>               
    );
}

export default Dialog;